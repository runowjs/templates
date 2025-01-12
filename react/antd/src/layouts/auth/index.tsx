import React from 'react';
import { Outlet } from 'react-router';

const AuthLayout: React.FC = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default AuthLayout;
