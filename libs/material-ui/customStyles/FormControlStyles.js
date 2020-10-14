import theme from "../customTheme/themes";

const FormControlStyles = ((theme) => {
  return {
    /* Styles applied to the root element. */
    root: {
        display: 'inline-flex',
        flexDirection: 'column',
        position: 'relative',
        // Reset fieldset default style.
        minWidth: 0,
        padding: 0,
        margin: 0,
        border: 0,
        zIndex: 0,
        // Fix blur label text issue
        verticalAlign: 'top' // Fix alignment issue on Safari.

    },

    /* Styles applied to the root element if `margin="normal"`. */
    marginNormal: {
        marginTop: 16,
        marginBottom: 8
    },

    /* Styles applied to the root element if `margin="dense"`. */
    marginDense: {
        marginTop: 8,
        marginBottom: 4
    },

    /* Styles applied to the root element if `fullWidth={true}`. */
    fullWidth: {
        width: '100%'
    }
  };
})(theme);

export default FormControlStyles;
