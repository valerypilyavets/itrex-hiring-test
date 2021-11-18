import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import chatReducer from '../modules/chat/Chat.reducer';

export const store = configureStore({
  reducer: {
    chat: chatReducer,
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
