import React from 'react';
import { withRouter } from "react-router-dom";
import Stats from './Stats';
import { statsOfSelectedStock } from '../../redux/selectors';
import { addToMyStocksAC, deleteFromMyStocksAC } from '../../redux/stocks-reducer';
import { connect } from 'react-redux';

const StatsContainer = (props) => {
  console.log( 'stats', props);
    return (
      <Stats
      stock = {props.stock}
      addToMyStocks = {props.addToMyStocks}
      deleteFromMyStocks = {props.deleteFromMyStocks}
      />
    )
}
const mapStateToProps = (state) => {
  return ({
     stock: statsOfSelectedStock(state)
  })
}
const mapDispatchToProps = (dispatch) => {
  return ({
      addToMyStocks: (id) => {
          dispatch(addToMyStocksAC(id))
      },
      deleteFromMyStocks: (id) => {
        dispatch(deleteFromMyStocksAC(id))
    },
  }
  )
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(StatsContainer));
