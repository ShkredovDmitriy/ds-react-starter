import * as R from 'ramda';
import DTO, { filterEmpties } from '../DTO';
const transforms = [
  [['question'], ['title']],
  [['answer'], ['description']],
];

export const FaqApiDTO = R.map(DTO(transforms, true));

export default FaqApiDTO;
