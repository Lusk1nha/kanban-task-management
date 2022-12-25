import { createContext, useCallback, useEffect, useState } from "react";
import { ThemeContextProps, ThemeContextProviderProps } from "../../models";

import { base, light, dark } from '../../../styles';
import { ThemeProvider } from 'styled-components';

const themeLocalStorage = localStorage.getItem('theme');
const defaultTheme = themeLocalStorage ?? 'light';

export const ThemeContext = createContext<ThemeContextProps | null>(null);

const themesMap: any = {
  light,
  dark
};

export function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  const [theme, setTheme] = useState<string>(defaultTheme)
  const themeSchema = { ...base, colors: themesMap[theme] }

  useEffect(() => {
    localStorage.setItem('theme', theme)
  }, [theme])

  const onThemeChange = useCallback((value?: string) => {
    setTheme(
      value ??
        theme === 'light'
        ? 'dark'
        : 'light'
    )
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, onThemeChange }}>
      <ThemeProvider theme={themeSchema}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}