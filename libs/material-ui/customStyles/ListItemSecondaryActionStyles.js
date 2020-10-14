import theme from "../customTheme/themes";

const ListItemSecondaryActionStyles = ((theme) => {
  return {
    /* Styles applied to the root element. */
    root: {
        position: 'absolute',
        right: 16,
        top: '50%',
        transform: 'translateY(-50%)'
    }
  };
})(theme);

export default ListItemSecondaryActionStyles;
