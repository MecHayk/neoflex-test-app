// import { configureStore } from '@reduxjs/toolkit';
// import cart from './slices/cartSlice';
// import favorites from './slices/favoritesSlice';
// import { productReducer } from './slices/productsSlice';

// export const store = configureStore({
//   reducer: {
//     cart,
//     favorites,
//     products: productReducer,
//   },
// });

import { configureStore, combineReducers } from '@reduxjs/toolkit';
import cart from './slices/cartSlice';
import favorites from './slices/favoritesSlice';
import { productReducer } from './slices/productsSlice';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const rootReducer = combineReducers({
  cart,
  favorites,
  products: productReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  products: productReducer,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export default store;
