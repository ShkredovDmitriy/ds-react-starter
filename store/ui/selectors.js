import * as R from 'ramda';
import { createSelector } from 'reselect';
import { NAME } from './constants';
import { feedbackSubjects } from '~/services/dto/Feedback/FeedbackApiDTO';
import FaqApiDTO from '~/services/dto/Faq/FaqApiDTO';

export const root = R.path([NAME]);

const selectFeedbackSubjects = createSelector(
  R.pipe(root, R.propOr([], 'feedbackSubjects')),
  feedbackSubjects,
);

const selectFaq = createSelector(
  R.pipe(root, R.propOr([], 'faq')),
  FaqApiDTO,
);

export default {
  selectFeedbackSubjects,
  selectFaq,
};
