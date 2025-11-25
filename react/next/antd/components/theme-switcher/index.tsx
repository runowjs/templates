'use client';
import MoonLine from '@/icons/moon-line';
import SunLine from '@/icons/sun-line';
import { useTheme } from '@/providers/theme';
import { Button } from 'antd';
import React, { useCallback } from 'react';
import './styles.css';

function enableTransitions() {
  return (
    'startViewTransition' in document &&
    window.matchMedia('(prefers-reduced-motion: no-preference)').matches
  );
}

const ThemeSwitcher: React.FC = () => {
  const { setMode, mode } = useTheme();

  const handleToggle = useCallback(
    async (e: React.MouseEvent) => {
      if (!enableTransitions()) {
        setMode(mode === 'dark' ? 'light' : 'dark');
        return;
      }
      const { clientX, clientY } = e;
      const isDark = mode === 'dark';

      // disabled all transitions
      document.documentElement.setAttribute('disabled-transition', '');

      const clipPath = [
        `circle(0px at ${clientX}px ${clientY}px)`,
        `circle(${Math.hypot(
          Math.max(clientX, window.innerWidth - clientX),
          Math.max(clientY, window.innerHeight - clientY),
        )}px at ${clientX}px ${clientY}px)`,
      ];

      await document.startViewTransition(() => {
        setMode(isDark ? 'light' : 'dark');
      }).ready;

      const animation = document.documentElement.animate(
        { clipPath: isDark ? clipPath.reverse() : clipPath },
        {
          duration: 300,
          easing: 'ease-in',
          pseudoElement: `::view-transition-${isDark ? 'old' : 'new'}(root)`,
        },
      );

      animation.finished.then(() => {
        // restore all transitions
        document.documentElement.removeAttribute('disabled-transition');
      });
    },
    [mode],
  );

  return (
    <Button
      color="default"
      variant="filled"
      size="large"
      icon={mode === 'dark' ? <SunLine /> : <MoonLine />}
      onClick={handleToggle}
    />
  );
};

export default ThemeSwitcher;
