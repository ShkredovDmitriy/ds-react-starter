import theme from "../customTheme/themes";
import _extends from "@babel/runtime/helpers/esm/extends";

const MenuItemStyles = ((theme) => {
  return {
    /* Styles applied to the root element. */
    root: _extends({}, theme.typography.body1, {
        minHeight: 48,
        paddingTop: 6,
        paddingBottom: 6,
        boxSizing: 'border-box',
        width: 'auto',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        [theme.breakpoints.up('sm')]: {
        minHeight: 'auto'
        }
    }),
    // TODO v5: remove

    /* Styles applied to the root element if `disableGutters={false}`. */
    gutters: {},

    /* Styles applied to the root element if `selected={true}`. */
    selected: {},

    /* Styles applied to the root element if dense. */
    dense: _extends({}, theme.typography.body2, {
        minHeight: 'auto'
    })
  };
})(theme);

export default MenuItemStyles;
