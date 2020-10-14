import theme from "../customTheme/themes";

const CardActionsStyle = ((theme) => {
  return {
    /* Styles applied to the root element. */
    root: {
        display: 'flex',
        alignItems: 'center',
        padding: 8
    },

    /* Styles applied to the root element if `disableSpacing={false}`. */
    spacing: {
        '& > :not(:first-child)': {
        marginLeft: 8
        }
    }
  };
})(theme);

export default CardActionsStyle;
