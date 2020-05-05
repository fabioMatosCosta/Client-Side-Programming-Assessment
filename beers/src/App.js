import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import BreweryList from './pages/BreweryListPage';
import BeersByBreweryPage from './pages/BeersByBreweryPage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path = '/' component = {BreweryList}/>
        <Route path = "/beers/:id/:name" component = {BeersByBreweryPage}/>
      </Switch>
    </div>
  );
}

export default App;
