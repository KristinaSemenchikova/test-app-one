import { combineReducers, createStore, applyMiddleware} from "redux";
import createSagaMiddleware from 'redux-saga';
import stocksReduser from './stocks-reducer';
import {watcherSaga} from './redux-saga';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    stocksPage: stocksReduser,
});

const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(watcherSaga);


export default store;
