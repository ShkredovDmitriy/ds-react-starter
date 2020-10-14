import theme from "../customTheme/themes";

const DrawerStyles = ((theme) => {
  return {
    /* Styles applied to the root element. */
    root: {},

    /* Styles applied to the root element if `variant="permanent or persistent"`. */
    docked: {
        flex: '0 0 auto'
    },

    /* Styles applied to the `Paper` component. */
    paper: {
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        flex: '1 0 auto',
        zIndex: theme.zIndex.drawer,
        WebkitOverflowScrolling: 'touch',
        // Add iOS momentum scrolling.
        // temporary style
        position: 'fixed',
        top: 0,
        // We disable the focus ring for mouse, touch and keyboard users.
        // At some point, it would be better to keep it for keyboard users.
        // :focus-ring CSS pseudo-class will help.
        outline: 0
    },

    /* Styles applied to the `Paper` component if `anchor="left"`. */
    paperAnchorLeft: {
        left: 0,
        right: 'auto'
    },

    /* Styles applied to the `Paper` component if `anchor="right"`. */
    paperAnchorRight: {
        left: 'auto',
        right: 0
    },

    /* Styles applied to the `Paper` component if `anchor="top"`. */
    paperAnchorTop: {
        top: 0,
        left: 0,
        bottom: 'auto',
        right: 0,
        height: 'auto',
        maxHeight: '100%'
    },

    /* Styles applied to the `Paper` component if `anchor="bottom"`. */
    paperAnchorBottom: {
        top: 'auto',
        left: 0,
        bottom: 0,
        right: 0,
        height: 'auto',
        maxHeight: '100%'
    },

    /* Styles applied to the `Paper` component if `anchor="left"` and `variant` is not "temporary". */
    paperAnchorDockedLeft: {
        borderRight: `1px solid ${theme.palette.divider}`
    },

    /* Styles applied to the `Paper` component if `anchor="top"` and `variant` is not "temporary". */
    paperAnchorDockedTop: {
        borderBottom: `1px solid ${theme.palette.divider}`
    },

    /* Styles applied to the `Paper` component if `anchor="right"` and `variant` is not "temporary". */
    paperAnchorDockedRight: {
        borderLeft: `1px solid ${theme.palette.divider}`
    },

    /* Styles applied to the `Paper` component if `anchor="bottom"` and `variant` is not "temporary". */
    paperAnchorDockedBottom: {
        borderTop: `1px solid ${theme.palette.divider}`
    },

    /* Styles applied to the `Modal` component. */
    modal: {} 
  };
})(theme);

export default DrawerStyles;
