import theme from "../customTheme/themes";

const PopoverStyles = ((theme) => {
  return {
    /* Styles applied to the root element */
    root: {},

    /* Styles applied to the `Paper` component. */
    paper: {
        position: 'absolute',
        overflowY: 'auto',
        overflowX: 'hidden',
        // So we see the popover when it's empty.
        // It's most likely on issue on userland.
        minWidth: 16,
        minHeight: 16,
        maxWidth: 'calc(100% - 32px)',
        maxHeight: 'calc(100% - 32px)',
        // We disable the focus ring for mouse, touch and keyboard users.
        outline: 0
    } 
  };
})(theme);

export default PopoverStyles;
