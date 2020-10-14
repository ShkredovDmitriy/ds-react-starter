import React from 'react';
import './ModalBottomContainer.scss';

const ModalBottomContainer = ({
  children,
}) => (
  <div className='ds-modal__bottom-container'>
    {children}
  </div>
);

export const ModalBottomLink = (props) => (
  <a className='ds-modal__bottom-link' {...props} />
);

export default ModalBottomContainer;
