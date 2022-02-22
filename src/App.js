import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import PrivateRoute from './context/PrivateRoute';
import { UserProvider } from './context/UserContext';
import Home from './services/views/Home';
import Login from './services/views/Login';

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/">
            <Home />
          </PrivateRoute>
        </Switch>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
