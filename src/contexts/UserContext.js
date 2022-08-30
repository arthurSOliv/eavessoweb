import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextUserProvider = ({ children }) => {
  const [user, setUser] = useState(undefined);

  const logIn = (e) => {
    setUser(e.target.value);
  };

  const logOut = (color) => {
    setUser(undefined);
  };

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <UserContext.Provider value={{ user, logIn, logOut }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext  = () => useContext(UserContext);
