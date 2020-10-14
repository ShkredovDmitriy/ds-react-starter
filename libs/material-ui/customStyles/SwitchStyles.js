import theme from "../customTheme/themes";
import { fade } from '../customHelpers/colorManipulator';

const SwitchStyles = ((theme) => {
  return {
    /* Styles applied to the root element. */
    root: {
        display: 'inline-flex',
        width: 34 + 12 * 2,
        height: 14 + 12 * 2,
        overflow: 'hidden',
        padding: 12,
        boxSizing: 'border-box',
        position: 'relative',
        flexShrink: 0,
        zIndex: 0,
        // Reset the stacking context.
        verticalAlign: 'middle' // For correct alignment with the text.

    },

    /* Styles applied to the root element if `edge="start"`. */
    edgeStart: {
        marginLeft: -8
    },

    /* Styles applied to the root element if `edge="end"`. */
    edgeEnd: {
        marginRight: -8
    },

    /* Styles applied to the internal `SwitchBase` component's `root` class. */
    switchBase: {
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 1,
        // Render above the focus ripple.
        color: theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[400],
        transition: theme.transitions.create(['left', 'transform'], {
        duration: theme.transitions.duration.shortest
        }),
        '&$checked': {
        transform: 'translateX(20px)'
        },
        '&$disabled': {
        color: theme.palette.type === 'light' ? theme.palette.grey[400] : theme.palette.grey[800]
        },
        '&$checked + $track': {
        opacity: 0.5
        },
        '&$disabled + $track': {
        opacity: theme.palette.type === 'light' ? 0.12 : 0.1
        }
    },

    /* Styles applied to the internal SwitchBase component's root element if `color="primary"`. */
    colorPrimary: {
        '&$checked': {
        color: theme.palette.primary.main,
        '&:hover': {
            backgroundColor: fade(theme.palette.primary.main, theme.palette.action.hoverOpacity),
            '@media (hover: none)': {
            backgroundColor: 'transparent'
            }
        }
        },
        '&$disabled': {
        color: theme.palette.type === 'light' ? theme.palette.grey[400] : theme.palette.grey[800]
        },
        '&$checked + $track': {
        backgroundColor: theme.palette.primary.main
        },
        '&$disabled + $track': {
        backgroundColor: theme.palette.type === 'light' ? theme.palette.common.black : theme.palette.common.white
        }
    },

    /* Styles applied to the internal SwitchBase component's root element if `color="secondary"`. */
    colorSecondary: {
        '&$checked': {
        color: theme.palette.secondary.main,
        '&:hover': {
            backgroundColor: fade(theme.palette.secondary.main, theme.palette.action.hoverOpacity),
            '@media (hover: none)': {
            backgroundColor: 'transparent'
            }
        }
        },
        '&$disabled': {
        color: theme.palette.type === 'light' ? theme.palette.grey[400] : theme.palette.grey[800]
        },
        '&$checked + $track': {
        backgroundColor: theme.palette.secondary.main
        },
        '&$disabled + $track': {
        backgroundColor: theme.palette.type === 'light' ? theme.palette.common.black : theme.palette.common.white
        }
    },

    /* Styles applied to the root element if `size="small"`. */
    sizeSmall: {
        width: 40,
        height: 24,
        padding: 7,
        '& $thumb': {
        width: 16,
        height: 16
        },
        '& $switchBase': {
        padding: 4,
        '&$checked': {
            transform: 'translateX(16px)'
        }
        }
    },

    /* Pseudo-class applied to the internal `SwitchBase` component's `checked` class. */
    checked: {},

    /* Pseudo-class applied to the internal SwitchBase component's disabled class. */
    disabled: {},

    /* Styles applied to the internal SwitchBase component's input element. */
    input: {
        left: '-100%',
        width: '300%'
    },

    /* Styles used to create the thumb passed to the internal `SwitchBase` component `icon` prop. */
    thumb: {
        boxShadow: theme.shadows[1],
        backgroundColor: 'currentColor',
        width: 20,
        height: 20,
        borderRadius: '50%'
    },

    /* Styles applied to the track element. */
    track: {
        height: '100%',
        width: '100%',
        borderRadius: 14 / 2,
        zIndex: -1,
        transition: theme.transitions.create(['opacity', 'background-color'], {
        duration: theme.transitions.duration.shortest
        }),
        backgroundColor: theme.palette.type === 'light' ? theme.palette.common.black : theme.palette.common.white,
        opacity: theme.palette.type === 'light' ? 0.38 : 0.3
    }
  };
})(theme);

export default SwitchStyles;
