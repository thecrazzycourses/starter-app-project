
import {createStore, applyMiddleware, compose, Store} from 'redux';
import createSagaMiddleware, {Task} from 'redux-saga';
import {createWrapper} from 'next-redux-wrapper';

import {root} from '../saga/rootSaga';

import {rootReducer} from './reducers/root';

export interface SagaStore extends Store {
  sagaTask?: Task;
}

function makeStore() {
  let composeEnhancers: typeof compose;
  const sagaMiddleware = createSagaMiddleware();
  const isServer = typeof window === 'undefined';

  if (!isServer) {
    // On the client only, wire into redux dev tools extension, if present
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
    const reduxDevtoolsCompose = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
    composeEnhancers = (reduxDevtoolsCompose && reduxDevtoolsCompose({trace: true})) || compose;
  } else {
    composeEnhancers = compose;
  }

  const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

  // Wire up next-redux-saga: https://github.com/bmealhouse/next-redux-saga
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  (store as any).sagaTask = sagaMiddleware.run(root);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  (store as any).sagaMiddleware = sagaMiddleware;

  return store;
}
const wrapper = createWrapper(makeStore);

export default wrapper;
