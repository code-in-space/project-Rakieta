import { FC } from 'react';
import { Meta } from '@storybook/react';
import GlobalStyle from '../../theme/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme/mainTheme';
import Event, { EventProps } from './Event';

export default {
    title: 'Event',
    component: Event,
} as Meta;

export const SignleEvent: FC<EventProps> = () => (
    <>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
            <Event
                description="NASA TV will livestream the rendezvous and capture of Northrop Grumman's NG-15 Cygnus cargo craft to the International Space Station."
                title="title"
                eventDate={new Date('2021-03-01T12:05:00Z')}
            />
        </ThemeProvider>
    </>
);
