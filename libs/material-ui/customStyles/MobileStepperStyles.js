import theme from "../customTheme/themes";

const MobileStepperStyles = ((theme) => {
  return {
    /* Styles applied to the root element. */
    root: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: theme.palette.background.default,
        padding: 8
    },

    /* Styles applied to the root element if `position="bottom"`. */
    positionBottom: {
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: theme.zIndex.mobileStepper
    },

    /* Styles applied to the root element if `position="top"`. */
    positionTop: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: theme.zIndex.mobileStepper
    },

    /* Styles applied to the root element if `position="static"`. */
    positionStatic: {},

    /* Styles applied to the dots container if `variant="dots"`. */
    dots: {
        display: 'flex',
        flexDirection: 'row'
    },

    /* Styles applied to each dot if `variant="dots"`. */
    dot: {
        backgroundColor: theme.palette.action.disabled,
        borderRadius: '50%',
        width: 8,
        height: 8,
        margin: '0 2px'
    },

    /* Styles applied to a dot if `variant="dots"` and this is the active step. */
    dotActive: {
        backgroundColor: theme.palette.primary.main
    },

    /* Styles applied to the Linear Progress component if `variant="progress"`. */
    progress: {
        width: '50%'
    }
  };
})(theme);

export default MobileStepperStyles;
