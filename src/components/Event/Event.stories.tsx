import { ThemeProvider } from 'styled-components';
import theme from '../../theme/mainTheme';
import Event from './Event';
import React from 'react';

export default {
  title: 'Event',
  component: Event,
};

export const BlackBG = () => (
  <ThemeProvider theme={theme}>
    <Event
      date={new Date('2020-02-11T15:30:00Z')}
      background={theme.backgrounds.black}
      description="NASA TV will livestream the rendezvous and capture of Northrop Grumman's NG-15 Cygnus cargo craft to the International Space Station."
      title="title"
    />
  </ThemeProvider>
);
