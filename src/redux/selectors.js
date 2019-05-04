import { createSelector } from "reselect";

let stocksPageSelector = state => state.stocksPage;
export let stocks = createSelector(
  stocksPageSelector,
  stocksPage => stocksPage.stocks
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
  [stocks, selectedStockId],
  (stocks, selectedStockId) => {
    let filteredStock = stocks.filter(item => item.id === selectedStockId);
    return filteredStock;
  }
);
export let stocksByName = createSelector(
    [stocks, findStockName],
    (stocks, findStockName) => {
        if (!(/\s/.test(findStockName)) && findStockName.length > 0) {
            let stock = stocks.filter(item => item.name.toLowerCase().includes(findStockName.toLowerCase()));
            return stock;
        }
        return stocks
    }
  );
  export let myStocks = createSelector(
    stocks,
    (stocks) => {
      let filteredStock = stocks.filter(item => item.isAdded === true);
      return filteredStock;
    }
  );
