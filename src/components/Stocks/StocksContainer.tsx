import * as React from "react";
import { stocksByName } from '../../redux/selectors';
import { selectStockAC, findStockByNameAC, setStocksAC, loadStocksLoading } from '../../redux/stocks-reducer';
import { connect } from 'react-redux';
import Stocks from './Stocks';
import { StocksProps} from "../Interfaces/Interfaces";


class StocksContainer extends React.Component<StocksProps> {
  constructor(props:StocksProps) {
    super(props);
  }
  componentDidMount(){
    this.props.loadStocksLoading()
  }
  render() {
    return (
      <Stocks
        stocks={this.props.stocks}
        selectStock={this.props.selectStock}
        findStock={this.props.findStock}
        loadStocksLoading = {this.props.loadStocksLoading}
      />
    )
  }

}
const mapStateToProps = (state:any) => {
  return ({
    stocks: stocksByName(state)
  })
}
const mapDispatchToProps = (dispatch:any) => {
  return ({
    selectStock: (id:number) => {
      dispatch(selectStockAC(id))
    },
    findStock: (text:string) => {
      dispatch(findStockByNameAC(text))
    },
    loadStocksLoading : ()=> {
      dispatch(loadStocksLoading())
    }
  }
  )
}
export default connect<any,any>(mapStateToProps, mapDispatchToProps)(StocksContainer);
