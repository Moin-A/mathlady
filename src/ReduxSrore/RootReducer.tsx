import { combineReducers } from "@reduxjs/toolkit";

import dataReducer from "./Slices/dataReducer";
import soundReducer from "./Slices/soundReducer";

const rootReducer = combineReducers({
  Data: dataReducer,
  Sound: soundReducer
});



interface DataState {
  data: {
    questions: Object,
    metadata: Object,
    flagged: Boolean,
  }
  response: {
    flagged: boolean,
    answer: boolean,
    id: string
  }
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

export interface IRootState {
  Sound: { status: string };
  Data: DataState;
}






export default rootReducer;

