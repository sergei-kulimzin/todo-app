import { createStore, compose, applyMiddleware } from 'redux';
import { LocalStorageMiddleware } from '../middleWares/local-storage-middleware';
import { reducer } from './reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(LocalStorageMiddleware))
);
