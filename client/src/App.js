import React from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom'
import Interviews from './pages/Interviews';
import Error404 from './pages/Error404';
import Login from './pages/Login';
import Register from './pages/Register';
import history from './history';

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path='/' component={Interviews} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Redirect to='/not_found' component={Error404} />
      </Switch>
    </Router>
  );
}

export default App;
