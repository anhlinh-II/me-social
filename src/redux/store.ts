import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Lưu trữ trong localStorage
import counterReducer from '../redux/features/counter/counterSlice';
import accountReducer from '../redux/slice/accountSlice';

// Cấu hình redux-persist cho accountReducer
const accountPersistConfig = {
  key: 'account', // Khóa để lưu trữ state này
  storage,
};

const persistedAccountReducer = persistReducer(accountPersistConfig, accountReducer);

export const store = configureStore({
  reducer: {
    counter: counterReducer, // Reducer không cần lưu trữ
    account: persistedAccountReducer, // Reducer với redux-persist
  },
});

// Thêm persistor để đồng bộ
export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
