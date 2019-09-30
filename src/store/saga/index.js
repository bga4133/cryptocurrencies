import { call, put, takeLatest } from 'redux-saga/effects';
import { API_REQUEST, API_FAILED, API_SUCCESS } from '../actionTypes';
import getCryptoCurrencies from '../../api';

function* fetchApi() {
  try {
    const cryptos = yield call(getCryptoCurrencies);
    yield put({ type: API_SUCCESS, data: cryptos.data });
  } catch (e) {
    yield put({ type: API_FAILED, error: e.message });
  }
}

function* mySaga() {
  yield takeLatest(API_REQUEST, fetchApi);
}

export default mySaga;
