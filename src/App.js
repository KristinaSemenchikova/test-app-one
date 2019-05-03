import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/NavBar/Nav';
import Stocks from './components/Stocks/Stocks';
import StatsContainer from './components/Stats/StatsContainer';
import { connect } from 'react-redux';

function App() {
  return (
    <div className="App">
      <Header/>
      <Nav/>
      <Stocks/>
      <StatsContainer/>
    </div>
  );
}

export default App;
