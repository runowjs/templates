'use client';
import { darkConfig, lightConfig } from '@/config/theme';
import { StyleProvider } from '@ant-design/cssinjs';
import { ConfigProvider } from 'antd';
import { setCookie } from 'cookies-next';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import React, { createContext, useContext, useEffect, useState } from 'react';

type Mode = 'dark' | 'light' | 'auto';

type ThemeProviderContext = {
  mode?: Mode;
  setMode: (mode: Mode) => void;
};

const ThemeProviderContext = createContext<ThemeProviderContext | undefined>(
  undefined,
);

export const ThemeProvider: React.FC<
  React.PropsWithChildren<{
    initMode?: string;
  }>
> = ({ children, initMode = 'auto' }) => {
  const [mode, _setMode] = useState<Mode>(initMode as Mode);

  useEffect(() => {
    if (mode) {
      document.documentElement.setAttribute('class', mode);
    }
  }, [mode]);

  const setMode = (mode: Mode) => {
    _setMode(mode);
    setCookie('themeMode', mode, {
      maxAge: 365 * 24 * 60 * 60,
    });
    localStorage.setItem('themeMode', mode);
  };

  return (
    <ThemeProviderContext.Provider
      value={{
        mode,
        setMode,
      }}
    >
      <StyleProvider layer>
        <ConfigProvider theme={mode === 'dark' ? darkConfig : lightConfig}>
          <NextThemesProvider
            attribute="class"
            defaultTheme={mode}
            enableColorScheme={false}
            enableSystem={false}
            storageKey="themeMode"
          >
            {children}
          </NextThemesProvider>
        </ConfigProvider>
      </StyleProvider>
    </ThemeProviderContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  if (context === undefined) {
    throw new Error('useThemeProvider must be used within a ThemeProvider');
  }
  return context;
};
