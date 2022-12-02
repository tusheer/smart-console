import React from 'react';

const theme = {
    color: {
        primary: '#161b22',
        'grey:300': '#f2f2f2f2',
    },
};

const ThemeContext = React.createContext(theme);

export const ThemeProvider = <Props,>(props: Props) => {
    return <ThemeContext.Provider value={theme} {...(props as Props)} />;
};

export function useTheme() {
    return React.useContext(ThemeContext);
}

export default theme;
