import theme from "../customTheme/themes";

const ToolbarStyles = ((theme) => {
  return {
    /* Styles applied to the root element. */
    root: {
        width: '100%',
        height: '3.75rem',
        minHeight: 0,
        paddingLeft: 0,
        paddingRight: 0,
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        '@media (orientation: portrait)': {
         height: '2.75rem',
        },'@media (max-width: 570px)': {
          height: '2.5rem',
        },
    },

    /* Styles applied to the root element if `disableGutters={false}`. */
    gutters: {
        paddingLeft: 0,
        paddingRight: 0,
        [theme.breakpoints.up('sm')]: {
        paddingLeft: 0,
        paddingRight: 0
        }
    },

    /* Styles applied to the root element if `variant="regular"`. */
    regular: {
      minHeight: '2.5rem',
    },

    /* Styles applied to the root element if `variant="dense"`. */
    dense: {
        // minHeight: 48
    }
  };
})(theme);

export default ToolbarStyles;
