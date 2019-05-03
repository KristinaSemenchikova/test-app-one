import React from 'react';
import s from './Stats.module.css'
import Stats from './Stats';
import { stocks } from '../../redux/selectors';
import { addToMyStocksAC } from '../../redux/stocks-reducer';
import { connect } from 'react-redux';

const StatsContainer = (props) => {
    return (
      <Stats
      stocks = {props.stocks}
      addToMyStocks = {props.addToMyStocks}
      />
    )
}
const mapStateToProps = (state) => {
  return ({
     stocks: stocks(state)
  })
}
const mapDispatchToProps = (dispatch) => {
  return ({
      addToMyStocks: (id) => {
          dispatch(addToMyStocksAC(id))
      },
  }
  )
}
export default connect(mapStateToProps, mapDispatchToProps)(StatsContainer);
