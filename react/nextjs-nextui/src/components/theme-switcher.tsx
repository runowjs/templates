'use client';
import DarkLineIcon from '@/icons/dark-line';
import LightLineIcon from '@/icons/light-line';
import { Button } from '@nextui-org/react';
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';

const ThemeSwitcher: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <>
      <Button
        isIconOnly
        size="sm"
        onPress={() => {
          setTheme(theme === 'dark' ? 'light' : 'dark');
        }}
      >
        <LightLineIcon className="hidden dark:block size-5" />
        <DarkLineIcon className="block dark:hidden size-5" />
      </Button>
    </>
  );
};

export default ThemeSwitcher;
