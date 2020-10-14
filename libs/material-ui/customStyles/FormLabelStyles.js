import theme from "../customTheme/themes";
import _extends from "@babel/runtime/helpers/esm/extends";

const FormLabelStyles = ((theme) => {
  return {
    /* Styles applied to the root element. */
    root: _extends({
        color: theme.palette.text.secondary
    }, theme.typography.body1, {
        lineHeight: 1,
        padding: 0,
        '&$focused': {
        color: theme.palette.primary.main
        },
        '&$disabled': {
        color: theme.palette.text.disabled
        },
        '&$error': {
        color: theme.palette.error.main
        }
    }),

    /* Styles applied to the root element if the color is secondary. */
    colorSecondary: {
        '&$focused': {
        color: theme.palette.secondary.main
        }
    },

    /* Pseudo-class applied to the root element if `focused={true}`. */
    focused: {},

    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Pseudo-class applied to the root element if `error={true}`. */
    error: {},

    /* Pseudo-class applied to the root element if `filled={true}`. */
    filled: {},

    /* Pseudo-class applied to the root element if `required={true}`. */
    required: {},

    /* Styles applied to the asterisk element. */
    asterisk: {
        '&$error': {
        color: theme.palette.error.main
        }
    }
  };
})(theme);

export default FormLabelStyles;
