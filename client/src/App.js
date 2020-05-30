import React from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom'
import Interviews from './pages/Interviews';
import Error404 from './pages/Error404';
import Login from './pages/Login';
import Register from './pages/Register';
import history from './history';
import Landing from './pages/Landing';
import CreateInterview from './pages/CreateInterview';
import UserProfile from './pages/UserProfile';
import UserInterview from './pages/UserInterview';
import EditInterview from './pages/EditInterview';

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/interviews' component={Interviews} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/create' component={CreateInterview} />
        <Route exact path='/user/:id' component={UserProfile} />
        <Route exact path='/interviews/:id' component={UserInterview} />
        <Route exact path='/interview/:id/edit' component={EditInterview} />
        <Route exact path='/notfound' component={Error404} />
        <Redirect to='/notfound' />
      </Switch>
    </Router>
  );
}

export default App;
