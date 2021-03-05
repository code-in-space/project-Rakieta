import { useEffect, useReducer, useRef } from 'react';
import axios, { AxiosRequestConfig } from 'axios';

export enum RequestStatus {
    INIT = 'init',
    FETCHING = 'fetching',
    ERROR = 'error',
    FETCHED = 'fetched',
}

enum ActionType {
    REQUEST = 'request',
    SUCCESS = 'success',
    FAILURE = 'failure',
}

interface RequestState<T> {
    status: RequestStatus;
    data?: T;
    error?: string;
}

interface Cache<T> {
    [url: string]: T;
}

type Action<T> =
    | { type: ActionType.REQUEST }
    | { type: ActionType.SUCCESS; payload: T }
    | { type: ActionType.FAILURE; payload: string };

function useRequest<T = unknown>(url?: string, options?: AxiosRequestConfig): RequestState<T> {
    const cache = useRef<Cache<T>>({});
    const cancelRequest = useRef<boolean>(false);

    const initialState: RequestState<T> = {
        status: RequestStatus.INIT,
        error: undefined,
        data: undefined,
    };

    const fetchReducer = (requestState: RequestState<T>, action: Action<T>): RequestState<T> => {
        switch (action.type) {
            case ActionType.REQUEST:
                return { ...initialState, status: RequestStatus.FETCHING };
            case ActionType.SUCCESS:
                return { ...initialState, status: RequestStatus.FETCHED, data: action.payload };
            case ActionType.FAILURE:
                return { ...initialState, status: RequestStatus.ERROR, error: action.payload };
        }
    };

    const [state, dispatch] = useReducer(fetchReducer, initialState);

    useEffect(() => {
        if (!url) return;

        const fetchData = async () => {
            dispatch({ type: ActionType.REQUEST });

            if (cache.current[url]) {
                dispatch({ type: ActionType.SUCCESS, payload: cache.current[url] });
            } else {
                try {
                    const res = await axios(url, options);
                    cache.current[url] = res.data;

                    if (cancelRequest.current) return;

                    dispatch({ type: ActionType.SUCCESS, payload: res.data });
                } catch (error) {
                    if (cancelRequest.current) return;

                    dispatch({ type: ActionType.FAILURE, payload: error.message });
                }
            }
        };

        fetchData();

        return () => {
            cancelRequest.current = true;
        };
    }, [url]);

    return state;
}

export default useRequest;
