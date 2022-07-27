import { createContext, useContext, useState } from 'react';

const nameContext = createContext();

const NameProvider = ({ children }) => {
  const [name, setName] = useState('');

  return <nameContext.Provider value={{ name, setName }}>{children}</nameContext.Provider>;
};

const useName = () => {
  const context = useContext(nameContext);

  if (context === undefined) {
    throw new Error('useName msut be deifned withina  GuestContext Provider');
  }
  return context;
};

export { NameProvider, useName };
