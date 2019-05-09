import * as React from "react";
import { stocksByName } from '../../redux/selectors';
import { selectStockAC, findStockByNameAC, setStocksAC, loadStocksLoading } from '../../redux/stocks-reducer';
import { connect } from 'react-redux';
import Stocks from './Stocks';


class StocksContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(){
    this.props.loadStocks()
  }
  render() {

    return (
      <Stocks
        stocks={this.props.stocks}
        selectStock={this.props.selectStock}
        findStock={this.props.findStock}
        loadStocks = {this.props.loadStocks}
      />
    )
  }

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
    },
    setStocks: (stocks) => {
      dispatch(setStocksAC(stocks))
    },
    loadStocks : ()=> {
      dispatch(loadStocksLoading())
    }
  }
  )
}
export default connect(mapStateToProps, mapDispatchToProps)(StocksContainer);
