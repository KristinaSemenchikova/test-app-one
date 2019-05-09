import { combineReducers, createStore, applyMiddleware} from "redux";
import createSagaMiddleware from 'redux-saga';
import stocksReduser from './stocks-reducer';
import {usersSaga} from './redux-saga';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    stocksPage: stocksReduser,
});

const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(usersSaga);


export default store;
