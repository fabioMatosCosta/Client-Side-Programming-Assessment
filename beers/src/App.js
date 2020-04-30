import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import BeerListPage from './pages/BeerListPage'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path = '/' component = {BeerListPage}/>
      </Switch>
    </div>
  );
}

export default App;
