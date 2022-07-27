import { useState } from 'react';
import { useEntries } from '../context/EntryContext';
import { useUser } from '../context/UserContext';

export default function useGuestBookHook() {
  const [name, setName] = useState('');
  const [messageEntry, setMessageEntry] = useState();
  const { user, setUser } = useUser();
  const { message, setMessage } = useEntries();

  function updateMessageList() {
    if (!messageEntry) return;
    setUser(name);
    setMessage([...message, { name, message: messageEntry }]);
    setMessageEntry('');
  }

  return { name, messageEntry, user, message };
}
