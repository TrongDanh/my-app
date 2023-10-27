import { configureStore } from '@reduxjs/toolkit'
import nguoiDungSlice from './slices/nguoiDungSlice';
import phimSlice from './slices/phimSlice';
import loadingSlice from './slices/loadingSlice';

export default configureStore({
  reducer: {
    // hoTen: () => {
    //     return 'Trọng Danh';
    // }
    nguoiDungSlice,
    phimSlice, 
    loadingSlice,
  }
});
