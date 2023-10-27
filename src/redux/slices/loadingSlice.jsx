// câu lệnh tạo nhanh " rxslice "

// import { createSlice } from '@reduxjs/toolkit';

// // initalState
// const initialState = {
//     isActive: false,
// }

//  const loadingSlice = createSlice({
//     name: 'loading',
//     initialState,
//     reducers: {
//        get_loading_started: (state) => {
//         state.isActive = true;
//        },
//        get_loading_ended: (state) => {
//         state.isActive = false;
//        },
//     },
// });

// export const {get_loading_started , get_loading_ended} = loadingSlice.actions

// export default loadingSlice.reducer ;

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  count: 0,
    isActive: false,
}

const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
        get_loading_started: (state) => {
          state.isActive = true;
          state.count++;
       },

       get_loading_ended: (state) => {
          state.count--;
          if (state.count == 0 ) {
            state.isActive = false;
          }
       },
  }
});

export const {get_loading_started, get_loading_ended} = loadingSlice.actions

export default loadingSlice.reducer