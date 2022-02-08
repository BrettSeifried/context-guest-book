//import createContext, useContext, useMemo, useState

import { createContext, useContext, useState } from 'react';

//export UserContext = createContext
export const UserContext = createContext();

//const useProvider
const UserProvider = ({ children }) => {
  const [user, setUser] = useState('');

  // useMemo?
  const contextValue = { user };

  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
};

const useUser = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error('useUser must be used within a UserContext Provider, dummy');
  }
  return context;
};

//const useUser
// retrun context

// export
export { UserProvider, useUser };
