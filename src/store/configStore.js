/* eslint-disable no-param-reassign */
import { configureStore, createSlice } from '@reduxjs/toolkit';

const langSlice = createSlice({
  name: 'lang',
  initialState: {
    lang: 'en',
  },
  reducers: {
    setLang(state, action) {
      state.lang = action.payload;
    },
  },
});

export const { setLang } = langSlice.actions;

export default () => configureStore({
  reducer: {
    lang: langSlice.reducer,
  },
});
