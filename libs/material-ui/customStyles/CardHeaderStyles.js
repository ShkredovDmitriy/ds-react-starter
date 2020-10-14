import theme from "../customTheme/themes";

const CardHeaderStyles = ((theme) => {
  return {
    /* Styles applied to the root element. */
    root: {
        display: 'flex',
        alignItems: 'center',
        padding: 16
    },

    /* Styles applied to the avatar element. */
    avatar: {
        flex: '0 0 auto',
        marginRight: 16
    },

    /* Styles applied to the action element. */
    action: {
        flex: '0 0 auto',
        alignSelf: 'flex-start',
        marginTop: -8,
        marginRight: -8
    },

    /* Styles applied to the content wrapper element. */
    content: {
        flex: '1 1 auto'
    },

    /* Styles applied to the title Typography element. */
    title: {},

    /* Styles applied to the subheader Typography element. */
    subheader: {}
  };
})(theme);

export default CardHeaderStyles;
