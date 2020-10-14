import theme from "../customTheme/themes";

const DialogContentStyles = ((theme) => {
  return {
    /* Styles applied to the root element. */
    root: {
        flex: '1 1 auto',
        WebkitOverflowScrolling: 'touch',
        // Add iOS momentum scrolling.
        overflowY: 'auto',
        padding: '8px 24px',
        '&:first-child': {
        // dialog without title
        paddingTop: 20
        }
    },

    /* Styles applied to the root element if `dividers={true}`. */
    dividers: {
        padding: '16px 24px',
        borderTop: `1px solid ${theme.palette.divider}`,
        borderBottom: `1px solid ${theme.palette.divider}`
    } 
  };
})(theme);

export default DialogContentStyles;
