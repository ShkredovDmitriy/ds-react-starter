import theme from "../customTheme/themes";

const CardActionAreaStyles = ((theme) => {
  return {
    /* Styles applied to the root element. */
    root: {
        display: 'block',
        textAlign: 'inherit',
        width: '100%',
        '&:hover $focusHighlight': {
        opacity: theme.palette.action.hoverOpacity
        },
        '&$focusVisible $focusHighlight': {
        opacity: 0.12
        }
    },

    /* Pseudo-class applied to the ButtonBase root element if the action area is keyboard focused. */
    focusVisible: {},

    /* Styles applied to the overlay that covers the action area when it is keyboard focused. */
    focusHighlight: {
        overflow: 'hidden',
        pointerEvents: 'none',
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        borderRadius: 'inherit',
        opacity: 0,
        backgroundColor: 'currentcolor',
        transition: theme.transitions.create('opacity', {
        duration: theme.transitions.duration.short
        })
    }
  };
})(theme);

export default CardActionAreaStyles;
