import { createLogger }                 from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware             from 'redux-saga';
import rootReducer                      from 'Reducers/rootReducer';
import rootSaga                         from 'Sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [
  sagaMiddleware
];

if (process.env.NODE_ENV === 'development') {
  const loggerMiddleware = createLogger();
  middlewares.push(loggerMiddleware);
}

const store = createStore(
  rootReducer,
  applyMiddleware(...middlewares)
);

sagaMiddleware.run(rootSaga);

if (process.env.NODE_ENV !== 'production') {
  // Enable webpack hot module replacement
  if (module.hot) {
    module.hot.accept('./reducers/rootReducer', () => {
      store.replaceReducer(rootReducer);
    });
  }
}

export default store;

