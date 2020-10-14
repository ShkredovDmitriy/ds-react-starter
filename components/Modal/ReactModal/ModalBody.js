import React from 'react';
import cx from 'classnames';
import './ModalBody.scss';

const ModalBody = ({
  children,
  className,
}) => {
  const classNames = cx('ds-modal__body', className);

  return (
    <div className={classNames}>{children}</div>
  );
};

export default ModalBody;
