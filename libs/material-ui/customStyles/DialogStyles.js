import theme from "../customTheme/themes";

const DialogStyles = ((theme) => {
  return {
    /* Styles applied to the root element. */
    root: {
        '@media print': {
        // Use !important to override the Modal inline-style.
        position: 'absolute !important'
        }
    },

    /* Styles applied to the container element if `scroll="paper"`. */
    scrollPaper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

    /* Styles applied to the container element if `scroll="body"`. */
    scrollBody: {
        overflowY: 'auto',
        overflowX: 'hidden',
        textAlign: 'center',
        '&:after': {
        content: '""',
        display: 'inline-block',
        verticalAlign: 'middle',
        height: '100%',
        width: '0'
        }
    },

    /* Styles applied to the container element. */
    container: {
        height: '100%',
        '@media print': {
        height: 'auto'
        },
        // We disable the focus ring for mouse, touch and keyboard users.
        outline: 0
    },

    /* Styles applied to the `Paper` component. */
    paper: {
        margin: 32,
        position: 'relative',
        overflowY: 'auto',
        // Fix IE 11 issue, to remove at some point.
        '@media print': {
        overflowY: 'visible',
        boxShadow: 'none'
        }
    },

    /* Styles applied to the `Paper` component if `scroll="paper"`. */
    paperScrollPaper: {
        display: 'flex',
        flexDirection: 'column',
        maxHeight: 'calc(100% - 64px)'
    },

    /* Styles applied to the `Paper` component if `scroll="body"`. */
    paperScrollBody: {
        display: 'inline-block',
        verticalAlign: 'middle',
        textAlign: 'left' // 'initial' doesn't work on IE 11

    },

    /* Styles applied to the `Paper` component if `maxWidth=false`. */
    paperWidthFalse: {
        maxWidth: 'calc(100% - 64px)'
    },

    /* Styles applied to the `Paper` component if `maxWidth="xs"`. */
    paperWidthXs: {
        maxWidth: Math.max(theme.breakpoints.values.xs, 444),
        '&$paperScrollBody': {
        [theme.breakpoints.down(Math.max(theme.breakpoints.values.xs, 444) + 32 * 2)]: {
            maxWidth: 'calc(100% - 64px)'
        }
        }
    },

    /* Styles applied to the `Paper` component if `maxWidth="sm"`. */
    paperWidthSm: {
        maxWidth: theme.breakpoints.values.sm,
        '&$paperScrollBody': {
        [theme.breakpoints.down(theme.breakpoints.values.sm + 32 * 2)]: {
            maxWidth: 'calc(100% - 64px)'
        }
        }
    },

    /* Styles applied to the `Paper` component if `maxWidth="md"`. */
    paperWidthMd: {
        maxWidth: theme.breakpoints.values.md,
        '&$paperScrollBody': {
        [theme.breakpoints.down(theme.breakpoints.values.md + 32 * 2)]: {
            maxWidth: 'calc(100% - 64px)'
        }
        }
    },

    /* Styles applied to the `Paper` component if `maxWidth="lg"`. */
    paperWidthLg: {
        maxWidth: theme.breakpoints.values.lg,
        '&$paperScrollBody': {
        [theme.breakpoints.down(theme.breakpoints.values.lg + 32 * 2)]: {
            maxWidth: 'calc(100% - 64px)'
        }
        }
    },

    /* Styles applied to the `Paper` component if `maxWidth="xl"`. */
    paperWidthXl: {
        maxWidth: theme.breakpoints.values.xl,
        '&$paperScrollBody': {
        [theme.breakpoints.down(theme.breakpoints.values.xl + 32 * 2)]: {
            maxWidth: 'calc(100% - 64px)'
        }
        }
    },

    /* Styles applied to the `Paper` component if `fullWidth={true}`. */
    paperFullWidth: {
        width: 'calc(100% - 64px)'
    },

    /* Styles applied to the `Paper` component if `fullScreen={true}`. */
    paperFullScreen: {
        margin: 0,
        width: '100%',
        maxWidth: '100%',
        height: '100%',
        maxHeight: 'none',
        borderRadius: 0,
        '&$paperScrollBody': {
        margin: 0,
        maxWidth: '100%'
        }
    }
  };
})(theme);

export default DialogStyles;
