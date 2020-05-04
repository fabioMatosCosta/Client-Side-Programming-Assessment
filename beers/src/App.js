import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import BreweryList from './pages/BreweryListPage';
import BeersContainer from './pages/BeersContainer';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path = '/' component = {BreweryList}/>
        <Route path = "/beers/:id" component = {BeersContainer}/>
      </Switch>
    </div>
  );
}

export default App;
