import React from 'react';
import * as R from 'ramda';
import { useModals } from './Provider'
import { MODALS } from './constants';
import MODALS_CONFIG from './config';

const renderModal = ({
  modal: Modal,
  name,
  role,
  rule,
}) => {
  const modals = useModals();
  
  return (
    <Modal
      key={name}
      modal={modals[name]}
    />
  );
};

const Modals = ({
  children,
}) => {
  return (
    <>
      {MODALS_CONFIG.map(renderModal)}
      {children}
    </>
  );
};

export default Modals;
