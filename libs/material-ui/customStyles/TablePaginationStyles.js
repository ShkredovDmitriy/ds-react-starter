import theme from "../customTheme/themes";

const TablePaginationStyles = ((theme) => {
  return {
    /* Styles applied to the root element. */
    root: {
        color: theme.palette.text.primary,
        fontSize: theme.typography.pxToRem(14),
        overflow: 'auto',
        // Increase the specificity to override TableCell.
        '&:last-child': {
        padding: 0
        }
    },

    /* Styles applied to the Toolbar component. */
    toolbar: {
        minHeight: 52,
        paddingRight: 2
    },

    /* Styles applied to the spacer element. */
    spacer: {
        flex: '1 1 100%'
    },

    /* Styles applied to the caption Typography components if `variant="caption"`. */
    caption: {
        flexShrink: 0
    },

    /* Styles applied to the Select component root element. */
    selectRoot: {
        // `.selectRoot` should be merged with `.input` in v5.
        marginRight: 32,
        marginLeft: 8
    },

    /* Styles applied to the Select component `select` class. */
    select: {
        paddingLeft: 8,
        paddingRight: 24,
        textAlign: 'right',
        textAlignLast: 'right' // Align <select> on Chrome.

    },
    // TODO v5: remove

    /* Styles applied to the Select component `icon` class. */
    selectIcon: {},

    /* Styles applied to the `InputBase` component. */
    input: {
        color: 'inherit',
        fontSize: 'inherit',
        flexShrink: 0
    },

    /* Styles applied to the MenuItem component. */
    menuItem: {},

    /* Styles applied to the internal `TablePaginationActions` component. */
    actions: {
        flexShrink: 0,
        marginLeft: 20
    }
  };
})(theme);

export default TablePaginationStyles;
