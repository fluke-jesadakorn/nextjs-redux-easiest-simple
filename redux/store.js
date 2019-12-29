import { createStore } from 'redux';
import { reducer } from './reducer';
import { initialState } from './initialState';

export const initialStore = (preloadedState = initialState) => {
  return createStore(
    reducer,
    preloadedState
  );
}
