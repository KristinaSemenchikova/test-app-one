import React from 'react';
import {  filterStockAC } from '../../redux/stocks-reducer';
import { connect } from 'react-redux';
import Nav from './Nav';
import { filteredStocks, filter } from '../../redux/selectors';

const NavContainer = (props) => {
    return (
      <Nav
      stocks = {props.stocks}
      filterStock = {props.filterStock}
      filter = {props.filter}
      />
    )
}
const mapStateToProps = (state) => {
  return ({
     stocks: filteredStocks(state),
     filter: filter(state)
  })
}
const mapDispatchToProps = (dispatch) => {
  return ({
      filterStock: (text) => {
          dispatch(filterStockAC(text))
      }
  }
  )
}
export default connect(mapStateToProps, mapDispatchToProps)(NavContainer);
