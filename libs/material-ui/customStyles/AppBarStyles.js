import theme from "../customTheme/themes";

const AppBarStyles = ((theme) => {
  var backgroundColorDefault =
    theme.palette.type === "light"
      ? theme.palette.grey[100]
      : theme.palette.grey[900];
  return {
    /* Styles applied to the root element. */
    root: {
      display: "flex",
      flexDirection: "column",
      width: "67.625rem",

      boxSizing: "border-box",
      // Prevent padding issue with the Modal and fixed positioned AppBar.
      zIndex: theme.zIndex.appBar,
      flexShrink: 0,
    },

    /* Styles applied to the root element if `position="fixed"`. */
    positionFixed: {
      position: "fixed",
      top: 0,
      left: "calc(50% - 33.8125rem)",
      right: 0,
      "@media print": {
        // Prevent the app bar to be visible on each printed page.
        position: "absolute",
      },
    },

    /* Styles applied to the root element if `position="absolute"`. */
    positionAbsolute: {
      position: "absolute",
      top: 0,
      left: "calc(50% - 33.8125rem)",
      right: 0,
      '@media (max-width: 1200px)': {
        left: '2.1875rem',
        width: 'calc(100% - 4.375rem)',
      },'@media (orientation: portrait)': {
        left: 'calc(50% - 8.25rem)',
        width: '16.5625rem',
      },

    },

    /* Styles applied to the root element if `position="sticky"`. */
    positionSticky: {
      // ⚠️ sticky is not supported by IE 11.
      position: "sticky",
      top: 0,
      left: "auto",
      right: 0,
    },

    /* Styles applied to the root element if `position="static"`. */
    positionStatic: {
      position: "static",
      transform: "translateZ(0)", // Make sure we can see the elevation.
    },

    /* Styles applied to the root element if `position="relative"`. */
    positionRelative: {
      position: "relative",
    },

    /* Styles applied to the root element if `color="default"`. */
    colorDefault: {
      backgroundColor: backgroundColorDefault,
      color: theme.palette.getContrastText(backgroundColorDefault),
    },

    /* Styles applied to the root element if `color="primary"`. */
    colorPrimary: {
      backgroundColor: theme.palette.white,
      color: theme.palette.primary.contrastText,
    },

    /* Styles applied to the root element if `color="secondary"`. */
    colorSecondary: {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText,
    },

    /* Styles applied to the root element if `color="inherit"`. */
    colorInherit: {
      color: "inherit",
    },

    /* Styles applied to the root element if `color="transparent"`. */
    colorTransparent: {
      backgroundColor: "transparent",
      color: "inherit",
    },
  };
})(theme);

export default AppBarStyles;
