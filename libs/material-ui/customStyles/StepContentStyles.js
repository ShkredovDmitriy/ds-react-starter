import theme from "../customTheme/themes";

const StepContentStyles = ((theme) => {
  return {
    /* Styles applied to the root element. */
    root: {
        marginTop: 8,
        marginLeft: 12,
        // half icon
        paddingLeft: 8 + 12,
        // margin + half icon
        paddingRight: 8,
        borderLeft: `1px solid ${theme.palette.type === 'light' ? theme.palette.grey[400] : theme.palette.grey[600]}`
    },

    /* Styles applied to the root element if `last={true}` (controlled by `Step`). */
    last: {
        borderLeft: 'none'
    },

    /* Styles applied to the Transition component. */
    transition: {}
  };
})(theme);

export default StepContentStyles;
