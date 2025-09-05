// store.js
import { configureStore } from '@reduxjs/toolkit';
import uiReducer from './ui/uiSlice';
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
import AsyncStorage from '@react-native-async-storage/async-storage';

// Persist config
const persistConfig = {
  key: 'ui',
  storage: AsyncStorage,
};

// Wrap the ui reducer
const persistedUiReducer = persistReducer(persistConfig, uiReducer);

export const store = configureStore({
  reducer: {
    ui: persistedUiReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
