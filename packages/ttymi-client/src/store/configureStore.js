import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

const DEVTOOLS_ATTR = '__REDUX_DEVTOOLS_EXTENSION__';

const middleware = [thunk];

export default function configureStore(reducer, initialState) {
  const middlewareStoreEnhancer = applyMiddleware(...middleware);

  const storeEnhancer =
    DEVTOOLS_ATTR in window
      ? compose(middlewareStoreEnhancer, window[DEVTOOLS_ATTR]())
      : middlewareStoreEnhancer;

  return createStore(reducer, initialState, storeEnhancer);
}
