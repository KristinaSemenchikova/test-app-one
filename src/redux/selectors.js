import { createSelector } from "reselect";

let stocksPageSelector = state => state.stocksPage;
export let stocks = createSelector(stocksPageSelector, stocksPage => stocksPage.stocks);