import theme from "../customTheme/themes";
import { fade } from '../customHelpers/colorManipulator';

const ButtonGroupStyles = ((theme) => {
  return {
    /* Styles applied to the root element. */
    root: {
        display: 'inline-flex',
        borderRadius: theme.shape.borderRadius
    },

    /* Styles applied to the root element if `variant="contained"`. */
    contained: {
        boxShadow: theme.shadows[2]
    },

    /* Pseudo-class applied to child elements if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the root element if `fullWidth={true}`. */
    fullWidth: {
        width: '100%'
    },

    /* Styles applied to the root element if `orientation="vertical"`. */
    vertical: {
        flexDirection: 'column'
    },

    /* Styles applied to the children. */
    grouped: {
        minWidth: 40
    },

    /* Styles applied to the children if `orientation="horizontal"`. */
    groupedHorizontal: {
        '&:not(:first-child)': {
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0
        },
        '&:not(:last-child)': {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0
        }
    },

    /* Styles applied to the children if `orientation="vertical"`. */
    groupedVertical: {
        '&:not(:first-child)': {
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0
        },
        '&:not(:last-child)': {
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0
        }
    },

    /* Styles applied to the children if `variant="text"`. */
    groupedText: {},

    /* Styles applied to the children if `variant="text"` and `orientation="horizontal"`. */
    groupedTextHorizontal: {
        '&:not(:last-child)': {
        borderRight: `1px solid ${theme.palette.type === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)'}`
        }
    },

    /* Styles applied to the children if `variant="text"` and `orientation="vertical"`. */
    groupedTextVertical: {
        '&:not(:last-child)': {
        borderBottom: `1px solid ${theme.palette.type === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)'}`
        }
    },

    /* Styles applied to the children if `variant="text"` and `color="primary"`. */
    groupedTextPrimary: {
        '&:not(:last-child)': {
        borderColor: fade(theme.palette.primary.main, 0.5)
        }
    },

    /* Styles applied to the children if `variant="text"` and `color="secondary"`. */
    groupedTextSecondary: {
        '&:not(:last-child)': {
        borderColor: fade(theme.palette.secondary.main, 0.5)
        }
    },

    /* Styles applied to the children if `variant="outlined"`. */
    groupedOutlined: {},

    /* Styles applied to the children if `variant="outlined"` and `orientation="horizontal"`. */
    groupedOutlinedHorizontal: {
        '&:not(:first-child)': {
        marginLeft: -1
        },
        '&:not(:last-child)': {
        borderRightColor: 'transparent'
        }
    },

    /* Styles applied to the children if `variant="outlined"` and `orientation="vertical"`. */
    groupedOutlinedVertical: {
        '&:not(:first-child)': {
        marginTop: -1
        },
        '&:not(:last-child)': {
        borderBottomColor: 'transparent'
        }
    },

    /* Styles applied to the children if `variant="outlined"` and `color="primary"`. */
    groupedOutlinedPrimary: {
        '&:hover': {
        borderColor: theme.palette.primary.main
        }
    },

    /* Styles applied to the children if `variant="outlined"` and `color="secondary"`. */
    groupedOutlinedSecondary: {
        '&:hover': {
        borderColor: theme.palette.secondary.main
        }
    },

    /* Styles applied to the children if `variant="contained"`. */
    groupedContained: {
        boxShadow: 'none'
    },

    /* Styles applied to the children if `variant="contained"` and `orientation="horizontal"`. */
    groupedContainedHorizontal: {
        '&:not(:last-child)': {
        borderRight: `1px solid ${theme.palette.grey[400]}`,
        '&$disabled': {
            borderRight: `1px solid ${theme.palette.action.disabled}`
        }
        }
    },

    /* Styles applied to the children if `variant="contained"` and `orientation="vertical"`. */
    groupedContainedVertical: {
        '&:not(:last-child)': {
        borderBottom: `1px solid ${theme.palette.grey[400]}`,
        '&$disabled': {
            borderBottom: `1px solid ${theme.palette.action.disabled}`
        }
        }
    },

    /* Styles applied to the children if `variant="contained"` and `color="primary"`. */
    groupedContainedPrimary: {
        '&:not(:last-child)': {
        borderColor: theme.palette.primary.dark
        }
    },

    /* Styles applied to the children if `variant="contained"` and `color="secondary"`. */
    groupedContainedSecondary: {
        '&:not(:last-child)': {
        borderColor: theme.palette.secondary.dark
        }
    }
  };
})(theme);

export default ButtonGroupStyles;
