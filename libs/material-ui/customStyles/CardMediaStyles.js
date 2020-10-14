import theme from "../customTheme/themes";

const CardMediaStyles = ((theme) => {
  return {
    /* Styles applied to the root element. */
    root: {
        display: 'block',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    },

    /* Styles applied to the root element if `component="video, audio, picture, iframe, or img"`. */
    media: {
        width: '100%'
    },

    /* Styles applied to the root element if `component="picture or img"`. */
    img: {
        // ⚠️ object-fit is not supported by IE 11.
        objectFit: 'cover'
    } 
  };
})(theme);

export default CardMediaStyles;
