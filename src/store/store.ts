import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { todoApi } from '~/services/todosService';
import { counterReducer } from './slices';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [todoApi.reducerPath]: todoApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(todoApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useCustomSelector: TypedUseSelectorHook<RootState> = useSelector;
