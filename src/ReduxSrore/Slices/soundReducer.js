/* eslint-disable no-debugger */
import { createSlice, } from '@reduxjs/toolkit';



const dataReducer = createSlice({
    name: 'Sound',
    initialState: {
        status: false
    },
    reducers: {
        MuteUnmute: (State) => {
            State.status = !State.status
        },


    },

});

export const { MuteUnmute } = dataReducer.actions;
export default dataReducer.reducer;
