import theme from "../customTheme/themes";

const StepperStyles = ((theme) => {
  return {
    /* Styles applied to the root element. */
    root: {
        display: 'flex',
        padding: 24
    },

    /* Styles applied to the root element if `orientation="horizontal"`. */
    horizontal: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    /* Styles applied to the root element if `orientation="vertical"`. */
    vertical: {
        flexDirection: 'column'
    },

    /* Styles applied to the root element if `alternativeLabel={true}`. */
    alternativeLabel: {
        alignItems: 'flex-start'
    }
  };
})(theme);

export default StepperStyles;
