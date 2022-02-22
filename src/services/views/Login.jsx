import React, { useState } from 'react';

export default function Login() {
  const [name, setName] = useState();
  const [password, setPassword] = useState();

  return (
    <>
      <div>
        <label>github.com/</label>
      </div>
      <div>
        <input
          type="text"
          value={name}
          placeholder="github user name"
          onChange={(e) => setName(e.target.value)}
        ></input>
        <div>
          <label>Password</label>
        </div>
        <input type="password" value={password} placeholder="Not Github Password" />
      </div>
    </>
  );
}
