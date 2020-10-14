import theme from "../customTheme/themes";

const StepConnectorStyles = ((theme) => {
  return {
    /* Styles applied to the root element. */
    root: {
        flex: '1 1 auto'
    },

    /* Styles applied to the root element if `orientation="horizontal"`. */
    horizontal: {},

    /* Styles applied to the root element if `orientation="vertical"`. */
    vertical: {
        marginLeft: 12,
        // half icon
        padding: '0 0 8px'
    },

    /* Styles applied to the root element if `alternativeLabel={true}`. */
    alternativeLabel: {
        position: 'absolute',
        top: 8 + 4,
        left: 'calc(-50% + 20px)',
        right: 'calc(50% + 20px)'
    },

    /* Pseudo-class applied to the root element if `active={true}`. */
    active: {},

    /* Pseudo-class applied to the root element if `completed={true}`. */
    completed: {},

    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the line element. */
    line: {
        display: 'block',
        borderColor: theme.palette.type === 'light' ? theme.palette.grey[400] : theme.palette.grey[600]
    },

    /* Styles applied to the root element if `orientation="horizontal"`. */
    lineHorizontal: {
        borderTopStyle: 'solid',
        borderTopWidth: 1
    },

    /* Styles applied to the root element if `orientation="vertical"`. */
    lineVertical: {
        borderLeftStyle: 'solid',
        borderLeftWidth: 1,
        minHeight: 24
    }
  };
})(theme);

export default StepConnectorStyles;
