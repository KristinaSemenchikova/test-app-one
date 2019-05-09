import * as React from "react";
import './App.css';
import StocksPage from './components/StocksPage';

function App() {
  return (
    <div className="App">
        <StocksPage/>
    </div>
  );
}

export default App;

{/* <Route path='/stock/:id?' render={() => <StocksPage/>} /> */}