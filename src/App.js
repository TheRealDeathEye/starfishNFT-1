import React from 'react';
import firebase from './util/firebase.js';
import './css/App.css';
import {Route, Link} from 'react-router-dom';
import Home from './home';
import Gallery from './gallery';
import Profile from './profile';
import SignIn from './signIn';
import SignUp from './signUp';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path='/' component={Home} />
      <Route exact path='/gallery' component={Gallery} />
      <Route exact path='/profile' component={Profile} />
      <Route exact path='/signIn' component={SignIn} />
      <Route exact path='/signUp' component={SignUp} />
    </div>
  );
}

export default App;
