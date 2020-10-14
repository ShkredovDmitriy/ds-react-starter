import i18n from '~/i18n';

const getError = (key) => (params) => {
  const fieldLabel = i18n.t(`fields.${params.path}.label`);
  const data = {
    ...params,
    field_name: fieldLabel,
  };
  return i18n.t(key, data);
};

const i18nLocale = {
  string: {
    required: getError('validations.required'),
    min: getError('validations.min'),
    max: getError('validations.max'),
    phone_ru: params => i18n.t('validations.phone_ru', params),
    personal_inn_ru: params => i18n.t('validations.personal_inn_ru', params),
    ru_one: params => i18n.t('validations.ru_one', params),
    ru_two: params => i18n.t('validations.ru_two', params),
    date_one: params => i18n.t('validations.date_one', params),
    email: params => i18n.t('validations.email', params),
    password: params => i18n.t('validations.password', params),
    password_equal: params => i18n.t('validations.password_equal', params),
    num_one: params => i18n.t('validations.num_one', params),
  },
  mixed: {
    required: getError('validations.required'),
    min: getError('validations.min'),
    max: getError('validations.max'),
    ext: getError('validations.ext'),
    notType: getError('validations.notType'),
  },
  array: {
    fileSize: getError('validations.fileSize'),
  },
  boolean: {
    checkbox: params => i18n.t('validations.checkbox', params),
  },
  number: {
    integer: getError('validations.integer'),
    positive: getError('validations.positive'),
    max: getError('validations.max_number'),
  }
};

export default i18nLocale;
