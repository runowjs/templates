import ThemeSwitcher from '@/components/theme-switcher';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from '@nextui-org/react';
import React from 'react';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar maxWidth="2xl">
        <NavbarBrand>
          <h1 className="text-2xl font-bold">LOGO</h1>
        </NavbarBrand>
        <NavbarContent justify="end">
          <NavbarItem>
            <ThemeSwitcher />
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      <main className="container mx-auto">{children}</main>
    </>
  );
}
