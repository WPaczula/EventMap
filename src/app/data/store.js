import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import Immutable from 'seamless-immutable'
import reducer from './reducer'
import saga from './saga'

const createComposedStore = ({ isSSR, preloadedState }) => {
  const sagaMiddleware = createSagaMiddleware()

  const storeParams = isSSR
    ? applyMiddleware(sagaMiddleware)
    : compose(
      applyMiddleware(sagaMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(),
    )

  const store = createStore(
    reducer,
    Immutable(preloadedState),
    storeParams,
  )

  sagaMiddleware.run(saga)

  return store
}

export default createComposedStore
