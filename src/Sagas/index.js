import {takeLatest, all} from 'redux-saga/effects';

/* ------------- Types ------------- */
import {TestTypes} from '../Redux/TestRedux';

/* ------------- Sagas ------------- */
import {test} from './TestSagas';

/* ------------- Connect Types To Sagas ------------- */

export default function* root() {
  yield all([
    takeLatest(TestTypes.TEST_REQUEST, test),
  ]);
}
