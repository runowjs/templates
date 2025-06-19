'use client';
import { message as antdMessage } from 'antd';
import { MessageInstance } from 'antd/es/message/interface';
import React, { createContext, useContext } from 'react';

const MessageContext = createContext<{
  message: MessageInstance;
} | null>(null);

const MessageProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [message, messageHolder] = antdMessage.useMessage();
  return (
    <MessageContext.Provider
      value={{
        message,
      }}
    >
      {messageHolder}
      {children}
    </MessageContext.Provider>
  );
};

const useMessage = () => {
  const context = useContext(MessageContext);
  if (!context) {
    throw new Error('useMessage must be used within an context');
  }
  return context;
};

export { MessageProvider, useMessage };
