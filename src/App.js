import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import React, { Component } from 'react'
import Header from './Components/Header.js'
import HomePage from './HomePage/HomePage.js'
import SignUpPage from './AuthPages/SignUpPage.js'
import LoginPage from './AuthPages/LoginPage.js'
import SearchPage from './SearchPages/SearchPage.js'
import FavoritesPage from './Favorites/FavoritesPage.js'
import { getUserFromLocalStorage, setUserToLocalStorage } from './LocalStorageUtils.js'
import PrivateRoute from './Components/PrivateRoute.js'

export default class App extends Component {
  //Initialize a user, as defined in local storage function for state
  state = {
    user: getUserFromLocalStorage()
  }

  //handler for user profile changes
  handleUserChange = (user) => {
    this.setState({ user })
    //call function to set the user in local storage
    setUserToLocalStorage(user);
  }

  //handle log out change
  handleLogout = () => {
    this.handleUserChange();
  }

  render() {
    const { user } = this.state;
    return (
      <div>
        <Router>
          {/* Header points to home and search, should be under router and above switch */}
          <Header user={this.state.user} handleLogout={this.handleLogout} />
          <Switch>
            <Route
              path="/"
              exact
              render={(routerProps) => <HomePage {...routerProps} />}
            />
            <Route
              path="/signup"
              exact
              render={(routerProps) => <SignUpPage handleUserChange={this.handleUserChange} {...routerProps} />}
            />
            <Route
              path="/login"
              exact
              render={(routerProps) => <LoginPage handleUserChange={this.handleUserChange} {...routerProps} />}
            />
            <PrivateRoute
              path="/search"
              exact
              token={user && user.token}
              render={(routerProps) => <SearchPage user={this.state.user} {...routerProps} />}
            />
            <PrivateRoute
              path="/favorites"
              exact
              token={user && user.token}
              render={(routerProps) => <FavoritesPage user={this.state.user} {...routerProps} />}
            />
          </Switch>
        </Router>
      </div>
    )
  }
}