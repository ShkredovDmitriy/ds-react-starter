import theme from "../customTheme/themes";

const BreadcrumbsStyles = ((theme) => {
  return {
    /* Styles applied to the root element. */
    root: {},

    /* Styles applied to the ol element. */
    ol: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        padding: 0,
        margin: 0,
        listStyle: 'none'
    },

    /* Styles applied to the li element. */
    li: {},

    /* Styles applied to the separator element. */
    separator: {
        display: 'flex',
        userSelect: 'none',
        marginLeft: 8,
        marginRight: 8
    }
  };
})(theme);

export default BreadcrumbsStyles;
