import theme from "../customTheme/themes";

const BottomNavigationStyles = ((theme) => {
  return {
    /* Styles applied to the root element. */
    root: {
        display: 'flex',
        justifyContent: 'center',
        height: 56,
        backgroundColor: theme.palette.background.paper
    } 
  };
})(theme);

export default BottomNavigationStyles;
