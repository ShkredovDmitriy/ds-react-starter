import theme from "../customTheme/themes";

const InputAdornmentStyles = ((theme) => {
  return {
    /* Styles applied to the root element. */
    root: {
        display: 'flex',
        height: '0.01em',
        // Fix IE 11 flexbox alignment. To remove at some point.
        maxHeight: '2em',
        alignItems: 'center',
        whiteSpace: 'nowrap'
    },

    /* Styles applied to the root element if `variant="filled"`. */
    filled: {
        '&$positionStart:not($hiddenLabel)': {
        marginTop: 16
        }
    },

    /* Styles applied to the root element if `position="start"`. */
    positionStart: {
        marginRight: 8
    },

    /* Styles applied to the root element if `position="end"`. */
    positionEnd: {
        marginLeft: 8
    },

    /* Styles applied to the root element if `disablePointerEvents=true`. */
    disablePointerEvents: {
        pointerEvents: 'none'
    },

    /* Styles applied if the adornment is used inside <FormControl hiddenLabel />. */
    hiddenLabel: {},

    /* Styles applied if the adornment is used inside <FormControl margin="dense" />. */
    marginDense: {}
  };
})(theme);

export default InputAdornmentStyles;
