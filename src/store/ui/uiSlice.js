import { createSlice } from '@reduxjs/toolkit';
import { applyReducerMap } from '@/store/utils/applyReducerMap';
import { uiReducerMap } from './uiReducers';

const initialState = {
  // What the user picked (stored). The actual applied mode can differ when 'system'.
  selectedTheme: 'system', // 'light' | 'dark' | 'system'
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: applyReducerMap(uiReducerMap),
});

export const { setSelectedTheme, toggleSelectedTheme } = uiSlice.actions;
export default uiSlice.reducer;
