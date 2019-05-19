import { put, takeEvery} from 'redux-saga/effects'
import {  loadStocksSuccess, loadStocksError } from './stocks-reducer';
import getStocksFromServer from '../components/Service';

function* loadStocks() {
    try {
        const stocks = yield getStocksFromServer();
        yield put (loadStocksSuccess(stocks.data.stocks))
    } catch (e) {
        yield put(loadStocksError());
    }
}
export function* watcherSaga() {
    yield takeEvery('REDUX_SAGA_LOAD_STOCKS_LOADING', loadStocks);

}
export default watcherSaga;
