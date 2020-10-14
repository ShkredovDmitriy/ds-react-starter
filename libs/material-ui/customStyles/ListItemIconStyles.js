import theme from "../customTheme/themes";

const ListItemIconStyles = ((theme) => {
  return {
    /* Styles applied to the root element. */
    root: {
        minWidth: 56,
        color: theme.palette.action.active,
        flexShrink: 0,
        display: 'inline-flex'
    },

    /* Styles applied to the root element when the parent `ListItem` uses `alignItems="flex-start"`. */
    alignItemsFlexStart: {
        marginTop: 8
    }
  };
})(theme);

export default ListItemIconStyles;
