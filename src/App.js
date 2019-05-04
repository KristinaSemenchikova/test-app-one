import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/NavBar/Nav';
import StatsContainer from './components/Stats/StatsContainer';
import StocksContainer from './components/Stocks/StocksContainer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Nav/>
      <StocksContainer/>
      <StatsContainer/>
    </div>
  );
}

export default App;
