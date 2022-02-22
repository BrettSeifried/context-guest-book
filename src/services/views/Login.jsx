import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import { useAuth } from '../../hooks/useAuth';
import { useForm } from '../../hooks/useForm';

export default function Login() {
  const { formState, handleFormChange } = useForm({ email: '', password: '' });
  const auth = useAuth();
  const [error, setError] = useState(null);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: '/' } };
  const { user, setUser } = useUser();
  // const { setName } = useName();

  const handleLogin = (e) => {
    e.preventDefault();
    const loginSucessful = auth.login(formState.email, formState.password);
    setUser(formState.email);
    !loginSucessful ? setError('Incorrect Login') : history.push(from);
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
      {error}
    </>
  );
}
