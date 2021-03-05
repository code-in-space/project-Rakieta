import { FC } from 'react';
import GlobalStyle from '../theme/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from '../theme/mainTheme';
import Event from '../components/Event/Event';

const App: FC = () => (
    <>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
            <div style={{ width: '100vw', height: '100vh', background: 'black' }}>
                <Event
                    eventDate={new Date('2021-03-01T12:05:00Z')}
                    description="NASA TV will livestream the rendezvous and capture of Northrop Grumman's NG-15 Cygnus cargo craft to the International Space Station."
                    title="New Arrive"
                />
            </div>
        </ThemeProvider>
    </>
);

export default App;
