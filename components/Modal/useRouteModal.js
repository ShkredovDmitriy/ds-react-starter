import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const useRouteModal = ({
  openLink,
  closeLink,
  modal,
}) => {
  const Router = useRouter();
  const isOpen = Router.query.modal === modal;

  const open = (query) => {
    Router.push({
      pathname: openLink,
      query: {
        modal,
        ...query,
      },
    })
  };

  const close = () => {
    Router.push(closeLink);
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

export default useRouteModal;
