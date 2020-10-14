const routeModal = ({
  openLink,
  closeLink,
  name,
  Router,
}) => {
  const isOpen = Router.query.modal === name;

  const open = (query) => {
    Router.push({
      pathname: openLink.path,
      query: {
        modal: name,
        ...query,
        ...openLink.query,
      },
    })
  };

  const close = (query) => {
    Router.push({
      pathname: closeLink.path,
      query: {
        ...query,
        ...closeLink.query,
      },
    });
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

export default routeModal;
