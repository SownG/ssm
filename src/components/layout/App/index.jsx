import React from 'react';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import UserList from '../../pages/User/List';
import Register from '../../pages/Register';
import CreateOrEditUser from '../../pages/User/CreatOrEdit';
import Header from '../Header';
import './styles.less';

class App extends React.Component {
  render() {
    return (
      <div className="app" id="app">
        <Header />  
        <div className="app-content">
          <Switch>
            <Route exact path="/register" render={() => <Register {...this.props} />} />
          </Switch>  
        </div>
      </div>
    );
  }
}
export default withRouter(connect(state => state.register)(App));
