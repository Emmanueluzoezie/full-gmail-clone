import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import mailReducer from '../features/counter/mailSlice';
import userSlice from '../features/counter/userSlice';

export const store = configureStore({
  reducer: {
    mail: mailReducer,
    user: userSlice
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
