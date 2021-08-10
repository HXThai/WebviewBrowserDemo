import {put} from 'redux-saga/effects';
import TestActions from '../Redux/TestRedux';

export function* test(action) {
  console.log('action', action);
  // try {
  //   yield put(TestActions.TestRequest(action.text));
  // } catch (error) {
  //   console.log('err', error);
  // }
}
