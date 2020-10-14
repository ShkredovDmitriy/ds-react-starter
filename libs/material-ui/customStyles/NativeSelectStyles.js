import theme from "../customTheme/themes";

const NativeSelectStyles = ((theme) => {
  return {
    /* Styles applied to the select component `root` class. */
    root: {},

    /* Styles applied to the select component `select` class. */
    select: {
        '-moz-appearance': 'none',
        // Reset
        '-webkit-appearance': 'none',
        // Reset
        // When interacting quickly, the text can end up selected.
        // Native select can't be selected either.
        userSelect: 'none',
        borderRadius: 0,
        // Reset
        minWidth: 16,
        // So it doesn't collapse.
        cursor: 'pointer',
        '&:focus': {
        // Show that it's not an text input
        backgroundColor: theme.palette.type === 'light' ? 'rgba(0, 0, 0, 0.05)' : 'rgba(255, 255, 255, 0.05)',
        borderRadius: 0 // Reset Chrome style

        },
        // Remove IE 11 arrow
        '&::-ms-expand': {
        display: 'none'
        },
        '&$disabled': {
        cursor: 'default'
        },
        '&[multiple]': {
        height: 'auto'
        },
        '&:not([multiple]) option, &:not([multiple]) optgroup': {
        backgroundColor: theme.palette.background.paper
        },
        '&&': {
        paddingRight: 24
        }
    },

    /* Styles applied to the select component if `variant="filled"`. */
    filled: {
        '&&': {
        paddingRight: 32
        }
    },

    /* Styles applied to the select component if `variant="outlined"`. */
    outlined: {
        borderRadius: theme.shape.borderRadius,
        '&&': {
        paddingRight: 32
        }
    },

    /* Styles applied to the select component `selectMenu` class. */
    selectMenu: {
        height: 'auto',
        // Reset
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden'
    },

    /* Pseudo-class applied to the select component `disabled` class. */
    disabled: {},

    /* Styles applied to the icon component. */
    icon: {
        // We use a position absolute over a flexbox in order to forward the pointer events
        // to the input and to support wrapping tags..
        position: 'absolute',
        right: 0,
        top: 'calc(50% - 12px)',
        // Center vertically
        color: theme.palette.action.active,
        pointerEvents: 'none' // Don't block pointer events on the select under the icon.

    },

    /* Styles applied to the icon component if the popup is open. */
    iconOpen: {
        transform: 'rotate(180deg)'
    },

    /* Styles applied to the icon component if `variant="filled"`. */
    iconFilled: {
        right: 7
    },

    /* Styles applied to the icon component if `variant="outlined"`. */
    iconOutlined: {
        right: 7
    }
  };
})(theme);

export default NativeSelectStyles;
