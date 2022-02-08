//imports
import React, { useState } from 'react';
import { useEntries } from '../../context/EntryContext';
import { useUser } from '../../context/UserContext';

export default function GuestBook() {
  // consts of name, guestEntry. context: const user, entries
  const [name, setName] = useState('');
  const [messageEntry, setMessageEntry] = useState('');
  const { user, setUser } = useUser();
  const { message, setMessage } = useEntries();
  //function updateGuestList, not guestEntry, set username, setentries spread and name/message
  function updateMessageList() {
    if (!messageEntry) return;
    setUser(name);
    setMessage([...message, { name, message: messageEntry }]);
    setMessageEntry('');
  }
  //handle submit prevent default updateGuestslists and update guests list
  const handleSubmit = (event) => {
    event.preventDefault();
    updateMessageList();
  };

  // title
  //input name
  // value of name
  // on change setName

  //const displayMessage

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

  //guesNameInput
  const displayMessage = user ? `Thanks for the mssage ${user}` : 'Please send me a message';
  return (
    <>
      <h1>{displayMessage}</h1>
      <form onSubmit={handleSubmit}>
        {user ? null : userNameInput}
        <div>
          <label> Write me a note:</label>
          {/* // <textarea> for value-guestEntry */}
          <textarea
            type="text"
            value={messageEntry}
            placeholder="Your Message!"
            onChange={(e) => setMessageEntry(e.target.value)}
          />
        </div>

        <div>
          {/* // onChange setGuestEntry */}
          <button type="submit">Send It!</button>
          {user && (
            <button
              type="button"
              onClick={() => {
                setUser('');
                setName('');
              }}
            >
              Are you {user}?
            </button>
          )}

          {/* // {user && button for signout}
      // Onclick setUser('') setName('') */}
          {/* //Sign button, type=submit */}
          <button>Change Sender</button>
        </div>
      </form>
    </>

    // form end
  );
}
