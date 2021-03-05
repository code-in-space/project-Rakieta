import { FC } from 'react';
import { Meta } from '@storybook/react';
import StyledButton from './Button.styles';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme/mainTheme';
import { ReactComponent as PlusIcon } from '../../assets/icons/plus.svg';
import { ReactComponent as BurgerIcon } from '../../assets/icons/burger.svg';

export default {
    title: 'Button',
    component: StyledButton,
} as Meta;

export const Add: FC = () => (
    <ThemeProvider theme={theme}>
        <StyledButton>
            <PlusIcon />
        </StyledButton>
    </ThemeProvider>
);

export const Menu: FC = () => (
    <ThemeProvider theme={theme}>
        <StyledButton>
            <BurgerIcon />
        </StyledButton>
    </ThemeProvider>
);
