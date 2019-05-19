import { createAction, handleActions } from "redux-actions";
import { IState } from '../components/Interfaces/Interfaces';
import { AnyARecord } from "dns";

let initialState: IState = {
  loadStocks: {
    loading: false,
    success: false,
    error: false
  },
  stocks: [],
  selectedStockId: 0,
  stocksFilter: 'all',
  findStockName: ''
};

export const loadStocksLoading = createAction('REDUX_SAGA_LOAD_STOCKS_LOADING');
export const loadStocksSuccess = createAction('REDUX_SAGA_LOAD_STOCKS_SUCCESS');
export const loadStocksError = createAction('REDUX_SAGA_LOAD_STOCKS_ERROR');

export const setStocksAC = createAction("SET_STOCKS");
export const addToMyStocksAC = createAction("ADD_TO_MY_STOCKS");
export const deleteFromMyStocksAC = createAction("DELETE_FROM_MY_STOCKS");
export const selectStockAC = createAction("SELECT_STOCK");
export const findStockByNameAC = createAction("FIND_STOCK");
export const filterStockAC = createAction("FILTER_STOCK");


const stocksReduser = handleActions({
  [loadStocksLoading.toString()]: (state: IState) => {
    return { ...state, loadStocks: { ...state.loadStocks, loading: true } };
  },
  [loadStocksSuccess.toString()]: (state: IState, { payload: stocks }: any): IState => {
    return {
      ...state, loadStocks: {
        loading: false,
        success: true,
        error: false
      },
      stocks: stocks
    };
  },
  [loadStocksError.toString()]: (state: IState) => {
    return {
      ...state, loadStocks: {
        loading: false,
        success: false,
        error: true
      },
    };
  },
  [setStocksAC.toString()]: (state: IState, { payload: stocks }: any): IState => {
    let newState = { ...state, stocks: stocks };
    return newState;
  },
  [addToMyStocksAC.toString()]: (state, { payload: id }: any): IState => {
    let newState = { ...state, stocks: [...state.stocks] };
    let newStateStock = newState.stocks.filter(item => item.id === id);
    newStateStock[0].isAdded = true;
    return newState;
  },
  [deleteFromMyStocksAC.toString()]: (state, { payload: id }: any): IState => {
    let newState = { ...state, stocks: [...state.stocks] };
    let newStateStock = newState.stocks.filter(item => item.id === id);
    newStateStock[0].isAdded = false;
    return newState;
  },
  [selectStockAC.toString()]: (state, { payload: id }: any): IState => {
    let newState = { ...state, selectedStockId: id };
    return newState;
  },
  [findStockByNameAC.toString()]: (state, { payload: text }: any): IState => {
    let newState = { ...state, findStockName: text };
    return newState;
  },
  [filterStockAC.toString()]: (state, { payload: text }: any): IState => {
    let newState = { ...state, stocksFilter: text };
    return newState;
  },
},
  initialState
);

export default stocksReduser;
