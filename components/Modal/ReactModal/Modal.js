import React from 'react';
import ReactModal from 'react-modal';
import cx from 'classnames';
import { ModalProvider } from '../context';
import './Modal.scss';

const Modal = ({
  children,
  modal,
  className,
  ...props
}) => {
  const classNames = cx('ds-modal', className);
  const close = () => {
    modal.close();
  };

  const modalProviderValue = {
    close,
  };

  return (
    <ReactModal
      {...props}
      isOpen={modal.isOpen}
      onRequestClose={close}
      closeTimeoutMS={500}
      bodyOpenClassName='ds-modal__overflow-hidden'
      overlayClassName={classNames}
      className='ds-modal__wrapper'
    >
      <ModalProvider value={modalProviderValue}>
        {children}
      </ModalProvider>
    </ReactModal>
  )
};

export default Modal;
