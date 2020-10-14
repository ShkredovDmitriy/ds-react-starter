import React from 'react';
import cx from 'classnames';
import './HeadLine.scss';

const Headline = ({
  className,
  children,
}) => {
  const classNames = cx('ds-modal__headline', className);

  return (
    <div className={classNames}>
      {children}
    </div>
  );
};

export default Headline;
