import React from 'react';
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error,Compare } from './pages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchRepo from './components/SearchRepo'

function App() {
  return (
    
   <AuthWrapper>
    <Router>
     <Switch>
    <PrivateRoute path="/" exact={true}>
      <Dashboard></Dashboard>
      </PrivateRoute>
      <Route path="/login">
      <Login />
      </Route>
      <Route path="/compare">
      <Compare />
      </Route>
      <Route path='*'>
      <Error></Error>
      </Route>
       </Switch>
      </Router>
      </AuthWrapper>
   
  );
}

export default App;
