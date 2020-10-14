import theme from "../customTheme/themes";

const StepIconStyles = ((theme) => {
  return {
    /* Styles applied to the root element. */
    root: {
        display: 'block',
        color: theme.palette.text.disabled,
        '&$completed': {
        color: theme.palette.primary.main
        },
        '&$active': {
        color: theme.palette.primary.main
        },
        '&$error': {
        color: theme.palette.error.main
        }
    },

    /* Styles applied to the SVG text element. */
    text: {
        fill: theme.palette.primary.contrastText,
        fontSize: theme.typography.caption.fontSize,
        fontFamily: theme.typography.fontFamily
    },

    /* Pseudo-class applied to the root element if `active={true}`. */
    active: {},

    /* Pseudo-class applied to the root element if `completed={true}`. */
    completed: {},

    /* Pseudo-class applied to the root element if `error={true}`. */
    error: {}
  };
})(theme);

export default StepIconStyles;
