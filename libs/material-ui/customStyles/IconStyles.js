import theme from "../customTheme/themes";

const IconStyles = ((theme) => {
  return {
    /* Styles applied to the root element. */
    root: {
        userSelect: 'none',
        fontSize: theme.typography.pxToRem(24),
        width: '1em',
        height: '1em',
        // Chrome fix for https://bugs.chromium.org/p/chromium/issues/detail?id=820541
        // To remove at some point.
        overflow: 'hidden',
        flexShrink: 0
    },

    /* Styles applied to the root element if `color="primary"`. */
    colorPrimary: {
        color: theme.palette.primary.main
    },

    /* Styles applied to the root element if `color="secondary"`. */
    colorSecondary: {
        color: theme.palette.secondary.main
    },

    /* Styles applied to the root element if `color="action"`. */
    colorAction: {
        color: theme.palette.action.active
    },

    /* Styles applied to the root element if `color="error"`. */
    colorError: {
        color: theme.palette.error.main
    },

    /* Styles applied to the root element if `color="disabled"`. */
    colorDisabled: {
        color: theme.palette.action.disabled
    },

    /* Styles applied to the root element if `fontSize="inherit"`. */
    fontSizeInherit: {
        fontSize: 'inherit'
    },

    /* Styles applied to the root element if `fontSize="small"`. */
    fontSizeSmall: {
        fontSize: theme.typography.pxToRem(20)
    },

    /* Styles applied to the root element if `fontSize="large"`. */
    fontSizeLarge: {
        fontSize: theme.typography.pxToRem(36)
    }
  };
})(theme);

export default IconStyles;
