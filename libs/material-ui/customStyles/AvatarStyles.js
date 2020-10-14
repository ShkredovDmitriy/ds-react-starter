import theme from "../customTheme/themes";

const AvatarStyles = ((theme) => {
  return {
    /* Styles applied to the root element. */
    root: {
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
      width: 40,
      height: 40,
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.pxToRem(20),
      lineHeight: 1,
      borderRadius: "50%",
      overflow: "hidden",
      userSelect: "none",
    },

    /* Styles applied to the root element if not `src` or `srcSet`. */
    colorDefault: {
      color: theme.palette.background.default,
      backgroundColor:
        theme.palette.type === "light"
          ? theme.palette.grey[400]
          : theme.palette.grey[600],
    },

    /* Styles applied to the root element if `variant="circle"`. */
    circle: {},

    /* Styles applied to the root element if `variant="rounded"`. */
    rounded: {
      borderRadius: theme.shape.borderRadius,
    },

    /* Styles applied to the root element if `variant="square"`. */
    square: {
      borderRadius: 0,
    },

    /* Styles applied to the img element if either `src` or `srcSet` is defined. */
    img: {
      width: "100%",
      height: "100%",
      textAlign: "center",
      // Handle non-square image. The property isn't supported by IE 11.
      objectFit: "cover",
      // Hide alt text.
      color: "transparent",
      // Hide the image broken icon, only works on Chrome.
      textIndent: 10000,
    },

    /* Styles applied to the fallback icon */
    fallback: {
      width: "75%",
      height: "75%",
    },
  };
})(theme);

export default AvatarStyles;
