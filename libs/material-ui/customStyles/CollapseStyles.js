import theme from "../customTheme/themes";

const CollapseStyles = ((theme) => {
  return {
    /* Styles applied to the container element. */
    container: {
        height: 0,
        overflow: 'hidden',
        transition: theme.transitions.create('height')
    },

    /* Styles applied to the container element when the transition has entered. */
    entered: {
        height: 'auto',
        overflow: 'visible'
    },

    /* Styles applied to the container element when the transition has exited and `collapsedHeight` != 0px. */
    hidden: {
        visibility: 'hidden'
    },

    /* Styles applied to the outer wrapper element. */
    wrapper: {
        // Hack to get children with a negative margin to not falsify the height computation.
        display: 'flex'
    },

    /* Styles applied to the inner wrapper element. */
    wrapperInner: {
        width: '100%'
    }
  };
})(theme);

export default CollapseStyles;
