import React from 'react';
import { UserProvider } from '../../context/UserContext';
import GuestBook from '../components/guestBook';
import MessageList from '../components/guestList';

export default function Home() {
  return (
    <UserProvider>
      <GuestBook />
      <MessageList />
    </UserProvider>
  );
}
