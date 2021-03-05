import { Meta } from '@storybook/react';
import { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme/mainTheme';
import Event, { EventProps } from './Event';

export default {
    title: 'Event',
    component: Event,
} as Meta;

export const BlackBG: FC<EventProps> = () => (
    <ThemeProvider theme={theme}>
        <Event
            background={theme.backgrounds.black}
            description="NASA TV will livestream the rendezvous and capture of Northrop Grumman's NG-15 Cygnus cargo craft to the International Space Station."
            title="title"
        />
    </ThemeProvider>
);
