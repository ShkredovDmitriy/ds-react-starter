import theme from "../customTheme/themes";

const InputStyles = ((theme) => {
    const light = theme.palette.type === 'light';
    const bottomLineColor = light ? 'rgba(0, 0, 0, 0.42)' : 'rgba(255, 255, 255, 0.7)';
  return {
    /* Styles applied to the root element. */
    root: {
        position: 'relative'
      },
  
      /* Styles applied to the root element if the component is a descendant of `FormControl`. */
      formControl: {
        'label + &': {
          marginTop: 16
        }
      },
  
      /* Styles applied to the root element if the component is focused. */
      focused: {},
  
      /* Styles applied to the root element if `disabled={true}`. */
      disabled: {},
  
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
        '&:hover:not($disabled):before': {
          borderBottom: `2px solid ${theme.palette.text.primary}`,
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            borderBottom: `1px solid ${bottomLineColor}`
          }
        },
        '&$disabled:before': {
          borderBottomStyle: 'dotted'
        }
      },
  
      /* Pseudo-class applied to the root element if `error={true}`. */
      error: {},
  
      /* Styles applied to the `input` element if `margin="dense"`. */
      marginDense: {},
  
      /* Styles applied to the root element if `multiline={true}`. */
      multiline: {},
  
      /* Styles applied to the root element if `fullWidth={true}`. */
      fullWidth: {},
  
      /* Styles applied to the `input` element. */
      input: {},
  
      /* Styles applied to the `input` element if `margin="dense"`. */
      inputMarginDense: {},
  
      /* Styles applied to the `input` element if `multiline={true}`. */
      inputMultiline: {},
  
      /* Styles applied to the `input` element if `type="search"`. */
      inputTypeSearch: {}
  };
})(theme);

export default InputStyles;
