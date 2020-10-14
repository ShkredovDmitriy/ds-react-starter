import theme from "../customTheme/themes";

const BottomNavigationActionStyles = ((theme) => {
  return {
    /* Styles applied to the root element. */
    root: {
        transition: theme.transitions.create(['color', 'padding-top'], {
        duration: theme.transitions.duration.short
        }),
        padding: '6px 12px 8px',
        minWidth: 80,
        maxWidth: 168,
        color: theme.palette.text.secondary,
        flex: '1',
        '&$iconOnly': {
        paddingTop: 16
        },
        '&$selected': {
        paddingTop: 6,
        color: theme.palette.primary.main
        }
    },

    /* Pseudo-class applied to the root element if selected. */
    selected: {},

    /* Pseudo-class applied to the root element if `showLabel={false}` and not selected. */
    iconOnly: {},

    /* Styles applied to the span element that wraps the icon and label. */
    wrapper: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        flexDirection: 'column'
    },

    /* Styles applied to the label's span element. */
    label: {
        fontFamily: theme.typography.fontFamily,
        fontSize: theme.typography.pxToRem(12),
        opacity: 1,
        transition: 'font-size 0.2s, opacity 0.2s',
        transitionDelay: '0.1s',
        '&$iconOnly': {
        opacity: 0,
        transitionDelay: '0s'
        },
        '&$selected': {
        fontSize: theme.typography.pxToRem(14)
        }
    }
  };
})(theme);

export default BottomNavigationActionStyles;
