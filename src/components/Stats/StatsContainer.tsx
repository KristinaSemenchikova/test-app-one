import * as React from "react";
import Stats from './Stats';
import { statsOfSelectedStock } from '../../redux/selectors';
import { addToMyStocksAC, deleteFromMyStocksAC, selectStockAC } from '../../redux/stocks-reducer';
import { connect } from 'react-redux';
import {StatsProps} from '../Interfaces/Interfaces'

const StatsContainer = (props: StatsProps) => {
  return (
    <Stats
      stock={props.stock}
      addToMyStocks={props.addToMyStocks}
      deleteFromMyStocks={props.deleteFromMyStocks}
      selectStock={props.selectStock}
    />
  )
}
const mapStateToProps = (state: any) => {
  return ({
    stock: statsOfSelectedStock(state)
  })
}
const mapDispatchToProps = (dispatch: any) => {
  return ({
    addToMyStocks: (id:number) => {
      dispatch(addToMyStocksAC(id))
    },
    deleteFromMyStocks: (id:number) => {
      dispatch(deleteFromMyStocksAC(id))
    },
    selectStock: (id:number) => {
      dispatch(selectStockAC(id))
    }
  }
  )
}
export default connect(mapStateToProps, mapDispatchToProps)(StatsContainer);

