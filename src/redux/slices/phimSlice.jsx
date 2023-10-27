import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit"
import { quanLyPhimServ } from "../../services/quanLyPhim";
import {get_loading_started, get_loading_ended} from './loadingSlice';


const initialState = {
    arrPhim: [],
};

export const getAllMovieApi = createAsyncThunk('phim/getAllMovieApi', async ( _, {dispatch}) => {
    // console.log(thunkAPI);
    try {
        // mình gọi cho loading xuất hiện
        dispatch(get_loading_started());
        const res = await quanLyPhimServ.getAllMovie();
        // khi gọi dữ liệu thành công sẽ sử dụng get_loading_end để tắt loading
        dispatch(get_loading_ended());
        // console.log(res)
        
        // khi return vể một giá trị thì giá trị sẽ gửi lên store
        return res.data.content
    } catch (error) {
        dispatch(get_loading_ended());
        console.log(error);
    }
    
}, 
// {
//     condition: (_, {getState,extra}) => {
//         console.log(getState);
//         const {loadingSlice} = getState();
//         console.log(loadingSlice)
//     }
//     },
)

const phimSlice = createSlice({
    name: 'phim',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllMovieApi.pending,(state, action) => {
            // get_loading_started
        });
        builder.addCase(getAllMovieApi.fulfilled, (state, action) => {
            // console.log(current(state));
            // console.log(action);

            // payload là kết quả trả về của return khi sử dụng thunk
            state.arrPhim = action.payload;
        });
        builder.addCase(getAllMovieApi.rejected);
    },
});

export const {} = phimSlice.actions

export default phimSlice.reducer