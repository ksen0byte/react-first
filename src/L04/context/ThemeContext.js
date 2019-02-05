import React from "react";
import chroma from 'chroma-js';

export const themes = {
    light: {
        primary: 'chocolate',
        secondary: 'blanchedalmond',
        secondary2: 'gray',
        secondary3: 'whitesmoke',
        secondary4: 'white',
    },
    dark: {
        primary: chroma('chocolate').darken().css(),
        secondary: chroma('blanchedalmond').darken().css(),
        secondary2: chroma('gray').darken().css(),
        secondary3: chroma('whitesmoke').darken().css(),
        secondary4: chroma('white').darken().css(),
    },
};

export const ThemeContext = React.createContext({
    theme: themes.light, // default value
    toggleTheme: () => {},
});