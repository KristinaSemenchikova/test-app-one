import { put, takeEvery} from 'redux-saga/effects'
import {  loadStocksSuccess, loadStocksError } from './stocks-reducer';
import getStocksFromServer from '../components/Service';


async function loading(func) {
    try {
        return await func();
    } catch (error) {
        alert(error.message)
    }
}

function* loadStocks() {
    try {
        const stocks = yield loading(getStocksFromServer);
        yield put (loadStocksSuccess(stocks.data.stocks))
    } catch (e) {
        yield put(loadStocksError());
    }
}
export function* usersSaga() {
    yield takeEvery('REDUX_SAGA_LOAD_STOCKS_LOADING', loadStocks);

}
export default usersSaga;
