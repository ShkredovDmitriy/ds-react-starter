import theme from "../customTheme/themes";
import { fade } from '../customHelpers/colorManipulator';

const DividerStyles = ((theme) => {
  return {
    /* Styles applied to the root element. */
    root: {
        height: 1,
        margin: 0,
        // Reset browser default style.
        border: 'none',
        flexShrink: 0,
        backgroundColor: theme.palette.divider
    },

    /* Styles applied to the root element if `absolute={true}`. */
    absolute: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%'
    },

    /* Styles applied to the root element if `variant="inset"`. */
    inset: {
        marginLeft: 72
    },

    /* Styles applied to the root element if `light={true}`. */
    light: {
        backgroundColor: fade(theme.palette.divider, 0.08)
    },

    /* Styles applied to the root element if `variant="middle"`. */
    middle: {
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2)
    },

    /* Styles applied to the root element if `orientation="vertical"`. */
    vertical: {
        height: '100%',
        width: 1
    },

    /* Styles applied to the root element if `flexItem={true}`. */
    flexItem: {
        alignSelf: 'stretch',
        height: 'auto'
    }
  };
})(theme);

export default DividerStyles;
