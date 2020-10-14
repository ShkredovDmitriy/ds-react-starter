import theme from "../customTheme/themes";

const StepStyles = ((theme) => {
  return {
    /* Styles applied to the root element. */
    root: {},

    /* Styles applied to the root element if `orientation="horizontal"`. */
    horizontal: {
        paddingLeft: 8,
        paddingRight: 8
    },

    /* Styles applied to the root element if `orientation="vertical"`. */
    vertical: {},

    /* Styles applied to the root element if `alternativeLabel={true}`. */
    alternativeLabel: {
        flex: 1,
        position: 'relative'
    },

    /* Pseudo-class applied to the root element if `completed={true}`. */
    completed: {}
  };
})(theme);

export default StepStyles;
