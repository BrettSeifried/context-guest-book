import React from 'react';
import { EntryProvider } from '../../context/EntryContext';
import GuestBook from '../components/guestBook';
import MessageList from '../components/guestList';

export default function Home() {
  return (
    <EntryProvider>
      <GuestBook />
      <MessageList />
    </EntryProvider>
  );
}
