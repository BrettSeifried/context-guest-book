//imports
import React, { useState } from 'react';
import { useEntries } from '../../context/EntryContext';
import { useUser } from '../../context/UserContext';
import { useHover } from '../../hooks/hover';
import './guestBook.css';

export default function GuestBook() {
  const [name, setName] = useState('');
  const [messageEntry, setMessageEntry] = useState('');
  const { user, setUser } = useUser();
  const { message, setMessage } = useEntries();
  const [hoverRef, isHovered] = useHover();

  function updateMessageList() {
    if (!messageEntry) return;
    setUser(name);
    setMessage([...message, { name, message: messageEntry }]);
    setMessageEntry('');
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    updateMessageList();
  };

  const userNameInput = (
    <div>
      <div>
        <label>Name:</label>
      </div>
      <div>
        <input
          type="text"
          value={name}
          placeholder="Your Name"
          onChange={(e) => setName(e.target.value)}
        ></input>
      </div>
    </div>
  );

  const displayMessage = user ? `Thanks for the message ${user}` : 'Please send me a message';
  return (
    <div>
      <h1>{displayMessage}</h1>
      <form onSubmit={handleSubmit}>
        {user ? null : userNameInput}
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
