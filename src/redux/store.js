import { combineReducers, createStore } from "redux";
import stocksReduser from './stocks-reducer';

let reducers = combineReducers({
    stocksPage: stocksReduser
});
let store = createStore(reducers);

export default store;
