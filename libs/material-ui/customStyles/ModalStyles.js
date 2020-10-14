import theme from "../customTheme/themes";

const ModalStyles = ((theme) => {
  return {
    /* Styles applied to the root element. */
    root: {
        position: 'fixed',
        zIndex: theme.zIndex.modal,
        right: 0,
        bottom: 0,
        top: 0,
        left: 0
    },

    /* Styles applied to the root element if the `Modal` has exited. */
    hidden: {
        visibility: 'hidden'
    }
  };
})(theme);

export default ModalStyles;
