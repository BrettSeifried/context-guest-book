import React from 'react';
import GuestBook from '../components/guestBook';
import MessageList from '../components/guestList';

export default function Home() {
  return (
    <>
      <GuestBook />
      <MessageList />
    </>
  );
}
