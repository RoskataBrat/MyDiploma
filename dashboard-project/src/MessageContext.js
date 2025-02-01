import React, { createContext, useContext, useState } from "react";

const MessageContext = createContext();

export const MessageProvider = ({ children }) => {
  const [unreadMessages, setUnreadMessages] = useState(5); // Initial unread messages count

  const addMessage = () => {
    setUnreadMessages((prevCount) => prevCount + 1);
  };

  const clearMessages = () => {
    setUnreadMessages(0);
  };

  return (
    <MessageContext.Provider
      value={{ unreadMessages, addMessage, clearMessages }}
    >
      {children}
    </MessageContext.Provider>
  );
};

export const useMessages = () => useContext(MessageContext);

export default MessageContext;
