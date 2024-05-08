// Import necessary modules
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Import storage mechanism

// Import your reducers
import productsSlice from './products/productsSlice';
import cartSlice from './cart/cartSlice';
import categoriesSllice from './catogries/categoriesSllice'

// Define persistConfig to specify how Redux state should be persisted
// const persistConfig = {
//   key: 'root', // Key used for storing persisted state
//   storage: storage,  // Storage mechanism to use (localStorage in this case)
//   whitelist: ['cartSlice'], // Reducers to be persisted
// };

const cartPersistConfig = {
  key: 'cartSlice', // Key used for storing persisted state
  storage: storage,  // Storage mechanism to use (localStorage in this case)
  whitelist: ['items'], // Reducers to be persisted
};

// Combine reducers to create the root reducer
const rootReducer = combineReducers({
  categoriesSllice,
  productsSlice,
  cartSlice: persistReducer(cartPersistConfig, cartSlice)
});

// Create a persisted reducer using persistReducer from redux-persist
// const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the Redux store
export const store = configureStore({
  reducer: rootReducer, // Use the persisted reducer
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(
    {
      serializableCheck: false,
    }
  ),
});

// Export RootState and AppDispatch types for type safety
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Create and export persistor to enable redux-persist integration
export const persistor = persistStore(store);

export default { store, persistor }