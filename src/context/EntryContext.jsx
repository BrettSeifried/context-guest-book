//import useContext, createContext, useState

import { createContext, useContext, useState } from 'react';

//const EntryContext = createContext()
const EntryContext = createContext();

const EntryProvider = ({ children }) => {
  const [entry, setEntry] = useState([]);

  return <EntryContext.Provider value={{ entry, setEntry }}>{children}</EntryContext.Provider>;
};

//const useEntries
const useEntries = () => {
  const context = useContext(EntryContext);

  if (context === undefined) {
    throw new Error('useEntries must be defined within an Entry Context Provider, dummy');
  }
  return context;
};

// retrun context

// export { EntryProvider, useEntries}
export { EntryProvider, useEntries };
