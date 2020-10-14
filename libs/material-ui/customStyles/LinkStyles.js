import theme from "../customTheme/themes";

const LinkStyles = ((theme) => {
  return {
    /* Styles applied to the root element. */
    root: {},

    /* Styles applied to the root element if `underline="none"`. */
    underlineNone: {
        textDecoration: 'none'
    },

    /* Styles applied to the root element if `underline="hover"`. */
    underlineHover: {
        textDecoration: 'none',
        '&:hover': {
        textDecoration: 'underline'
        }
    },

    /* Styles applied to the root element if `underline="always"`. */
    underlineAlways: {
        textDecoration: 'underline'
    },
    // Same reset as ButtonBase.root

    /* Styles applied to the root element if `component="button"`. */
    button: {
        position: 'relative',
        WebkitTapHighlightColor: 'transparent',
        backgroundColor: 'transparent',
        // Reset default value
        // We disable the focus ring for mouse, touch and keyboard users.
        outline: 0,
        border: 0,
        margin: 0,
        // Remove the margin in Safari
        borderRadius: 0,
        padding: 0,
        // Remove the padding in Firefox
        cursor: 'pointer',
        userSelect: 'none',
        verticalAlign: 'middle',
        '-moz-appearance': 'none',
        // Reset
        '-webkit-appearance': 'none',
        // Reset
        '&::-moz-focus-inner': {
        borderStyle: 'none' // Remove Firefox dotted outline.

        },
        '&$focusVisible': {
        outline: 'auto'
        }
    },

    /* Pseudo-class applied to the root element if the link is keyboard focused. */
    focusVisible: {}
  };
})(theme);

export default LinkStyles;
