import * as R from 'ramda';
import DTO, { filterEmpties } from '../DTO';
import { ToSelectDTO, SelectDTO } from '../DTO/SelectDTO';

const transforms = [
  [['user'], ['user']],
  [['name'], ['first_name']],
  [['email'], ['email']],
  [['subject'], ['subject']],
  [['message'], ['message']],
  // [['phone'], ['phone']],
  // [['user_agreement'], ['user_agreement']],
  // [['captcha'], ['captcha']],
];

export const FeedbackFormDTO = (input) => {
  const data = DTO(transforms, false, input);

  data.subject = SelectDTO(data.subject);

  return R.pipe(
    R.toPairs,
    R.filter((item) => !filterEmpties(item[1])),
    R.fromPairs,
  )(data);
};

export const feedbackSubjects = ToSelectDTO;
