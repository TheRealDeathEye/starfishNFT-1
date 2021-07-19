import React from 'react';
import logo from './logo.svg';
import './css/App.css';
import Home from './home';
import {Route,Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router exact path='/' component={Home} />
    </div>
  );
}

export default App;
