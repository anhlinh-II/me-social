import { createSlice } from '@reduxjs/toolkit';

// Initial state cho trang
const initialState = {
  currentPage: localStorage.getItem('currentPage') || '/login',  // Lấy trang hiện tại từ localStorage
};

const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
      localStorage.setItem('currentPage', action.payload);  // Lưu trang hiện tại vào localStorage
    },
  },
});

export const { setCurrentPage } = pageSlice.actions;
export default pageSlice.reducer;
