import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import todolistSlice from '../features/todoitems/todolistSlice'

export const store = configureStore({
  reducer: {
    todolist: todolistSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
