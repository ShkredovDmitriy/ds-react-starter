import * as R from 'ramda';
import { useState } from 'react';

const stateModal = ({
  name,
  modals,
  setModals,
}) => {
  const modal = R.path([name], modals);
  const isOpen = R.path([name, 'open'], modals);
  
  const open = (options) => {
    const closable = R.prop('closable', options);

    if (isOpen) {
      return;
    }

    setModals(modals => ({
      ...modals,
      [name]: {
        ...modal,
        open: true,
        closable,
      },
    }));
  };
  
  const close = (options) => {
    const closable = R.prop('closable', options);

    if (modal.closable === false && !closable) {
      return;
    }

    setModals(modals => ({
      ...modals,
      [name]: {
        ...modal,
        open: false,
      },
    }));
  };

  const toggle = () => {
    if (isOpen) {
      close();
    } else {
      open();
    }
  };

  return {
    isOpen,
    open,
    close,
    toggle,
  };
};

export default stateModal;
