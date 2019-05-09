import * as React from "react";
import {  filterStockAC } from '../../redux/stocks-reducer';
import { connect } from 'react-redux';
import Nav from './Nav';
import { filteredStocks, filter } from '../../redux/selectors';
import {NavProps} from '../Interfaces/Interfaces';

const NavContainer = (props : NavProps) => {
    return (
      <Nav
      stocks = {props.stocks}
      filterStock = {props.filterStock}
      filter = {props.filter}
      />
    )
}
const mapStateToProps = (state :any) => {
  return ({
     stocks: filteredStocks(state),
     filter: filter(state)
  })
}
const mapDispatchToProps = (dispatch:any) => {
  return ({
      filterStock: (text:string) => {
          dispatch(filterStockAC(text))
      }
  }
  )
}
export default connect(mapStateToProps, mapDispatchToProps)(NavContainer);
