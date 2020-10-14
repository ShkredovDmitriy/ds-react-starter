import theme from "../customTheme/themes";

const GridListTileStyles = ((theme) => {
  return {
    /* Styles applied to the root element. */
    root: {
        boxSizing: 'border-box',
        flexShrink: 0
    },

    /* Styles applied to the `div` element that wraps the children. */
    tile: {
        position: 'relative',
        display: 'block',
        // In case it's not rendered with a div.
        height: '100%',
        overflow: 'hidden'
    },

    /* Styles applied to an `img` element child, if needed to ensure it covers the tile. */
    imgFullHeight: {
        height: '100%',
        transform: 'translateX(-50%)',
        position: 'relative',
        left: '50%'
    },

    /* Styles applied to an `img` element child, if needed to ensure it covers the tile. */
    imgFullWidth: {
        width: '100%',
        position: 'relative',
        transform: 'translateY(-50%)',
        top: '50%'
    }
  };
})(theme);

export default GridListTileStyles;
