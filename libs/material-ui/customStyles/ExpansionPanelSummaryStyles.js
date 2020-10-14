import theme from "../customTheme/themes";

const ExpansionPanelSummaryStyles = ((theme) => {
    const transition = {
        duration: theme.transitions.duration.shortest
      };
  return {
    /* Styles applied to the root element. */
    root: {
        display: 'flex',
        minHeight: 8 * 6,
        transition: theme.transitions.create(['min-height', 'background-color'], transition),
        padding: '0 24px 0 24px',
        '&:hover:not($disabled)': {
          cursor: 'pointer'
        },
        '&$expanded': {
          minHeight: 64
        },
        '&$focused': {
          backgroundColor: theme.palette.grey[300]
        },
        '&$disabled': {
          opacity: 0.38
        }
      },
  
      /* Pseudo-class applied to the root element, children wrapper element and `IconButton` component if `expanded={true}`. */
      expanded: {},
  
      /* Pseudo-class applied to the root element if `focused={true}`. */
      focused: {},
  
      /* Pseudo-class applied to the root element if `disabled={true}`. */
      disabled: {},
  
      /* Styles applied to the children wrapper element. */
      content: {
        display: 'flex',
        flexGrow: 1,
        transition: theme.transitions.create(['margin'], transition),
        margin: '12px 0',
        '&$expanded': {
          margin: '20px 0'
        }
      },
  
      /* Styles applied to the `IconButton` component when `expandIcon` is supplied. */
      expandIcon: {
        transform: 'rotate(0deg)',
        transition: theme.transitions.create('transform', transition),
        '&:hover': {
          // Disable the hover effect for the IconButton,
          // because a hover effect should apply to the entire Expand button and
          // not only to the IconButton.
          backgroundColor: 'transparent'
        },
        '&$expanded': {
          transform: 'rotate(180deg)'
        }
      }
  };
})(theme);

export default ExpansionPanelSummaryStyles;
