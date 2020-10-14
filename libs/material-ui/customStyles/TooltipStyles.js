import theme from "../customTheme/themes";
import { fade } from '../customHelpers/colorManipulator';

function round(value) {
    return Math.round(value * 1e5) / 1e5;
}

function arrowGenerator() {
    return {
      '&[x-placement*="bottom"] $arrow': {
        flip: false,
        top: 0,
        left: 0,
        marginTop: '-0.95em',
        marginLeft: 4,
        marginRight: 4,
        width: '2em',
        height: '1em',
        '&::before': {
          flip: false,
          borderWidth: '0 1em 1em 1em',
          borderColor: 'transparent transparent currentcolor transparent'
        }
      },
      '&[x-placement*="top"] $arrow': {
        flip: false,
        bottom: 0,
        left: 0,
        marginBottom: '-0.95em',
        marginLeft: 4,
        marginRight: 4,
        width: '2em',
        height: '1em',
        '&::before': {
          flip: false,
          borderWidth: '1em 1em 0 1em',
          borderColor: 'currentcolor transparent transparent transparent'
        }
      },
      '&[x-placement*="right"] $arrow': {
        flip: false,
        left: 0,
        marginLeft: '-0.95em',
        marginTop: 4,
        marginBottom: 4,
        height: '2em',
        width: '1em',
        '&::before': {
          flip: false,
          borderWidth: '1em 1em 1em 0',
          borderColor: 'transparent currentcolor transparent transparent'
        }
      },
      '&[x-placement*="left"] $arrow': {
        flip: false,
        right: 0,
        marginRight: '-0.95em',
        marginTop: 4,
        marginBottom: 4,
        height: '2em',
        width: '1em',
        '&::before': {
          flip: false,
          borderWidth: '1em 0 1em 1em',
          borderColor: 'transparent transparent transparent currentcolor'
        }
      }
    };
}

const TooltipStyles = ((theme) => {
  return {
    /* Styles applied to the Popper component. */
    popper: {
        zIndex: theme.zIndex.tooltip,
        pointerEvents: 'none',
        flip: false // disable jss-rtl plugin

    },

    /* Styles applied to the Popper component if `interactive={true}`. */
    popperInteractive: {
        pointerEvents: 'auto'
    },

    /* Styles applied to the Popper component if `arrow={true}`. */
    popperArrow: arrowGenerator(),

    /* Styles applied to the tooltip (label wrapper) element. */
    tooltip: {
        backgroundColor: fade(theme.palette.grey[700], 0.9),
        borderRadius: theme.shape.borderRadius,
        color: theme.palette.common.white,
        fontFamily: theme.typography.fontFamily,
        padding: '4px 8px',
        fontSize: theme.typography.pxToRem(10),
        lineHeight: `${round(14 / 10)}em`,
        maxWidth: 300,
        wordWrap: 'break-word',
        fontWeight: theme.typography.fontWeightMedium
    },

    /* Styles applied to the tooltip (label wrapper) element if `arrow={true}`. */
    tooltipArrow: {
        position: 'relative',
        margin: '0'
    },

    /* Styles applied to the arrow element. */
    arrow: {
        position: 'absolute',
        fontSize: 6,
        color: fade(theme.palette.grey[700], 0.9),
        '&::before': {
        content: '""',
        margin: 'auto',
        display: 'block',
        width: 0,
        height: 0,
        borderStyle: 'solid'
        }
    },

    /* Styles applied to the tooltip (label wrapper) element if the tooltip is opened by touch. */
    touch: {
        padding: '8px 16px',
        fontSize: theme.typography.pxToRem(14),
        lineHeight: `${round(16 / 14)}em`,
        fontWeight: theme.typography.fontWeightRegular
    },

    /* Styles applied to the tooltip (label wrapper) element if `placement` contains "left". */
    tooltipPlacementLeft: {
        transformOrigin: 'right center',
        margin: '0 24px ',
        [theme.breakpoints.up('sm')]: {
        margin: '0 14px'
        }
    },

    /* Styles applied to the tooltip (label wrapper) element if `placement` contains "right". */
    tooltipPlacementRight: {
        transformOrigin: 'left center',
        margin: '0 24px',
        [theme.breakpoints.up('sm')]: {
        margin: '0 14px'
        }
    },

    /* Styles applied to the tooltip (label wrapper) element if `placement` contains "top". */
    tooltipPlacementTop: {
        transformOrigin: 'center bottom',
        margin: '24px 0',
        [theme.breakpoints.up('sm')]: {
        margin: '14px 0'
        }
    },

    /* Styles applied to the tooltip (label wrapper) element if `placement` contains "bottom". */
    tooltipPlacementBottom: {
        transformOrigin: 'center top',
        margin: '24px 0',
        [theme.breakpoints.up('sm')]: {
        margin: '14px 0'
        }
    }
  };
})(theme);

export default TooltipStyles;
