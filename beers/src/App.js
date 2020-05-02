import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import BeerListPage from './pages/BeerListPage'
import BeersContainer from './pages/BeersContainer'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path = '/' component = {BeerListPage}/>
        <Route path = "/beers/:id" component = {BeersContainer}/>
      </Switch>
    </div>
  );
}

export default App;
