import theme from "../customTheme/themes";

const ListItemTextStyles = ((theme) => {
  return {
    /* Styles applied to the root element. */
    root: {
        flex: '1 1 auto',
        minWidth: 0,
        marginTop: 4,
        marginBottom: 4
    },

    /* Styles applied to the `Typography` components if primary and secondary are set. */
    multiline: {
        marginTop: 6,
        marginBottom: 6
    },

    /* Styles applied to the `Typography` components if dense. */
    dense: {},

    /* Styles applied to the root element if `inset={true}`. */
    inset: {
        paddingLeft: 56
    },

    /* Styles applied to the primary `Typography` component. */
    primary: {},

    /* Styles applied to the secondary `Typography` component. */
    secondary: {}
  };
})(theme);

export default ListItemTextStyles;
