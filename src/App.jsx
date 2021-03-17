import { Router } from '@reach/router';
import Home from './components/Home';
import HelloColors from './components/HelloColors';
import React from 'react';
import './App.css';

import Rerouter from './components/Rerouter';

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/home"/>
        <Rerouter path="/:input" />
        <HelloColors path="/:str/:textColor/:bgColor"/>
      </Router>

    </div>
  );
}

export default App;
