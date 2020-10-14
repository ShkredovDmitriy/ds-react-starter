import theme from "../customTheme/themes";
import _extends from "@babel/runtime/helpers/esm/extends";

const FabStyles = ((theme) => {
  return {
    /* Styles applied to the root element. */
    root: _extends({}, theme.typography.button, {
        boxSizing: 'border-box',
        minHeight: 36,
        transition: theme.transitions.create(['background-color', 'box-shadow', 'border'], {
        duration: theme.transitions.duration.short
        }),
        borderRadius: '50%',
        padding: 0,
        minWidth: 0,
        width: 56,
        height: 56,
        boxShadow: theme.shadows[6],
        '&:active': {
        boxShadow: theme.shadows[12]
        },
        color: theme.palette.getContrastText(theme.palette.grey[300]),
        backgroundColor: theme.palette.grey[300],
        '&:hover': {
        backgroundColor: theme.palette.grey.A100,
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
            backgroundColor: theme.palette.grey[300]
        },
        '&$disabled': {
            backgroundColor: theme.palette.action.disabledBackground
        },
        textDecoration: 'none'
        },
        '&$focusVisible': {
        boxShadow: theme.shadows[6]
        },
        '&$disabled': {
        color: theme.palette.action.disabled,
        boxShadow: theme.shadows[0],
        backgroundColor: theme.palette.action.disabledBackground
        }
    }),

    /* Styles applied to the span element that wraps the children. */
    label: {
        width: '100%',
        // assure the correct width for iOS Safari
        display: 'inherit',
        alignItems: 'inherit',
        justifyContent: 'inherit'
    },

    /* Styles applied to the root element if `color="primary"`. */
    primary: {
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.primary.main,
        '&:hover': {
        backgroundColor: theme.palette.primary.dark,
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
            backgroundColor: theme.palette.primary.main
        }
        }
    },

    /* Styles applied to the root element if `color="secondary"`. */
    secondary: {
        color: theme.palette.secondary.contrastText,
        backgroundColor: theme.palette.secondary.main,
        '&:hover': {
        backgroundColor: theme.palette.secondary.dark,
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
            backgroundColor: theme.palette.secondary.main
        }
        }
    },

    /* Styles applied to the root element if `variant="extended"`. */
    extended: {
        borderRadius: 48 / 2,
        padding: '0 16px',
        width: 'auto',
        minHeight: 'auto',
        minWidth: 48,
        height: 48,
        '&$sizeSmall': {
        width: 'auto',
        padding: '0 8px',
        borderRadius: 34 / 2,
        minWidth: 34,
        height: 34
        },
        '&$sizeMedium': {
        width: 'auto',
        padding: '0 16px',
        borderRadius: 40 / 2,
        minWidth: 40,
        height: 40
        }
    },

    /* Pseudo-class applied to the ButtonBase root element if the button is keyboard focused. */
    focusVisible: {},

    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the root element if `color="inherit"`. */
    colorInherit: {
        color: 'inherit'
    },

    /* Styles applied to the root element if `size="small"``. */
    sizeSmall: {
        width: 40,
        height: 40
    },

    /* Styles applied to the root element if `size="medium"``. */
    sizeMedium: {
        width: 48,
        height: 48
    }
  };
})(theme);

export default FabStyles;
