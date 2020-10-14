import theme from "../customTheme/themes";

const FormControlLabelStyles = ((theme) => {
  return {
    /* Styles applied to the root element. */
    root: {
        display: 'inline-flex',
        alignItems: 'center',
        cursor: 'pointer',
        // For correct alignment with the text.
        verticalAlign: 'middle',
        WebkitTapHighlightColor: 'transparent',
        marginLeft: -11,
        marginRight: 16,
        // used for row presentation of radio/checkbox
        '&$disabled': {
        cursor: 'default'
        }
    },

    /* Styles applied to the root element if `labelPlacement="start"`. */
    labelPlacementStart: {
        flexDirection: 'row-reverse',
        marginLeft: 16,
        // used for row presentation of radio/checkbox
        marginRight: -11
    },

    /* Styles applied to the root element if `labelPlacement="top"`. */
    labelPlacementTop: {
        flexDirection: 'column-reverse',
        marginLeft: 16
    },

    /* Styles applied to the root element if `labelPlacement="bottom"`. */
    labelPlacementBottom: {
        flexDirection: 'column',
        marginLeft: 16
    },

    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the label's Typography component. */
    label: {
        fontSize: '0.875rem',
        '&$disabled': {
        color: theme.palette.text.disabled
        }
    }
  };
})(theme);

export default FormControlLabelStyles;
