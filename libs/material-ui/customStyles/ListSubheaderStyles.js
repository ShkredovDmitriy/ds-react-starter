import theme from "../customTheme/themes";

const ListSubheaderStyles = ((theme) => {
  return {
    /* Styles applied to the root element. */
    root: {
        boxSizing: 'border-box',
        lineHeight: '48px',
        listStyle: 'none',
        color: theme.palette.text.secondary,
        fontFamily: theme.typography.fontFamily,
        fontWeight: theme.typography.fontWeightMedium,
        fontSize: theme.typography.pxToRem(14)
    },

    /* Styles applied to the root element if `color="primary"`. */
    colorPrimary: {
        color: theme.palette.primary.main
    },

    /* Styles applied to the root element if `color="inherit"`. */
    colorInherit: {
        color: 'inherit'
    },

    /* Styles applied to the inner `component` element if `disableGutters={false}`. */
    gutters: {
        paddingLeft: 16,
        paddingRight: 16
    },

    /* Styles applied to the root element if `inset={true}`. */
    inset: {
        paddingLeft: 72
    },

    /* Styles applied to the root element if `disableSticky={false}`. */
    sticky: {
        position: 'sticky',
        top: 0,
        zIndex: 1,
        backgroundColor: 'inherit'
    } 
  };
})(theme);

export default ListSubheaderStyles;
