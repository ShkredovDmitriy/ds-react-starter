import { showModal } from 'react-redux-modal-provider';
import config from './config';

const modalNotify = (
  options,
  modal = config.DefaultModalNotification,
) => {
  return showModal(modal, options);
};

export default modalNotify;
