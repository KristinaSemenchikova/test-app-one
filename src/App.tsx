import * as React from "react";
import './App.css';
import StocksPage from './components/StocksPage';
import {Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
       <Route path='/stock/:id?' render={() => <StocksPage/>} />
    </div>
  );
}

export default App;

