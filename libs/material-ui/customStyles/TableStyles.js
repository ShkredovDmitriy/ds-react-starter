import theme from "../customTheme/themes";
import _extends from "@babel/runtime/helpers/esm/extends";

const TableStyles = ((theme) => {
  return {
    /* Styles applied to the root element. */
    root: {
        display: 'table',
        width: '100%',
        borderCollapse: 'collapse',
        borderSpacing: 0,
        '& caption': _extends({}, theme.typography.body2, {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
        textAlign: 'left',
        captionSide: 'bottom'
        })
    },

    /* Styles applied to the root element if `stickyHeader={true}`. */
    stickyHeader: {
        borderCollapse: 'separate'
    }
  };
})(theme);

export default TableStyles;
