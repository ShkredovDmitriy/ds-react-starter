import theme from "../customTheme/themes";

const ListItemStyles = ((theme) => {
  return {
    /* Styles applied to the (normally root) `component` element. May be wrapped by a `container`. */
    root: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        position: 'relative',
        textDecoration: 'none',
        width: '100%',
        boxSizing: 'border-box',
        textAlign: 'left',
        paddingTop: 8,
        paddingBottom: 8,
        '&$focusVisible': {
        backgroundColor: theme.palette.action.selected
        },
        '&$selected, &$selected:hover': {
        backgroundColor: theme.palette.action.selected
        },
        '&$disabled': {
        opacity: 0.5
        }
    },

    /* Styles applied to the `container` element if `children` includes `ListItemSecondaryAction`. */
    container: {
        position: 'relative'
    },

    /* Pseudo-class applied to the `component`'s `focusVisibleClassName` prop if `button={true}`. */
    focusVisible: {},

    /* Styles applied to the `component` element if dense. */
    dense: {
        paddingTop: 4,
        paddingBottom: 4
    },

    /* Styles applied to the `component` element if `alignItems="flex-start"`. */
    alignItemsFlexStart: {
        alignItems: 'flex-start'
    },

    /* Pseudo-class applied to the inner `component` element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the inner `component` element if `divider={true}`. */
    divider: {
        borderBottom: `1px solid ${theme.palette.divider}`,
        backgroundClip: 'padding-box'
    },

    /* Styles applied to the inner `component` element if `disableGutters={false}`. */
    gutters: {
        paddingLeft: 16,
        paddingRight: 16
    },

    /* Styles applied to the inner `component` element if `button={true}`. */
    button: {
        transition: theme.transitions.create('background-color', {
        duration: theme.transitions.duration.shortest
        }),
        '&:hover': {
        textDecoration: 'none',
        backgroundColor: theme.palette.action.hover,
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
            backgroundColor: 'transparent'
        }
        }
    },

    /* Styles applied to the `component` element if `children` includes `ListItemSecondaryAction`. */
    secondaryAction: {
        // Add some space to avoid collision as `ListItemSecondaryAction`
        // is absolutely positioned.
        paddingRight: 48
    },

    /* Pseudo-class applied to the root element if `selected={true}`. */
    selected: {}
  };
})(theme);

export default ListItemStyles;
