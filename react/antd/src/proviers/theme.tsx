import { darkConfig, lightConfig } from '@/config/theme';
import { useLocalStorageState } from 'ahooks';
import { ConfigProvider } from 'antd';
import { ThemeProvider as AntdThemeProvider, StyleProvider } from 'antd-style';
import React, { createContext, useContext, useEffect } from 'react';

type Mode = 'dark' | 'light';

type ThemeProviderContext = {
  mode: Mode;
  setMode: (mode: Mode) => void;
};

const ThemeProviderContext = createContext<ThemeProviderContext | undefined>(
  undefined,
);

export const ThemeProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [mode, setMode] = useLocalStorageState<Mode>('themeMode', {
    defaultValue: 'light',
    listenStorageChange: true,
  });

  useEffect(() => {
    const html = document.querySelector('html');
    html?.setAttribute('data-theme-mode', mode);
  }, [mode]);

  return (
    <ThemeProviderContext.Provider
      value={{
        mode,
        setMode,
      }}
    >
      <StyleProvider speedy>
        <ConfigProvider theme={mode === 'dark' ? darkConfig : lightConfig}>
          <AntdThemeProvider themeMode={mode}>{children}</AntdThemeProvider>
        </ConfigProvider>
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
