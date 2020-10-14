import theme from "../customTheme/themes";

const FormGroupStyles = ((theme) => {
  return {
    /* Styles applied to the root element. */
    root: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap'
    },

    /* Styles applied to the root element if `row={true}`. */
    row: {
        flexDirection: 'row'
    }
  };
})(theme);

export default FormGroupStyles;
