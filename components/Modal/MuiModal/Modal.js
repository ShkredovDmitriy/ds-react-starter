import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import { ModalProvider } from '../context';
import { makeStyles } from '@material-ui/core/styles';
import { findLastIndex } from 'ramda';


const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    overflow: 'hidden',
    overflowY: 'auto',
  },
  container: {
    padding: '1.25rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    height: 'auto',
  },
  paper: {
    margin: 0,
    maxHeight: 'none',
    width: '100%',
    flexShrink: 0,
    backgroundColor: '#F2F2F2',
  },
  paperWidth420: {
    maxWidth: '26.25rem',
    margin: 0,
    maxHeight: 'none',
    width: '100%',
    flexShrink: 0,
    backgroundColor: '#F2F2F2',
  },
  paperWidth895: {
    maxWidth: '55.9375rem',
    margin: 0,
    maxHeight: 'none',
    width: '100%',
    flexShrink: 0,
    backgroundColor: '#F2F2F2',
  },
  paperWidth590: {
    maxWidth: '36.875rem',
    margin: 0,
    maxHeight: 'none',
    width: '100%',
    flexShrink: 0,
    backgroundColor: '#F2F2F2',
  }
}));


const Modal = ({
  children,
  modal,
  className,
  variant,
  ...props
}) => {

  const close = () => {
    modal.close();
  };

  const classes = useStyles();

  const modalProviderValue = {
    close,
  };

  let paperWidth = classes.paper;

  if(variant === "w420"){
    paperWidth = classes.paperWidth420;
  }

  if(variant === "w895"){
    paperWidth = classes.paperWidth895;
  }

  if(variant === "w590"){
    paperWidth = classes.paperWidth590;
  }

  return (
    <Dialog
      {...props}
      open={modal.isOpen}
      onClose={close}
      classes={{
        root: classes.root,
        container: classes.container,
        paper: paperWidth,
      }}
    >
      <ModalProvider value={modalProviderValue}>
        {children}
      </ModalProvider>
    </Dialog>
  )
};

export default Modal;
