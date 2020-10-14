import * as R from 'ramda';

const toFormData = (input) => {
  const formData = new FormData();
  const pairs = R.toPairs(input);
  
  pairs.forEach(([key, value]) => {
    if (R.is(Array, value)) {
      R.forEach(item => {
        formData.append(`${key}`, item)
      }, value);
      return;
    }
    formData.append(key, value);
  });

  return formData;
};

export default toFormData;
