import theme from "../customTheme/themes";
import { darken, lighten } from '../customHelpers/colorManipulator';
const TRANSITION_DURATION = 4; // seconds

const LinearProgressStyles = ((theme) => {
    const getColor = color => theme.palette.type === 'light' ? lighten(color, 0.62) : darken(color, 0.5);

    const backgroundPrimary = getColor(theme.palette.primary.main);
    const backgroundSecondary = getColor(theme.palette.secondary.main);
  return {
    /* Styles applied to the root element. */
    root: {
        position: 'relative',
        overflow: 'hidden',
        height: 4
    },

    /* Styles applied to the root and bar2 element if `color="primary"`; bar2 if `variant="buffer"`. */
    colorPrimary: {
        backgroundColor: backgroundPrimary
    },

    /* Styles applied to the root and bar2 elements if `color="secondary"`; bar2 if `variant="buffer"`. */
    colorSecondary: {
        backgroundColor: backgroundSecondary
    },

    /* Styles applied to the root element if `variant="determinate"`. */
    determinate: {},

    /* Styles applied to the root element if `variant="indeterminate"`. */
    indeterminate: {},

    /* Styles applied to the root element if `variant="buffer"`. */
    buffer: {
        backgroundColor: 'transparent'
    },

    /* Styles applied to the root element if `variant="query"`. */
    query: {
        transform: 'rotate(180deg)'
    },

    /* Styles applied to the additional bar element if `variant="buffer"`. */
    dashed: {
        position: 'absolute',
        marginTop: 0,
        height: '100%',
        width: '100%',
        animation: '$buffer 3s infinite linear'
    },

    /* Styles applied to the additional bar element if `variant="buffer"` and `color="primary"`. */
    dashedColorPrimary: {
        backgroundImage: `radial-gradient(${backgroundPrimary} 0%, ${backgroundPrimary} 16%, transparent 42%)`,
        backgroundSize: '10px 10px',
        backgroundPosition: '0px -23px'
    },

    /* Styles applied to the additional bar element if `variant="buffer"` and `color="secondary"`. */
    dashedColorSecondary: {
        backgroundImage: `radial-gradient(${backgroundSecondary} 0%, ${backgroundSecondary} 16%, transparent 42%)`,
        backgroundSize: '10px 10px',
        backgroundPosition: '0px -23px'
    },

    /* Styles applied to the layered bar1 and bar2 elements. */
    bar: {
        width: '100%',
        position: 'absolute',
        left: 0,
        bottom: 0,
        top: 0,
        transition: 'transform 0.2s linear',
        transformOrigin: 'left'
    },

    /* Styles applied to the bar elements if `color="primary"`; bar2 if `variant` not "buffer". */
    barColorPrimary: {
        backgroundColor: theme.palette.primary.main
    },

    /* Styles applied to the bar elements if `color="secondary"`; bar2 if `variant` not "buffer". */
    barColorSecondary: {
        backgroundColor: theme.palette.secondary.main
    },

    /* Styles applied to the bar1 element if `variant="indeterminate or query"`. */
    bar1Indeterminate: {
        width: 'auto',
        animation: '$indeterminate1 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite'
    },

    /* Styles applied to the bar1 element if `variant="determinate"`. */
    bar1Determinate: {
        transition: `transform .${TRANSITION_DURATION}s linear`
    },

    /* Styles applied to the bar1 element if `variant="buffer"`. */
    bar1Buffer: {
        zIndex: 1,
        transition: `transform .${TRANSITION_DURATION}s linear`
    },

    /* Styles applied to the bar2 element if `variant="indeterminate or query"`. */
    bar2Indeterminate: {
        width: 'auto',
        animation: '$indeterminate2 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite'
    },

    /* Styles applied to the bar2 element if `variant="buffer"`. */
    bar2Buffer: {
        transition: `transform .${TRANSITION_DURATION}s linear`
    },
    // Legends:
    // || represents the viewport
    // -  represents a light background
    // x  represents a dark background
    '@keyframes indeterminate1': {
        //  |-----|---x-||-----||-----|
        '0%': {
        left: '-35%',
        right: '100%'
        },
        //  |-----|-----||-----||xxxx-|
        '60%': {
        left: '100%',
        right: '-90%'
        },
        '100%': {
        left: '100%',
        right: '-90%'
        }
    },
    '@keyframes indeterminate2': {
        //  |xxxxx|xxxxx||-----||-----|
        '0%': {
        left: '-200%',
        right: '100%'
        },
        //  |-----|-----||-----||-x----|
        '60%': {
        left: '107%',
        right: '-8%'
        },
        '100%': {
        left: '107%',
        right: '-8%'
        }
    },
    '@keyframes buffer': {
        '0%': {
        opacity: 1,
        backgroundPosition: '0px -23px'
        },
        '50%': {
        opacity: 0,
        backgroundPosition: '0px -23px'
        },
        '100%': {
        opacity: 1,
        backgroundPosition: '-200px -23px'
        }
    }
  };
})(theme);

export default LinearProgressStyles;
