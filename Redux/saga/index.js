// Imports: Dependencies
import {all, fork} from 'redux-saga/effects';

// Imports: Redux Sagas
import {authSaga} from '../../src/redux/saga';

// Redux Saga: Root Saga
export function* rootSaga() {
  yield all([fork(authSaga)]);
}
