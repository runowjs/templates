import { darkConfig, lightConfig } from '@/config/theme';
import { useLocalStorageState } from 'ahooks';
import { ThemeProvider as AntdThemeProvider, StyleProvider } from 'antd-style';
import React, { createContext, useContext, useEffect } from 'react';

type Mode = 'dark' | 'light' | 'auto';

type ThemeProviderContext = {
  mode?: Mode;
  setMode: (mode: Mode) => void;
};

const ThemeProviderContext = createContext<ThemeProviderContext | undefined>(
  undefined,
);

export const ThemeProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [mode, setMode] = useLocalStorageState<Mode>('themeMode', {
    defaultValue: 'auto',
    listenStorageChange: true,
  });

  useEffect(() => {
    if (mode) {
      document.documentElement.setAttribute('class', mode);
    }
  }, [mode]);

  return (
    <ThemeProviderContext.Provider
      value={{
        mode,
        setMode,
      }}
    >
      <StyleProvider speedy>
        <AntdThemeProvider
          defaultThemeMode="auto"
          themeMode={mode}
          theme={mode === 'dark' ? darkConfig : lightConfig}
        >
          {children}
        </AntdThemeProvider>
      </StyleProvider>
    </ThemeProviderContext.Provider>
  );
};

export const useThemeProvider = () => {
  const context = useContext(ThemeProviderContext);
  if (context === undefined) {
    throw new Error('useThemeProvider must be used within a ThemeProvider');
  }
  return context;
};
