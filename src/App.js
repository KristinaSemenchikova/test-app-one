import React from 'react';
import './App.css';
import { Route, Switch, Redirect } from "react-router-dom";
import StockPage from './components/StockPage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' render={() => <Redirect to = '/stock' />} />
        <Route path='stock/:id?' render={() => <StockPage />} />
        <Route path='/stock' render={() => <StockPage />} />
      </Switch>
    </div>
  );
}

export default App;

