import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducer from './reducer'
import saga from './saga'

const createComposedStore = ({ isSSR, preloadedState }) => {
  const sagaMiddleware = createSagaMiddleware()

  const storeParams = process.env.NODE_ENV === 'production' || isSSR
    ? applyMiddleware(sagaMiddleware)
    : compose(
      applyMiddleware(sagaMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(),
    )

  const store = createStore(
    reducer,
    preloadedState,
    storeParams,
  )

  sagaMiddleware.run(saga)

  return store
}

export default createComposedStore
