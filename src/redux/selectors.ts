import { IStock } from './../components/Interfaces/Interfaces';
import { createSelector } from "reselect";

let stocksPageSelector = (state:any) => state.stocksPage;

export let stocks = createSelector(
  stocksPageSelector,
  stocksPage => stocksPage.stocks
);
export let filter = createSelector(
  stocksPageSelector,
  stocksPage => stocksPage.stocksFilter
);

export let filteredStocks = createSelector(
  [stocks, filter],
  (stocks, stocksFilter) => {
    if (stocksFilter === 'my') {
      let filteredStock = stocks.filter((item: IStock) => item.isAdded === true);
      return filteredStock;
    }
    return stocks
  }
);
export let selectedStockId = createSelector(
  stocksPageSelector,
  stocksPage => stocksPage.selectedStockId
);
export let findStockName = createSelector(
  stocksPageSelector,
  stocksPage => stocksPage.findStockName
);
export let statsOfSelectedStock = createSelector(
  [filteredStocks, selectedStockId],
  (filteredStocks, selectedStockId) => {
    let selectedStock = filteredStocks.filter((item: IStock) => item.id === selectedStockId);
    return selectedStock;
  }
);
export let stocksByName = createSelector(
  [filteredStocks, findStockName],
  (filteredStocks, findStockName) => {
    if (!(/\s/.test(findStockName)) && findStockName.length > 0) {
      let stock = filteredStocks.filter((item: IStock) => item.name.toLowerCase().includes(findStockName.toLowerCase()));
      return stock;
    }
    return filteredStocks
  }
);
