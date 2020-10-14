import theme from "../customTheme/themes";
import { emphasize } from '../customHelpers/colorManipulator';
import _extends from "@babel/runtime/helpers/esm/extends";

const SnackbarContentStyles = ((theme) => {
    const emphasis = theme.palette.type === 'light' ? 0.8 : 0.98;
    const backgroundColor = emphasize(theme.palette.background.default, emphasis);
  return {
    /* Styles applied to the root element. */
    root: _extends({}, theme.typography.body2, {
        color: theme.palette.getContrastText(backgroundColor),
        backgroundColor,
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        padding: '6px 16px',
        borderRadius: theme.shape.borderRadius,
        flexGrow: 1,
        [theme.breakpoints.up('sm')]: {
          flexGrow: 'initial',
          minWidth: 288
        }
      }),
  
      /* Styles applied to the message wrapper element. */
      message: {
        padding: '8px 0'
      },
  
      /* Styles applied to the action wrapper element if `action` is provided. */
      action: {
        display: 'flex',
        alignItems: 'center',
        marginLeft: 'auto',
        paddingLeft: 16,
        marginRight: -8
      }
  };
})(theme);

export default SnackbarContentStyles;
