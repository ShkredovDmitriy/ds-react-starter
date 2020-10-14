import theme from "../customTheme/themes";
import _extends from "@babel/runtime/helpers/esm/extends";

const FormHelperTextStyles = ((theme) => {
  return {
    /* Styles applied to the root element. */
    root: _extends({
        color: theme.palette.text.secondary
    }, theme.typography.caption, {
        textAlign: 'left',
        marginTop: 3,
        margin: 0,
        '&$disabled': {
        color: theme.palette.text.disabled
        },
        '&$error': {
        color: theme.palette.error.main
        }
    }),

    /* Pseudo-class applied to the root element if `error={true}`. */
    error: {},

    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the root element if `margin="dense"`. */
    marginDense: {
        marginTop: 4
    },

    /* Styles applied to the root element if `variant="filled"` or `variant="outlined"`. */
    contained: {
        marginLeft: 14,
        marginRight: 14
    },

    /* Pseudo-class applied to the root element if `focused={true}`. */
    focused: {},

    /* Pseudo-class applied to the root element if `filled={true}`. */
    filled: {},

    /* Pseudo-class applied to the root element if `required={true}`. */
    required: {}
  };
})(theme);

export default FormHelperTextStyles;
