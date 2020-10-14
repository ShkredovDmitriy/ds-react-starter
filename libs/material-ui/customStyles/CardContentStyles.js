import theme from "../customTheme/themes";

const CardContentStyles = ((theme) => {
  return {
    /* Styles applied to the root element. */
    root: {
        padding: 16,
        '&:last-child': {
        paddingBottom: 24
        }
    }
  };
})(theme);

export default CardContentStyles;
