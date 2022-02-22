import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { ProvideAuth } from './context/AuthContext';
import PrivateRoute from './context/PrivateRoute';
import { UserProvider } from './context/UserContext';
import Home from './services/views/Home';
import Login from './services/views/Login';

function App() {
  return (
    <UserProvider>
      <ProvideAuth>
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
      </ProvideAuth>
    </UserProvider>
  );
}

export default App;
