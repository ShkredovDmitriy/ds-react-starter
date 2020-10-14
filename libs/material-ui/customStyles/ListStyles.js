import theme from "../customTheme/themes";

const ListStyles = ((theme) => {
  return {
    /* Styles applied to the root element. */
    root: {
        listStyle: 'none',
        margin: 0,
        padding: 0,
        position: 'relative'
    },

    /* Styles applied to the root element if `disablePadding={false}`. */
    padding: {
        paddingTop: 8,
        paddingBottom: 8
    },

    /* Styles applied to the root element if dense. */
    dense: {},

    /* Styles applied to the root element if a `subheader` is provided. */
    subheader: {
        paddingTop: 0
    }
  };
})(theme);

export default ListStyles;
