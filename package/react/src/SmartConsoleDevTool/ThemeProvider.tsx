import React from 'react';
import { ThemeProvider as Provider } from '@emotion/react';

export const theme = {
    color: {
        primary: '#161b22',
        'grey:300': '#f2f2f2f2',
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
