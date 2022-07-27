import React, { useEffect, useState } from 'react';
import { useEntries } from '../../context/EntryContext';
import { useUser } from '../../context/UserContext';
import { useHover } from '../../hooks/hover';
import { fetchEth } from '../apiData/ethPrice';
import './guestBook.css';

export default function GuestBook() {
  const [name, setName] = useState('');
  const [messageEntry, setMessageEntry] = useState('');
  const { user, setUser } = useUser();
  const { message, setMessage } = useEntries();
  const [hoverRef, isHovered] = useHover();
  const [eth, setEth] = useState();

  function updateMessageList() {
    if (!messageEntry) return;
    // setUser(name);
    setMessage([...message, { name, message: messageEntry }]);
    setMessageEntry('');
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    updateMessageList();
  };

  useEffect(() => {
    async function getEth() {
      const price = await fetchEth();
      setEth(price.ethereum.usd);
    }
    getEth();
  }, []);

  const displayMessage = `Thanks for the message ${user}`;
  return (
    <div>
      <h1>Price of Ethereum ${eth}</h1>
      <h1>{displayMessage}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label> Write me a note:</label>
          <textarea
            type="text"
            value={messageEntry}
            placeholder="Your Message!"
            onChange={(e) => setMessageEntry(e.target.value)}
          />
        </div>

        <div>
          <div ref={hoverRef}>
            <button type="submit">Send It! {isHovered ? '📧' : '💌'}</button>
          </div>

          {user && (
            <button
              type="button"
              onClick={() => {
                setUser('');
                setName('');
              }}
            >
              <div>Are you {user} ❓</div>
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
