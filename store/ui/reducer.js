import {
  GET_FEEDBACK_SUBJECTS,
  GET_FAQ_SUCCESS,
  NAME,
} from './constants';

const initialState = {
  feedbackSubjects: [],
  faq: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FEEDBACK_SUBJECTS:
      return {
        ...state,
        feedbackSubjects: action.data,
      };
    
    case GET_FAQ_SUCCESS:
      return {
        ...state,
        faq: action.data,
      };

    default:
      return state;
  }
};

export default {
  name: NAME,
  fn: reducer,
};
