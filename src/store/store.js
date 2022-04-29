import { createStore, compose, applyMiddleware } from 'redux';
import { LocalStorageMiddleware } from '../middleWares/local-storage-middleware';
import { reducer } from './reducer';

export const store = createStore(
  reducer,
  compose(
    applyMiddleware(LocalStorageMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
