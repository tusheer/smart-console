import React from 'react';
import { ThemeProvider as Provider } from '@emotion/react';

export const theme = {
    color: {
        primary: '#161b22',
        log: '#ffc107',
        error: '#ed4337',
        info: '',
        describe: '',
        success: '',
    },
};

interface IThemeProps {
    children: React.ReactElement;
}

const ThemeProvider: React.FC<IThemeProps> = (props) => {
    return <Provider theme={theme}>{props.children}</Provider>;
};

declare module '@emotion/react' {
    type ThemeType = typeof theme;
    export interface Theme extends ThemeType {}
}

export default ThemeProvider;
