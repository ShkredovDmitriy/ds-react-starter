import theme from "../customTheme/themes";

const BackdropStyles =  {
    /* Styles applied to the root element. */
    root: {
      // Improve scrollable dialog support.
      zIndex: -1,
      position: 'fixed',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      right: 0,
      bottom: 0,
      top: 0,
      left: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      WebkitTapHighlightColor: 'transparent'
    },
  
    /* Styles applied to the root element if `invisible={true}`. */
    invisible: {
      backgroundColor: 'transparent'
    }
  };

export default BackdropStyles;
