import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Lưu trữ trong localStorage
import accountReducer from '../redux/slice/accountSlice';
import { postsSlice } from './slice/postsSlice';
import { groupSlice } from './slice/groupSlice';
import { friendSlice } from './slice/friendSlice';
import { chatSlice } from './slice/chatSlice';
import { messageSlice } from './slice/messageSlice';

// Cấu hình redux-persist cho accountReducer
const accountPersistConfig = {
  key: 'account', // Khóa để lưu trữ state này
  storage,
};

const persistedAccountReducer = persistReducer(accountPersistConfig, accountReducer);

export const store = configureStore({
  reducer: {
    account: persistedAccountReducer, // Reducer với redux-persist
    posts: postsSlice.reducer,
    group: groupSlice.reducer,
    friend: friendSlice.reducer,
    chat: chatSlice.reducer,
    message: messageSlice.reducer,
  },
});

// Thêm persistor để đồng bộ
export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
