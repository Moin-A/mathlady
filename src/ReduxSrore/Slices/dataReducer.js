/* eslint-disable no-debugger */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import jsonData from '../questions.json';
export const loadInitialState = createAsyncThunk('Data/loadInitialState', async () => {
    const response = await fetchQuestionsFromApi();
    return await response;
});

const fetchQuestionsFromApi = () => {
    return new Promise((resolve) => {
        // Simulate an asynchronous operation (e.g., fetching data from a server)
        setTimeout(() => {
            // Resolve the Promise with your JSON data
            resolve(jsonData);
        }); // Simulate a 1-second delay
    });
};

const dataReducer = createSlice({
    name: 'Data',
    initialState: {
        data: [],
        status: 'idle',
        error: null,
        response: []
    },
    reducers: {
        validate_answer: (State, actions) => {
            State.response[actions.payload.id]["answer"] = actions.answer
            State.data.questions[actions.payload.id]["attempts"]--
        },
        flagge_answer: (State, actions) => {
            const question = State.response[actions.payload];
            question["flagged"] = !question["flagged"];
        },
        show_popup: (State, actions) => {
            State.response[actions.payload.id]["show_popup"] = !State.response[actions.payload.id]["show_popup"]
        }

    },
    extraReducers: (builder) => {
        builder
            .addCase(loadInitialState.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(loadInitialState.fulfilled, (state, action) => {

                state.status = 'succeeded';
                state.data = action.payload;
                let response = {}
                for (const key in action.payload.questions) {
                    response[`${key}`] = {
                        flagged: false,
                        answer: null,
                        id: `${key}`,
                        show_popup: true
                    };
                }
                state.response = response
            })
            .addCase(loadInitialState.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});






export const { flagge_answer, validate_answer, show_popup } = dataReducer.actions;
export default dataReducer.reducer;
