import theme from "../customTheme/themes";
import { fade } from '../customHelpers/colorManipulator';

const CheckboxStyles = ((theme) => {
  return {
    /* Styles applied to the root element. */
    root: {
        color: theme.palette.text.secondary
    },

    /* Pseudo-class applied to the root element if `checked={true}`. */
    checked: {},

    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Pseudo-class applied to the root element if `indeterminate={true}`. */
    indeterminate: {},

    /* Styles applied to the root element if `color="primary"`. */
    colorPrimary: {
        '&$checked': {
        color: theme.palette.primary.main,
        '&:hover': {
            backgroundColor: fade(theme.palette.primary.main, theme.palette.action.hoverOpacity),
            // Reset on touch devices, it doesn't add specificity
            '@media (hover: none)': {
            backgroundColor: 'transparent'
            }
        }
        },
        '&$disabled': {
        color: theme.palette.action.disabled
        }
    },

    /* Styles applied to the root element if `color="secondary"`. */
    colorSecondary: {
        '&$checked': {
        color: theme.palette.secondary.main,
        '&:hover': {
            backgroundColor: fade(theme.palette.secondary.main, theme.palette.action.hoverOpacity),
            // Reset on touch devices, it doesn't add specificity
            '@media (hover: none)': {
            backgroundColor: 'transparent'
            }
        }
        },
        '&$disabled': {
        color: theme.palette.action.disabled
        }
    }
  };
})(theme);

export default CheckboxStyles;
