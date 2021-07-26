import React from 'react';
import './css/App.css';
import {Route} from 'react-router-dom';
import {AuthProvider} from './contexts/AuthContext';
import Home from './home';
import Gallery from './gallery';
import Profile from './profile';
import SignIn from './signIn';
import SignUp from './signUp';
import Forgot from './forgot';
import NftView from './nftView';
import NftCreate from './nftCreate';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
    <AuthProvider>
      <Navbar />
      <Route exact path='/' component={Home} />
      <Route exact path='/gallery' component={Gallery} />
      <Route exact path='/profile' component={Profile} />
      <Route exact path='/signIn' component={SignIn} />
      <Route exact path='/signUp' component={SignUp} />
      <Route exact path='/forgot' component={Forgot} />
      <Route exact path='/nftView' component={NftView} />
      <Route exact path='/nftCreate' component={NftCreate} />
    </AuthProvider>
    </div>
  );
}

export default App;
