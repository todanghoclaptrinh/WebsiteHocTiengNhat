import { configureStore } from '@reduxjs/toolkit';

import authReducer from './auth.slice';
import adminReducer from './admin.slice';
import studyReducer from './study.slice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    admin: adminReducer,
    study: studyReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
