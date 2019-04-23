import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import Welcome from './pages/Welcome/Welcome';
import CheckIn from './pages/CheckIn/Checkin';
import StaffLogin from './pages/StaffLogin/StaffLogin';
import MenageGuest from './pages/ManageGuests/ManageGuests';
import Layout from './components/Layout/Layout';
import NavigationBar from './components/NavBar/NavBar';

class App extends Component {

  render() {
    return (
      <React.Fragment>
        <NavigationBar />
        <Layout>
          <Router>
            <Switch>
              <Route exact path="/" component={Welcome} />
              <Route path="/checkin" component={CheckIn} />
              <Route path="/login" component={StaffLogin} />
              <Route path="/menage" component={MenageGuest} />
            </Switch>
          </Router>
        </Layout>
      </React.Fragment>
    )
  }
}

export default App;
