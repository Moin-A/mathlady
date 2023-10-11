import { createAction } from "@reduxjs/toolkit";
import jsonData from '../questions.json';

export const apiMiddleware = ({ dispatch, getState }) => (next) => async (
  action
) => {

  const { payload, type } = action;

  switch (action?.payload?.type) {

    case "MCQ": {
      const answer = jsonData?.questions[action.payload.id]["answer"]["id"] == action.payload.answer
      return next({ ...action, answer });
    }
    case "ListDraggable": {
      const answer = JSON.stringify(jsonData?.questions[action.payload.id]["answer"]["correctOption"]) == JSON.stringify(action.payload.answer.map(item => item.id))
      return next({ ...action, answer });
    }
    case "INPUT": {
      const answer = jsonData?.questions[action.payload.id]["answer"]["correctAnswer"] == action.payload.answer
      return next({ ...action, answer });
    }
    default:
      return next(action);
  }
};
