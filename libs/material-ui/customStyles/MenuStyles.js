import theme from "../customTheme/themes";

const MenuStyles = ((theme) => {
  return {
    /* Styles applied to the `Paper` component. */
    paper: {
        // specZ: The maximum height of a simple menu should be one or more rows less than the view
        // height. This ensures a tapable area outside of the simple menu with which to dismiss
        // the menu.
        maxHeight: 'calc(100% - 96px)',
        // Add iOS momentum scrolling.
        WebkitOverflowScrolling: 'touch'
    },

    /* Styles applied to the `List` component via `MenuList`. */
    list: {
        // We disable the focus ring for mouse, touch and keyboard users.
        outline: 0
    }
  };
})(theme);

export default MenuStyles;
