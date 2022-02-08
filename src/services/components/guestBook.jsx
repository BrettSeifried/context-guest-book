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
    setMessage([...message, { name, messageEntry }]);
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
  return (
    <>
      {/* <input type="text" value={message} OnChange></input> */}
      {/* // if user, display {user} : 'text to sign. // form onSubmit */}
      <form>
        <label> Write me a note</label>

        {/* // <textarea> for value-guestEntry */}
        <textarea />

        {/* // onChange setGuestEntry */}
        <button>Send It!</button>

        {/* // {user && button for signout}
      // Onclick setUser('') setName('') */}
        {/* //Sign button, type=submit */}
        <button>Change Sender</button>
      </form>
    </>

    // form end
  );
}
