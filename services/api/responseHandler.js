import * as R from 'ramda';
import { useSnackbar } from 'notistack';
import { useTranslation } from 'react-i18next';

const responseHandler = () => {
  const { t } = useTranslation();
  const { enqueueSnackbar } = useSnackbar();

  const notification = (response, route) => {
    const successMessage = R.path(['data', 'success'], response);
    
    if (successMessage) {
      const i18nKey = `api|${route.url}|messages|${successMessage}`;
      const i18n = t([i18nKey, successMessage], { keySeparator: '|' });
      enqueueSnackbar(i18n, { variant: 'success' });
    }
  };

  return (response, route) => {
    const notifications = R.path(['notifications', 'success'], route);
    if (notifications !== false) {
      notification(response, route);
    }
    
    return response;
  };
};

export default responseHandler;
