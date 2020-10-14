import theme from "../customTheme/themes";

const OutlinedInputStyles = ((theme) => {
    const borderColor = theme.palette.type === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)';
  return {
    /* Styles applied to the root element. */
    root: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        '&:hover $notchedOutline': {
          borderColor: theme.palette.text.primary
        },
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          '&:hover $notchedOutline': {
            borderColor
          }
        },
        '&$focused $notchedOutline': {
          borderColor: theme.palette.primary.main,
          borderWidth: 2
        },
        '&$error $notchedOutline': {
          borderColor: theme.palette.error.main
        },
        '&$disabled $notchedOutline': {
          borderColor: theme.palette.action.disabled
        }
      },
  
      /* Styles applied to the root element if the color is secondary. */
      colorSecondary: {
        '&$focused $notchedOutline': {
          borderColor: theme.palette.secondary.main
        }
      },
  
      /* Styles applied to the root element if the component is focused. */
      focused: {},
  
      /* Styles applied to the root element if `disabled={true}`. */
      disabled: {},
  
      /* Styles applied to the root element if `startAdornment` is provided. */
      adornedStart: {
        paddingLeft: 14
      },
  
      /* Styles applied to the root element if `endAdornment` is provided. */
      adornedEnd: {
        paddingRight: 14
      },
  
      /* Pseudo-class applied to the root element if `error={true}`. */
      error: {},
  
      /* Styles applied to the `input` element if `margin="dense"`. */
      marginDense: {},
  
      /* Styles applied to the root element if `multiline={true}`. */
      multiline: {
        padding: '18.5px 14px',
        '&$marginDense': {
          paddingTop: 10.5,
          paddingBottom: 10.5
        }
      },
  
      /* Styles applied to the `NotchedOutline` element. */
      notchedOutline: {
        borderColor
      },
  
      /* Styles applied to the `input` element. */
      input: {
        padding: '18.5px 14px',
        '&:-webkit-autofill': {
          WebkitBoxShadow: theme.palette.type === 'dark' ? '0 0 0 100px #266798 inset' : null,
          WebkitTextFillColor: theme.palette.type === 'dark' ? '#fff' : null,
          borderRadius: 'inherit'
        }
      },
  
      /* Styles applied to the `input` element if `margin="dense"`. */
      inputMarginDense: {
        paddingTop: 10.5,
        paddingBottom: 10.5
      },
  
      /* Styles applied to the `input` element if `multiline={true}`. */
      inputMultiline: {
        padding: 0
      },
  
      /* Styles applied to the `input` element if `startAdornment` is provided. */
      inputAdornedStart: {
        paddingLeft: 0
      },
  
      /* Styles applied to the `input` element if `endAdornment` is provided. */
      inputAdornedEnd: {
        paddingRight: 0
      }
  };
})(theme);

export default OutlinedInputStyles;
