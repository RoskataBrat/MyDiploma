// SubscriptionContext.js
import React, { createContext, useContext, useState } from 'react';

const SubscriptionContext = createContext();

export const useSubscription = () => {
  return useContext(SubscriptionContext);
};

export const SubscriptionProvider = ({ children }) => {
  const [isSubscribed, setIsSubscribed] = useState(false);

  const setIsSubscribedTrue = () => {
    setIsSubscribed(true);
  };

  return (
    <SubscriptionContext.Provider value={{ isSubscribed, setIsSubscribedTrue }}>
      {children}
    </SubscriptionContext.Provider>
  );
};
