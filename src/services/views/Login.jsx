import React, { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useForm } from '../../hooks/useForm';

export default function Login() {
  const { formState, handleFormChange } = useForm({ email: '', password: '' });
  const auth = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    const loginSucessful = auth.login(formState.email, formState.password);
  };

  return (
    <>
      <div>
        <label>github.com/</label>
      </div>
      <form onSubmit={handleLogin}>
        <div>
          <input type="text" id="name" name="name" placeholder="github user name"></input>
          <div>
            <label>Password</label>
          </div>
          <input id="password" type="password" name="password" placeholder="Not Github Password" />
        </div>
        <button type="submit">Log in</button>
      </form>
    </>
  );
}
