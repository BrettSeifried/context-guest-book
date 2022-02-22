import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import PrivateRoute from './context/PrivateRoute';
import Home from './services/views/Home';
import Login from './services/views/Login';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <PrivateRoute path="/">
          <Home />;
        </PrivateRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
