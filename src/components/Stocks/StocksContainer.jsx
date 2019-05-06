import React from 'react';
import { stocksByName} from '../../redux/selectors';
import { selectStockAC, findStockByNameAC } from '../../redux/stocks-reducer';
import { connect } from 'react-redux';
import Stocks from './Stocks';
import { withRouter } from "react-router-dom";

const StocksContainer = (props) => {
    return (
      <Stocks
      stocks = {props.stocks}
      selectStock = {props.selectStock}
      findStock = {props.findStock}
      />
    )
}
const mapStateToProps = (state) => {
  return ({
     stocks: stocksByName(state)
  })
}
const mapDispatchToProps = (dispatch) => {
  return ({
      selectStock: (id) => {
          dispatch(selectStockAC(id))
      },
      findStock: (text) => {
        dispatch(findStockByNameAC(text))
      }
  }
  )
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(StocksContainer));
