import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { ModalConsumer } from '../context';
import './Close.scss';

const CloseButton = ({
  onClick,
  className
}) => {
  const classNames = cx('ds-modal-close-btn', className);

  return (
    <div className={classNames} onClick={onClick} />
  );
};

const Close = ({
  as: Component,
  ...props
}) => {
  return (
    <ModalConsumer>
      {({ close }) => (
        <Component onClick={close} {...props} />
      )}
    </ModalConsumer>
  );
};

Close.propTypes = {
  as: PropTypes.func.isRequired,
};

Close.defaultProps = {
  as: CloseButton,
};

export default Close;
