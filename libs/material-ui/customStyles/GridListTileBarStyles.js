import theme from "../customTheme/themes";

const GridListTileBarStyles = ((theme) => {
  return {
    /* Styles applied to the root element. */
    root: {
        position: 'absolute',
        left: 0,
        right: 0,
        height: 48,
        background: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        fontFamily: theme.typography.fontFamily
    },

    /* Styles applied to the root element if `titlePosition="bottom"`. */
    titlePositionBottom: {
        bottom: 0
    },

    /* Styles applied to the root element if `titlePosition="top"`. */
    titlePositionTop: {
        top: 0
    },

    /* Styles applied to the root element if a `subtitle` is provided. */
    rootSubtitle: {
        height: 68
    },

    /* Styles applied to the title and subtitle container element. */
    titleWrap: {
        flexGrow: 1,
        marginLeft: 16,
        marginRight: 16,
        color: theme.palette.common.white,
        overflow: 'hidden'
    },

    /* Styles applied to the container element if `actionPosition="left"`. */
    titleWrapActionPosLeft: {
        marginLeft: 0
    },

    /* Styles applied to the container element if `actionPosition="right"`. */
    titleWrapActionPosRight: {
        marginRight: 0
    },

    /* Styles applied to the title container element. */
    title: {
        fontSize: theme.typography.pxToRem(16),
        lineHeight: '24px',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'nowrap'
    },

    /* Styles applied to the subtitle container element. */
    subtitle: {
        fontSize: theme.typography.pxToRem(12),
        lineHeight: 1,
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'nowrap'
    },

    /* Styles applied to the actionIcon if supplied. */
    actionIcon: {},

    /* Styles applied to the actionIcon if `actionPosition="left"`. */
    actionIconActionPosLeft: {
        order: -1
    }
  };
})(theme);

export default GridListTileBarStyles;
