import { createSlice, current } from '@reduxjs/toolkit';
import { getLocalStore } from '../../utils/localStore,';

// initalState
const initialState = {
    userLogin: getLocalStore('userLogin'),
}

 const nguoiDungSlice = createSlice({
    name: 'nguoiDung',
    initialState,
    reducers: {
        getInfoUser: ( state, action) => {
            // console.log(current(state));
            // console.log(action);
        }
    },
});

export const { getInfoUser } = nguoiDungSlice.actions

export default nguoiDungSlice.reducer