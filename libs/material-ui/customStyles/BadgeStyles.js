import theme from "../customTheme/themes";
const RADIUS_STANDARD = 10;
const RADIUS_DOT = 4;

const BadgeStyles = ((theme) => {
  return {
    root: {
      position: 'relative',
      display: 'inline-flex',
      // For correct alignment with the text.
      verticalAlign: 'middle',
      flexShrink: 0
    },
  
    /* Styles applied to the badge `span` element. */
    badge: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      boxSizing: 'border-box',
      fontFamily: theme.typography.fontFamily,
      fontWeight: theme.typography.fontWeightMedium,
      fontSize: theme.typography.pxToRem(12),
      minWidth: RADIUS_STANDARD * 2,
      lineHeight: 1,
      padding: '0 6px',
      height: RADIUS_STANDARD * 2,
      borderRadius: RADIUS_STANDARD,
      zIndex: 1,
      // Render the badge on top of potential ripples.
      transition: theme.transitions.create('transform', {
        easing: theme.transitions.easing.easeInOut,
        duration: theme.transitions.duration.enteringScreen
      })
    },
  
    /* Styles applied to the root element if `color="primary"`. */
    colorPrimary: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText
    },
  
    /* Styles applied to the root element if `color="secondary"`. */
    colorSecondary: {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText
    },
  
    /* Styles applied to the root element if `color="error"`. */
    colorError: {
      backgroundColor: theme.palette.error.main,
      color: theme.palette.error.contrastText
    },
  
    /* Styles applied to the root element if `variant="dot"`. */
    dot: {
      borderRadius: RADIUS_DOT,
      height: RADIUS_DOT * 2,
      minWidth: RADIUS_DOT * 2,
      padding: 0
    },
  
    /* Styles applied to the root element if `anchorOrigin={{ 'top', 'right' }} overlap="rectangle"`. */
    anchorOriginTopRightRectangle: {
      top: 0,
      right: 0,
      transform: 'scale(1) translate(50%, -50%)',
      transformOrigin: '100% 0%',
      '&$invisible': {
        transform: 'scale(0) translate(50%, -50%)'
      }
    },
  
    /* Styles applied to the root element if `anchorOrigin={{ 'bottom', 'right' }} overlap="rectangle"`. */
    anchorOriginBottomRightRectangle: {
      bottom: 0,
      right: 0,
      transform: 'scale(1) translate(50%, 50%)',
      transformOrigin: '100% 100%',
      '&$invisible': {
        transform: 'scale(0) translate(50%, 50%)'
      }
    },
  
    /* Styles applied to the root element if `anchorOrigin={{ 'top', 'left' }} overlap="rectangle"`. */
    anchorOriginTopLeftRectangle: {
      top: 0,
      left: 0,
      transform: 'scale(1) translate(-50%, -50%)',
      transformOrigin: '0% 0%',
      '&$invisible': {
        transform: 'scale(0) translate(-50%, -50%)'
      }
    },
  
    /* Styles applied to the root element if `anchorOrigin={{ 'bottom', 'left' }} overlap="rectangle"`. */
    anchorOriginBottomLeftRectangle: {
      bottom: 0,
      left: 0,
      transform: 'scale(1) translate(-50%, 50%)',
      transformOrigin: '0% 100%',
      '&$invisible': {
        transform: 'scale(0) translate(-50%, 50%)'
      }
    },
  
    /* Styles applied to the root element if `anchorOrigin={{ 'top', 'right' }} overlap="circle"`. */
    anchorOriginTopRightCircle: {
      top: '14%',
      right: '14%',
      transform: 'scale(1) translate(50%, -50%)',
      transformOrigin: '100% 0%',
      '&$invisible': {
        transform: 'scale(0) translate(50%, -50%)'
      }
    },
  
    /* Styles applied to the root element if `anchorOrigin={{ 'bottom', 'right' }} overlap="circle"`. */
    anchorOriginBottomRightCircle: {
      bottom: '14%',
      right: '14%',
      transform: 'scale(1) translate(50%, 50%)',
      transformOrigin: '100% 100%',
      '&$invisible': {
        transform: 'scale(0) translate(50%, 50%)'
      }
    },
  
    /* Styles applied to the root element if `anchorOrigin={{ 'top', 'left' }} overlap="circle"`. */
    anchorOriginTopLeftCircle: {
      top: '14%',
      left: '14%',
      transform: 'scale(1) translate(-50%, -50%)',
      transformOrigin: '0% 0%',
      '&$invisible': {
        transform: 'scale(0) translate(-50%, -50%)'
      }
    },
  
    /* Styles applied to the root element if `anchorOrigin={{ 'bottom', 'left' }} overlap="circle"`. */
    anchorOriginBottomLeftCircle: {
      bottom: '14%',
      left: '14%',
      transform: 'scale(1) translate(-50%, 50%)',
      transformOrigin: '0% 100%',
      '&$invisible': {
        transform: 'scale(0) translate(-50%, 50%)'
      }
    },
  
    /* Pseudo-class to the badge `span` element if `invisible={true}`. */
    invisible: {
      transition: theme.transitions.create('transform', {
        easing: theme.transitions.easing.easeInOut,
        duration: theme.transitions.duration.leavingScreen
      })
    }
  };
})(theme);

export default BadgeStyles;
