import theme from "../customTheme/themes";

const StepLabelStyles = ((theme) => {
  return {
    /* Styles applied to the root element. */
    root: {
        display: 'flex',
        alignItems: 'center',
        '&$alternativeLabel': {
        flexDirection: 'column'
        },
        '&$disabled': {
        cursor: 'default'
        }
    },

    /* Styles applied to the root element if `orientation="horizontal". */
    horizontal: {},

    /* Styles applied to the root element if `orientation="vertical". */
    vertical: {},

    /* Styles applied to the `Typography` component which wraps `children`. */
    label: {
        color: theme.palette.text.secondary,
        '&$active': {
        color: theme.palette.text.primary,
        fontWeight: 500
        },
        '&$completed': {
        color: theme.palette.text.primary,
        fontWeight: 500
        },
        '&$alternativeLabel': {
        textAlign: 'center',
        marginTop: 16
        },
        '&$error': {
        color: theme.palette.error.main
        }
    },

    /* Pseudo-class applied to the `Typography` component if `active={true}`. */
    active: {},

    /* Pseudo-class applied to the `Typography` component if `completed={true}`. */
    completed: {},

    /* Pseudo-class applied to the root element and `Typography` component if `error={true}`. */
    error: {},

    /* Pseudo-class applied to the root element and `Typography` component if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the `icon` container element. */
    iconContainer: {
        flexShrink: 0,
        // Fix IE 11 issue
        display: 'flex',
        paddingRight: 8,
        '&$alternativeLabel': {
        paddingRight: 0
        }
    },

    /* Pseudo-class applied to the root and icon container and `Typography` if `alternativeLabel={true}`. */
    alternativeLabel: {},

    /* Styles applied to the container element which wraps `Typography` and `optional`. */
    labelContainer: {
        width: '100%'
    }
  };
})(theme);

export default StepLabelStyles;
