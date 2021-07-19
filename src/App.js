import React from 'react';
import './css/App.css';
import Home from './home';
import {Route,Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={Home} />
    </div>
  );
}

export default App;
