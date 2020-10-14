import theme from "../customTheme/themes";

const ExpansionPanelStyles = ((theme) => {
    const transition = {
        duration: theme.transitions.duration.shortest
    };
    return {
     /* Styles applied to the root element. */
     root: {
        position: 'relative',
        transition: theme.transitions.create(['margin'], transition),
        '&:before': {
          position: 'absolute',
          left: 0,
          top: -1,
          right: 0,
          height: 1,
          content: '""',
          opacity: 1,
          backgroundColor: theme.palette.divider,
          transition: theme.transitions.create(['opacity', 'background-color'], transition)
        },
        '&:first-child': {
          '&:before': {
            display: 'none'
          }
        },
        '&$expanded': {
          margin: '16px 0',
          '&:first-child': {
            marginTop: 0
          },
          '&:last-child': {
            marginBottom: 0
          },
          '&:before': {
            opacity: 0
          }
        },
        '&$expanded + &': {
          '&:before': {
            display: 'none'
          }
        },
        '&$disabled': {
          backgroundColor: theme.palette.action.disabledBackground
        }
      },
  
      /* Styles applied to the root element if `square={false}`. */
      rounded: {
        borderRadius: 0,
        '&:first-child': {
          borderTopLeftRadius: theme.shape.borderRadius,
          borderTopRightRadius: theme.shape.borderRadius
        },
        '&:last-child': {
          borderBottomLeftRadius: theme.shape.borderRadius,
          borderBottomRightRadius: theme.shape.borderRadius,
          // Fix a rendering issue on Edge
          '@supports (-ms-ime-align: auto)': {
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0
          }
        }
      },
  
      /* Styles applied to the root element if `expanded={true}`. */
      expanded: {},
  
      /* Styles applied to the root element if `disabled={true}`. */
      disabled: {}
  };
})(theme);

export default ExpansionPanelStyles;
