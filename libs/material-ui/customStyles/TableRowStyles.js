import theme from "../customTheme/themes";
import { fade } from '../customHelpers/colorManipulator';

const TableRowStyles = ((theme) => {
  return {
    /* Styles applied to the root element. */
    root: {
        color: 'inherit',
        display: 'table-row',
        verticalAlign: 'middle',
        // We disable the focus ring for mouse, touch and keyboard users.
        outline: 0,
        '&$hover:hover': {
        backgroundColor: theme.palette.action.hover
        },
        '&$selected,&$selected:hover': {
        backgroundColor: fade(theme.palette.secondary.main, theme.palette.action.selectedOpacity)
        }
    },

    /* Pseudo-class applied to the root element if `selected={true}`. */
    selected: {},

    /* Pseudo-class applied to the root element if `hover={true}`. */
    hover: {},

    /* Styles applied to the root element if table variant="head". */
    head: {},

    /* Styles applied to the root element if table variant="footer". */
    footer: {}
  };
})(theme);

export default TableRowStyles;
