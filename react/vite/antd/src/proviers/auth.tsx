import { globalService } from '@/apis/services';
import { useRequest } from 'ahooks';
import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router';

const AuthContext = createContext<{
  identity?: Record<string, any>;
}>({});

export const AuthProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [identity, setIdentity] = useState<Record<string, any>>();
  const navigate = useNavigate();
  const { loading } = useRequest(
    async () => {
      return await globalService.getIdentity();
    },
    {
      onSuccess: (data) => {
        setIdentity(data);
      },
      onError: () => {
        navigate('/login', { replace: true });
      },
    },
  );

  if (loading) return <>loading...</>;

  return (
    <AuthContext.Provider
      value={{
        identity,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
