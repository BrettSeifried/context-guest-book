import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useForm } from '../../hooks/useForm';

export default function Login() {
  const { formState, handleFormChange } = useForm({ email: '', password: '' });
  const auth = useAuth();
  const [error, setError] = useState(null);
  const history = useHistory();

  const handleLogin = (e) => {
    e.preventDefault();
    const loginSucessful = auth.login(formState.email, formState.password);
    !loginSucessful ? setError('Incorrect Login') : history.push('/');
  };

  return (
    <>
      <div>
        <label>github.com/</label>
      </div>
      <form onSubmit={handleLogin}>
        <div>
          <input
            type="text"
            id="email"
            name="email"
            value={formState.email}
            placeholder="github user name"
            onChange={handleFormChange}
          ></input>
          <div>
            <label>Password</label>
          </div>
          <input
            id="password"
            type="password"
            name="password"
            value={formState.password}
            placeholder="Not Github Password"
            onChange={handleFormChange}
          />
        </div>
        <button type="submit">Log in</button>
      </form>
      {/* {error} */}
    </>
  );
}
