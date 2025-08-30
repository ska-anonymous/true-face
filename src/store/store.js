import { configureStore } from '@reduxjs/toolkit';
import uiReducer from './ui/uiSlice';

export const store = configureStore({
  reducer: {
    ui: uiReducer,
  },
});

// Optional typed hooks can live here later if you add TS.
