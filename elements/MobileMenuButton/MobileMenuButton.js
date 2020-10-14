import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  button: {
    padding: 0,
    width: '1.25rem',
    minWidth: 0,
    height: '0.9375rem',
    backgroundImage: 'url("/images/icon-mob-menu-button.svg")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    borderRadius: 0,
  },
});

export default function MainSearchField({...props}) {
  const classes = useStyles();

  return (
    <div className="mobile-menu-button">
      <Button 
        className={classes.button}
        {...props}
      />
    </div>
  );
}