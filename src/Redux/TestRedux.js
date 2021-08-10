import {createReducer, createActions} from 'reduxsauce';
import Immutable from 'seamless-immutable';

const {Types, Creators} = createActions({
  TestRequest: ['text'],
});

export const TestTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  data: null,
});

export const request = (state, {text}) => state.merge({data: text});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.TEST_REQUEST]: request,
});
