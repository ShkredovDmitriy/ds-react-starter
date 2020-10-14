import * as R from 'ramda';
import { useSnackbar } from 'notistack';
import { useTranslation } from 'react-i18next';

const IGNORE_STATUS_LIST = [422];
const NOTIFY_STATUS = [403, 401];

const errorHandler = () => {
  const { t } = useTranslation();
  const { enqueueSnackbar } = useSnackbar();

  const notification = (error, route) => {
    const message = R.path(['response', 'data', 'message'], error);
    const url = R.path(['response', 'config', 'url'], error);
    const status = R.path(['response', 'status'], error);

    if (R.includes(status, NOTIFY_STATUS)) {
      const message = t([`api.status.${status}`, 'api.default.messages.unknown']);
      enqueueSnackbar(message, { variant: 'error' });
      return;
    }

    const serverError = R.path(['response', 'data', 'error'], error);
    if (serverError) {
      const exception = R.path(['type'], serverError);
      const message = t([`api.exceptions.${exception}`, 'api.default.messages.unknown']);
      enqueueSnackbar(message, { variant: 'error' });
      return;
    }

    const serverException = R.path(['response', 'data', 'exception'], error);
    if (serverException) {
      const message = t([`api.exceptions.${serverException}`, 'api.default.messages.unknown']);
      enqueueSnackbar(message, { variant: 'error' });
      return;
    }

    if (R.includes(status, IGNORE_STATUS_LIST)) {
      return;
    }
    
    if (message) {
      const i18nKey = `api|${url}|messages|${message}}`;
      const i18n = t([i18nKey, 'api|default|messages|unknown'], { keySeparator: '|' });
      enqueueSnackbar(i18n, { variant: 'error' });
      return;
    }
  };

  return (error, route) => {
    const notifications = R.path(['notifications', 'error'], route);

    if (notifications !== false) {
      notification(error, route);
    }

    const serverErrors = R.path(['response', 'data', 'errors'], error);
    if (route.responseDto && serverErrors) {
      error.response.data.errors = route.responseDto(serverErrors);
    }

    console.log('ERROR HANDLER', error);
    throw error;
  };
};

export default errorHandler;
