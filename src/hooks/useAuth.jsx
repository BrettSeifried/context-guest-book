import { useContext } from 'react';
import { authContext } from '../context/AuthContext';

export function useAuth() {
  const context = useContext(authContext);

  if (context === undefined) {
    throw new Error('useAuth must be used within a ProvideAuth Context.');
  }

  return context;
}
