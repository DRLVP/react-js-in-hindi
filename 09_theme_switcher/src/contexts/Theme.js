import { useContext, createContext } from "react";


//  create context
export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => { },
    lightTheme: () => { }
});

export const ThemeProvider = ThemeContext.Provider;

export default function useTheme() {
    return useContext(ThemeContext);
}