import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import StatsContainer from './components/Stats/StatsContainer';
import StocksContainer from './components/Stocks/StocksContainer';
import NavContainer from './components/NavBar/NavContainer';
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <NavContainer />
      <StocksContainer />
      <Switch>
        <Route path='/:id?' render={() => <StatsContainer />} />
      </Switch>
    </div>
  );
}

export default App;

