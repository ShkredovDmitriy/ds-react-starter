import theme from "../customTheme/themes";

const GridListStyles = ((theme) => {
  return {
    /* Styles applied to the root element. */
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        overflowY: 'auto',
        listStyle: 'none',
        padding: 0,
        WebkitOverflowScrolling: 'touch' // Add iOS momentum scrolling.

    }
  };
})(theme);

export default GridListStyles;
