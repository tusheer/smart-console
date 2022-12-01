import React from 'react';

const theme = {
    color: {
        primary: 'black',
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
