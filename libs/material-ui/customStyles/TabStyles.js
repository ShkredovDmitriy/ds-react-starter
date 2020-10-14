import theme from "../customTheme/themes";
import _extends from "@babel/runtime/helpers/esm/extends";

const TabStyles = ((theme) => {
  return {
    /* Styles applied to the root element. */
    root: _extends({}, theme.typography.button, {
        maxWidth: 264,
        minWidth: 72,
        position: 'relative',
        boxSizing: 'border-box',
        minHeight: 48,
        flexShrink: 0,
        padding: '6px 12px',
        [theme.breakpoints.up('sm')]: {
        padding: '6px 24px'
        },
        overflow: 'hidden',
        whiteSpace: 'normal',
        textAlign: 'center',
        [theme.breakpoints.up('sm')]: {
        minWidth: 160
        }
    }),

    /* Styles applied to the root element if both `icon` and `label` are provided. */
    labelIcon: {
        minHeight: 72,
        paddingTop: 9,
        '& $wrapper > *:first-child': {
        marginBottom: 6
        }
    },

    /* Styles applied to the root element if the parent [`Tabs`](/api/tabs/) has `textColor="inherit"`. */
    textColorInherit: {
        color: 'inherit',
        opacity: 0.7,
        '&$selected': {
        opacity: 1
        },
        '&$disabled': {
        opacity: 0.5
        }
    },

    /* Styles applied to the root element if the parent [`Tabs`](/api/tabs/) has `textColor="primary"`. */
    textColorPrimary: {
        color: theme.palette.text.secondary,
        '&$selected': {
        color: theme.palette.primary.main
        },
        '&$disabled': {
        color: theme.palette.text.disabled
        }
    },

    /* Styles applied to the root element if the parent [`Tabs`](/api/tabs/) has `textColor="secondary"`. */
    textColorSecondary: {
        color: theme.palette.text.secondary,
        '&$selected': {
        color: theme.palette.secondary.main
        },
        '&$disabled': {
        color: theme.palette.text.disabled
        }
    },

    /* Pseudo-class applied to the root element if `selected={true}` (controlled by the Tabs component). */
    selected: {},

    /* Pseudo-class applied to the root element if `disabled={true}` (controlled by the Tabs component). */
    disabled: {},

    /* Styles applied to the root element if `fullWidth={true}` (controlled by the Tabs component). */
    fullWidth: {
        flexShrink: 1,
        flexGrow: 1,
        flexBasis: 0,
        maxWidth: 'none'
    },

    /* Styles applied to the root element if `wrapped={true}`. */
    wrapped: {
        fontSize: theme.typography.pxToRem(12),
        lineHeight: 1.5
    },

    /* Styles applied to the `icon` and `label`'s wrapper element. */
    wrapper: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        flexDirection: 'column'
    }
  };
})(theme);

export default TabStyles;
