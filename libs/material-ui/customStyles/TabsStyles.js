import theme from "../customTheme/themes";

const TabsStyles = ((theme) => {
  return {
    /* Styles applied to the root element. */
    root: {
        overflow: 'hidden',
        minHeight: 48,
        WebkitOverflowScrolling: 'touch',
        // Add iOS momentum scrolling.
        display: 'flex'
    },

    /* Styles applied to the root element if `orientation="vertical"`. */
    vertical: {
        flexDirection: 'column'
    },

    /* Styles applied to the flex container element. */
    flexContainer: {
        display: 'flex'
    },

    /* Styles applied to the flex container element if `orientation="vertical"`. */
    flexContainerVertical: {
        flexDirection: 'column'
    },

    /* Styles applied to the flex container element if `centered={true}` & `!variant="scrollable"`. */
    centered: {
        justifyContent: 'center'
    },

    /* Styles applied to the tablist element. */
    scroller: {
        position: 'relative',
        display: 'inline-block',
        flex: '1 1 auto',
        whiteSpace: 'nowrap'
    },

    /* Styles applied to the tablist element if `!variant="scrollable"`. */
    fixed: {
        overflowX: 'hidden',
        width: '100%'
    },

    /* Styles applied to the tablist element if `variant="scrollable"`. */
    scrollable: {
        overflowX: 'scroll',
        // Hide dimensionless scrollbar on MacOS
        scrollbarWidth: 'none',
        // Firefox
        '&::-webkit-scrollbar': {
        display: 'none' // Safari + Chrome

        }
    },

    /* Styles applied to the `ScrollButtonComponent` component. */
    scrollButtons: {},

    /* Styles applied to the `ScrollButtonComponent` component if `scrollButtons="auto"` or scrollButtons="desktop"`. */
    scrollButtonsDesktop: {
        [theme.breakpoints.down('xs')]: {
        display: 'none'
        }
    },

    /* Styles applied to the `TabIndicator` component. */
    indicator: {}
  };
})(theme);

export default TabsStyles;
