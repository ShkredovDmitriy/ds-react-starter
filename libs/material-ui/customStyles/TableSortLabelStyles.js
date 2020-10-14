import theme from "../customTheme/themes";

const TableSortLabelStyles = ((theme) => {
  return {
    /* Styles applied to the root element. */
    root: {
        cursor: 'pointer',
        display: 'inline-flex',
        justifyContent: 'flex-start',
        flexDirection: 'inherit',
        alignItems: 'center',
        '&:focus': {
        color: theme.palette.text.secondary
        },
        '&:hover': {
        color: theme.palette.text.secondary,
        '& $icon': {
            opacity: 0.5
        }
        },
        '&$active': {
        color: theme.palette.text.primary,
        // && instead of & is a workaround for https://github.com/cssinjs/jss/issues/1045
        '&& $icon': {
            opacity: 1,
            color: theme.palette.text.secondary
        }
        }
    },

    /* Pseudo-class applied to the root element if `active={true}`. */
    active: {},

    /* Styles applied to the icon component. */
    icon: {
        fontSize: 18,
        marginRight: 4,
        marginLeft: 4,
        opacity: 0,
        transition: theme.transitions.create(['opacity', 'transform'], {
        duration: theme.transitions.duration.shorter
        }),
        userSelect: 'none'
    },

    /* Styles applied to the icon component if `direction="desc"`. */
    iconDirectionDesc: {
        transform: 'rotate(0deg)'
    },

    /* Styles applied to the icon component if `direction="asc"`. */
    iconDirectionAsc: {
        transform: 'rotate(180deg)'
    }
  };
})(theme);

export default TableSortLabelStyles;
