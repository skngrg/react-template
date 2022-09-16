import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialState = {
  counter: number;
};

const initialState: InitialState = {
  counter: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incCounter(state) {
      state.counter += 1;
    },
    decCounter(state) {
      state.counter -= 1;
    },
    resetCounter(state) {
      state.counter = 0;
    },
    setCounter(state, { payload }: PayloadAction<string>) {
      state.counter = Number(payload);
    },
  },
});

export const { incCounter, decCounter, resetCounter, setCounter } = counterSlice.actions;
export const counterReducer = counterSlice.reducer;
