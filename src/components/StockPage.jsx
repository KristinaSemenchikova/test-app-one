import React from 'react';
import Header from './Header/Header';
import NavContainer from './NavBar/NavContainer';
import StocksContainer from './Stocks/StocksContainer';
import StatsContainer from './Stats/StatsContainer';


const StocksPage = props => {
    return (
    <>
        <Header />
        <NavContainer />
        <StocksContainer />
        <StatsContainer />
    </>
    )
}
export default StocksPage;
