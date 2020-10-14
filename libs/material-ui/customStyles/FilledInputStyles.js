import theme from "../customTheme/themes";

const FilledInputStyles = ((theme) => {
    const light = theme.palette.type === 'light';
    const bottomLineColor = light ? 'rgba(0, 0, 0, 0.42)' : 'rgba(255, 255, 255, 0.7)';
    const backgroundColor = light ? 'rgba(0, 0, 0, 0.09)' : 'rgba(255, 255, 255, 0.09)';
  return {
    /* Styles applied to the root element. */
    root: {
        position: 'relative',
        backgroundColor,
        borderTopLeftRadius: theme.shape.borderRadius,
        borderTopRightRadius: theme.shape.borderRadius,
        transition: theme.transitions.create('background-color', {
          duration: theme.transitions.duration.shorter,
          easing: theme.transitions.easing.easeOut
        }),
        '&:hover': {
          backgroundColor: light ? 'rgba(0, 0, 0, 0.13)' : 'rgba(255, 255, 255, 0.13)',
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor
          }
        },
        '&$focused': {
          backgroundColor: light ? 'rgba(0, 0, 0, 0.09)' : 'rgba(255, 255, 255, 0.09)'
        },
        '&$disabled': {
          backgroundColor: light ? 'rgba(0, 0, 0, 0.12)' : 'rgba(255, 255, 255, 0.12)'
        }
      },
  
      /* Styles applied to the root element if color secondary. */
      colorSecondary: {
        '&$underline:after': {
          borderBottomColor: theme.palette.secondary.main
        }
      },
  
      /* Styles applied to the root element if `disableUnderline={false}`. */
      underline: {
        '&:after': {
          borderBottom: `2px solid ${theme.palette.primary.main}`,
          left: 0,
          bottom: 0,
          // Doing the other way around crash on IE 11 "''" https://github.com/cssinjs/jss/issues/242
          content: '""',
          position: 'absolute',
          right: 0,
          transform: 'scaleX(0)',
          transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shorter,
            easing: theme.transitions.easing.easeOut
          }),
          pointerEvents: 'none' // Transparent to the hover style.
  
        },
        '&$focused:after': {
          transform: 'scaleX(1)'
        },
        '&$error:after': {
          borderBottomColor: theme.palette.error.main,
          transform: 'scaleX(1)' // error is always underlined in red
  
        },
        '&:before': {
          borderBottom: `1px solid ${bottomLineColor}`,
          left: 0,
          bottom: 0,
          // Doing the other way around crash on IE 11 "''" https://github.com/cssinjs/jss/issues/242
          content: '"\\00a0"',
          position: 'absolute',
          right: 0,
          transition: theme.transitions.create('border-bottom-color', {
            duration: theme.transitions.duration.shorter
          }),
          pointerEvents: 'none' // Transparent to the hover style.
  
        },
        '&:hover:before': {
          borderBottom: `1px solid ${theme.palette.text.primary}`
        },
        '&$disabled:before': {
          borderBottomStyle: 'dotted'
        }
      },
  
      /* Pseudo-class applied to the root element if the component is focused. */
      focused: {},
  
      /* Pseudo-class applied to the root element if `disabled={true}`. */
      disabled: {},
  
      /* Styles applied to the root element if `startAdornment` is provided. */
      adornedStart: {
        paddingLeft: 12
      },
  
      /* Styles applied to the root element if `endAdornment` is provided. */
      adornedEnd: {
        paddingRight: 12
      },
  
      /* Pseudo-class applied to the root element if `error={true}`. */
      error: {},
  
      /* Styles applied to the `input` element if `margin="dense"`. */
      marginDense: {},
  
      /* Styles applied to the root element if `multiline={true}`. */
      multiline: {
        padding: '27px 12px 10px',
        '&$marginDense': {
          paddingTop: 23,
          paddingBottom: 6
        }
      },
  
      /* Styles applied to the `input` element. */
      input: {
        padding: '27px 12px 10px',
        '&:-webkit-autofill': {
          WebkitBoxShadow: theme.palette.type === 'dark' ? '0 0 0 100px #266798 inset' : null,
          WebkitTextFillColor: theme.palette.type === 'dark' ? '#fff' : null,
          borderTopLeftRadius: 'inherit',
          borderTopRightRadius: 'inherit'
        }
      },
  
      /* Styles applied to the `input` element if `margin="dense"`. */
      inputMarginDense: {
        paddingTop: 23,
        paddingBottom: 6
      },
  
      /* Styles applied to the `input` if in `<FormControl hiddenLabel />`. */
      inputHiddenLabel: {
        paddingTop: 18,
        paddingBottom: 19,
        '&$inputMarginDense': {
          paddingTop: 10,
          paddingBottom: 11
        }
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

export default FilledInputStyles;
