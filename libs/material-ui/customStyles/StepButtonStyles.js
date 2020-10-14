import theme from "../customTheme/themes";

const StepButtonStyles = ((theme) => {
  return {
    /* Styles applied to the root element. */
    root: {
        width: '100%',
        padding: '24px 16px',
        margin: '-24px -16px',
        boxSizing: 'content-box'
    },

    /* Styles applied to the root element if `orientation="horizontal"`. */
    horizontal: {},

    /* Styles applied to the root element if `orientation="vertical"`. */
    vertical: {
        justifyContent: 'flex-start',
        padding: '8px',
        margin: '-8px'
    },

    /* Styles applied to the `ButtonBase` touch-ripple. */
    touchRipple: {
        color: 'rgba(0, 0, 0, 0.3)'
    }
  };
})(theme);

export default StepButtonStyles;
