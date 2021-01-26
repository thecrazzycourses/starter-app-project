import {applyMiddleware, combineReducers, createStore} from 'redux'
import {createWrapper, HYDRATE} from 'next-redux-wrapper'
import createSagaMiddleware from 'redux-saga';
import reducers from '../reducers'
import rootSaga from '../sagas'

const sagaMiddleware = createSagaMiddleware();
const createAppStore = () => {

    const Store = createStore(
        reducers,
        applyMiddleware(sagaMiddleware)
    );
    // use the same saga middleware that you have enhanced your store with
    sagaMiddleware.run(rootSaga);
    return Store;
}

export const wrapper = createWrapper(createAppStore);
