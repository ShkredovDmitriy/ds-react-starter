import theme from "../customTheme/themes";

const ListItemAvatarStyles = ((theme) => {
  return {
    /* Styles applied to the root element. */
    root: {
        minWidth: 56,
        flexShrink: 0
    },

    /* Styles applied to the root element when the parent `ListItem` uses `alignItems="flex-start"`. */
    alignItemsFlexStart: {
        marginTop: 8
    }
  };
})(theme);

export default ListItemAvatarStyles;
