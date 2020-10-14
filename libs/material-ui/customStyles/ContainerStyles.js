import theme from "../customTheme/themes";

const ContainerStyles = ((theme) => {
  return {
    /* Styles applied to the root element. */
    root: {
        position: 'relative',
        width: '100%',
        maxWidth: '72rem',
        marginLeft: 'auto',
        boxSizing: 'border-box',
        marginRight: 'auto',
        paddingLeft: 0,
        paddingRight:0,
        [theme.breakpoints.up('sm')]: {
        paddingLeft: 0,
        paddingRight: 0
        }
    },

    /* Styles applied to the root element if `disableGutters={true}`. */
    disableGutters: {
        paddingLeft: 0,
        paddingRight: 0
    },

    /* Styles applied to the root element if `fixed={true}`. */
    fixed: Object.keys(theme.breakpoints.values).reduce((acc, breakpoint) => {
        const value = theme.breakpoints.values[breakpoint];

        if (value !== 0) {
        acc[theme.breakpoints.up(breakpoint)] = {
            maxWidth: value
        };
        }

        return acc;
    }, {}),

    /* Styles applied to the root element if `maxWidth="xs"`. */
    maxWidthXs: {
        [theme.breakpoints.up('xs')]: {
        maxWidth: Math.max(theme.breakpoints.values.xs, 444)
        }
    },

    /* Styles applied to the root element if `maxWidth="sm"`. */
    maxWidthSm: {
        [theme.breakpoints.up('sm')]: {
        maxWidth: theme.breakpoints.values.sm
        }
    },

    /* Styles applied to the root element if `maxWidth="md"`. */
    maxWidthMd: {
        [theme.breakpoints.up('md')]: {
            maxWidth: '72rem',
        }
    },

    /* Styles applied to the root element if `maxWidth="lg"`. */
    maxWidthLg: {
        [theme.breakpoints.up('lg')]: {
        // maxWidth: theme.breakpoints.values.lg,
        maxWidth: '72rem',
        }
    },

    /* Styles applied to the root element if `maxWidth="xl"`. */
    maxWidthXl: {
        [theme.breakpoints.up('xl')]: {
        // maxWidth: theme.breakpoints.values.xl,
        maxWidth: '72rem',
        }
    } 
  };
})(theme);

export default ContainerStyles;
