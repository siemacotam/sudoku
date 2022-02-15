import reducer from 'reducers'
import { createStore } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducer)

function configureStore() {
  const store = createStore(persistedReducer, devToolsEnhancer({}))
  const persistor = persistStore(store)
  return { persistor, store }
}

export default configureStore
