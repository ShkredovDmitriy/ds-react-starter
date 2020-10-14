import theme from "../customTheme/themes";
import _extends from "@babel/runtime/helpers/esm/extends";

const InputBaseStyles = ((theme) => {
    const light = theme.palette.type === 'light';
    const placeholder = {
      color: 'currentColor',
      opacity: light ? 0.42 : 0.5,
      transition: theme.transitions.create('opacity', {
        duration: theme.transitions.duration.shorter
      })
    };
    const placeholderHidden = {
      opacity: '0 !important'
    };
    const placeholderVisible = {
      opacity: light ? 0.42 : 0.5
    };
  return {
    '@global': {
        '@keyframes mui-auto-fill': {
          from: {}
        },
        '@keyframes mui-auto-fill-cancel': {
          from: {}
        }
      },
  
      /* Styles applied to the root element. */
      root: _extends({}, theme.typography.body1, {
        color: theme.palette.text.primary,
        lineHeight: '1.1875em',
        // Reset (19px), match the native input line-height
        boxSizing: 'border-box',
        // Prevent padding issue with fullWidth.
        position: 'relative',
        cursor: 'text',
        display: 'inline-flex',
        alignItems: 'center',
        '&$disabled': {
          color: theme.palette.text.disabled,
          cursor: 'default'
        }
      }),
  
      /* Styles applied to the root element if the component is a descendant of `FormControl`. */
      formControl: {},
  
      /* Styles applied to the root element if the component is focused. */
      focused: {},
  
      /* Styles applied to the root element if `disabled={true}`. */
      disabled: {},
  
      /* Styles applied to the root element if `startAdornment` is provided. */
      adornedStart: {},
  
      /* Styles applied to the root element if `endAdornment` is provided. */
      adornedEnd: {},
  
      /* Pseudo-class applied to the root element if `error={true}`. */
      error: {},
  
      /* Styles applied to the `input` element if `margin="dense"`. */
      marginDense: {},
  
      /* Styles applied to the root element if `multiline={true}`. */
      multiline: {
        padding: `${8 - 2}px 0 ${8 - 1}px`,
        '&$marginDense': {
          paddingTop: 4 - 1
        }
      },
  
      /* Styles applied to the root element if the color is secondary. */
      colorSecondary: {},
  
      /* Styles applied to the root element if `fullWidth={true}`. */
      fullWidth: {
        width: '100%'
      },
  
      /* Styles applied to the `input` element. */
      input: {
        font: 'inherit',
        color: 'currentColor',
        padding: `${8 - 2}px 0 ${8 - 1}px`,
        border: 0,
        boxSizing: 'content-box',
        background: 'none',
        height: '1.1875em',
        // Reset (19px), match the native input line-height
        margin: 0,
        // Reset for Safari
        WebkitTapHighlightColor: 'transparent',
        display: 'block',
        // Make the flex item shrink with Firefox
        minWidth: 0,
        width: '100%',
        // Fix IE 11 width issue
        animationName: 'mui-auto-fill-cancel',
        '&::-webkit-input-placeholder': placeholder,
        '&::-moz-placeholder': placeholder,
        // Firefox 19+
        '&:-ms-input-placeholder': placeholder,
        // IE 11
        '&::-ms-input-placeholder': placeholder,
        // Edge
        '&:focus': {
          outline: 0
        },
        // Reset Firefox invalid required input style
        '&:invalid': {
          boxShadow: 'none'
        },
        '&::-webkit-search-decoration': {
          // Remove the padding when type=search.
          '-webkit-appearance': 'none'
        },
        // Show and hide the placeholder logic
        'label[data-shrink=false] + $formControl &': {
          '&::-webkit-input-placeholder': placeholderHidden,
          '&::-moz-placeholder': placeholderHidden,
          // Firefox 19+
          '&:-ms-input-placeholder': placeholderHidden,
          // IE 11
          '&::-ms-input-placeholder': placeholderHidden,
          // Edge
          '&:focus::-webkit-input-placeholder': placeholderVisible,
          '&:focus::-moz-placeholder': placeholderVisible,
          // Firefox 19+
          '&:focus:-ms-input-placeholder': placeholderVisible,
          // IE 11
          '&:focus::-ms-input-placeholder': placeholderVisible // Edge
  
        },
        '&$disabled': {
          opacity: 1 // Reset iOS opacity
  
        },
        '&:-webkit-autofill': {
          animationDuration: '5000s',
          animationName: 'mui-auto-fill'
        }
      },
  
      /* Styles applied to the `input` element if `margin="dense"`. */
      inputMarginDense: {
        paddingTop: 4 - 1
      },
  
      /* Styles applied to the `input` element if `multiline={true}`. */
      inputMultiline: {
        height: 'auto',
        resize: 'none',
        padding: 0
      },
  
      /* Styles applied to the `input` element if `type="search"`. */
      inputTypeSearch: {
        // Improve type search style.
        '-moz-appearance': 'textfield',
        '-webkit-appearance': 'textfield'
      },
  
      /* Styles applied to the `input` element if `startAdornment` is provided. */
      inputAdornedStart: {},
  
      /* Styles applied to the `input` element if `endAdornment` is provided. */
      inputAdornedEnd: {},
  
      /* Styles applied to the `input` element if `hiddenLabel={true}`. */
      inputHiddenLabel: {}
  };
})(theme);

export default InputBaseStyles;
