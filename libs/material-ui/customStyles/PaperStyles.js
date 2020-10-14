import theme from "../customTheme/themes";

const PaperStyles = ((theme) => {
    const elevations = {};
    theme.shadows.forEach((shadow, index) => {
      elevations[`elevation${index}`] = {
        boxShadow: shadow
      };
    });
  return {
    /* Styles applied to the root element. */
    root: {
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
        transition: theme.transitions.create('box-shadow'),
        border: '1px solid #E6E2DC',
        
      },
  
      /* Styles applied to the root element if `square={false}`. */
      rounded: {
        borderRadius: 0,
      },
  
      /* Styles applied to the root element if `variant="outlined"` */
      outlined: {
        border: `1px solid ${theme.palette.divider}`
      }
  };
})(theme);

export default PaperStyles;
