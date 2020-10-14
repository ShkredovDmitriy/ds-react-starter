
import { GET_FEEDBACK_SUBJECTS, GET_FAQ_SUCCESS } from './constants';
import { ENDPOINTS } from '~/services/api';

export const getFeedbackSubjectsSuccess = (data) => ({
  type: GET_FEEDBACK_SUBJECTS,
  data,
});

export const getFaqSuccess = (data) => ({
  type: GET_FAQ_SUCCESS,
  data,
});

const getFeedbackSubjects = () => async (dispatch, store, { api }) => {
  try {
    const response = await api[ENDPOINTS.FEEDBACK_SUBJECTS]();

    dispatch(getFeedbackSubjectsSuccess(response.data));

    return response;
  } catch (error) {
    throw error;
  }
};

const getFaq = () => async (dispatch, store, { api }) => {
  try {
    const response = await api[ENDPOINTS.FAQ]();

    dispatch(getFaqSuccess(response.data));

    return response;
  } catch (error) {
    throw error;
  }
};


export default {
  getFeedbackSubjects,
  getFaq,
};
