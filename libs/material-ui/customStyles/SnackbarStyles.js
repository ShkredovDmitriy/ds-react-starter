import theme from "../customTheme/themes";
import _extends from "@babel/runtime/helpers/esm/extends";

const SnackbarStyles = ((theme) => {
    const top1 = {
        top: 8
      };
      const bottom1 = {
        bottom: 8
      };
      const right = {
        justifyContent: 'flex-end'
      };
      const left = {
        justifyContent: 'flex-start'
      };
      const top3 = {
        top: 24
      };
      const bottom3 = {
        bottom: 24
      };
      const right3 = {
        right: 24
      };
      const left3 = {
        left: 24
      };
      const center = {
        left: '50%',
        right: 'auto',
        transform: 'translateX(-50%)'
      };
  return {
    /* Styles applied to the root element. */
    root: {
        zIndex: theme.zIndex.snackbar,
        position: 'fixed',
        display: 'flex',
        left: 8,
        right: 8,
        justifyContent: 'center',
        alignItems: 'center'
      },
  
      /* Styles applied to the root element if `anchorOrigin={{ 'top', 'center' }}`. */
      anchorOriginTopCenter: _extends({}, top1, {
        [theme.breakpoints.up('sm')]: _extends({}, top3, {}, center)
      }),
  
      /* Styles applied to the root element if `anchorOrigin={{ 'bottom', 'center' }}`. */
      anchorOriginBottomCenter: _extends({}, bottom1, {
        [theme.breakpoints.up('sm')]: _extends({}, bottom3, {}, center)
      }),
  
      /* Styles applied to the root element if `anchorOrigin={{ 'top', 'right' }}`. */
      anchorOriginTopRight: _extends({}, top1, {}, right, {
        [theme.breakpoints.up('sm')]: _extends({
          left: 'auto'
        }, top3, {}, right3)
      }),
  
      /* Styles applied to the root element if `anchorOrigin={{ 'bottom', 'right' }}`. */
      anchorOriginBottomRight: _extends({}, bottom1, {}, right, {
        [theme.breakpoints.up('sm')]: _extends({
          left: 'auto'
        }, bottom3, {}, right3)
      }),
  
      /* Styles applied to the root element if `anchorOrigin={{ 'top', 'left' }}`. */
      anchorOriginTopLeft: _extends({}, top1, {}, left, {
        [theme.breakpoints.up('sm')]: _extends({
          right: 'auto'
        }, top3, {}, left3)
      }),
  
      /* Styles applied to the root element if `anchorOrigin={{ 'bottom', 'left' }}`. */
      anchorOriginBottomLeft: _extends({}, bottom1, {}, left, {
        [theme.breakpoints.up('sm')]: _extends({
          right: 'auto'
        }, bottom3, {}, left3)
      })
  };
})(theme);

export default SnackbarStyles;
