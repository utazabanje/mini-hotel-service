import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import Welcome from './pages/Welcome/Welcome';
import CheckIn from './pages/CheckIn/Checkin';
import Staff from './pages/Staff/Staff';
import ManageGuest from './components/ManageGuests/ManageGuests';
import Layout from './components/Layout/Layout';
import NavigationBar from './components/NavBar/NavBar';
import * as ROUTES from './constants/routes';

class App extends Component {

  render() {
    return (
      <React.Fragment>
          <Router>
          <NavigationBar />
          <Layout>
              <Switch>
                <Route exact path={ROUTES.WELCOME} component={Welcome} />
                <Route path={ROUTES.CHECK_IN} component={CheckIn} />
                <Route path={ROUTES.STAFF} component={Staff} />
                <Route path={ROUTES.MANAGE} component={ManageGuest} />
              </Switch>
            </Layout>
          </Router>
        
      </React.Fragment>
    )
  }
}

export default App;
