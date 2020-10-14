import theme from "../customTheme/themes";

const InputLabelStyles = ((theme) => {
  return {
    /* Styles applied to the root element. */
    root: {
        display: 'block',
        transformOrigin: 'top left'
    },

    /* Pseudo-class applied to the root element if `focused={true}`. */
    focused: {},

    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Pseudo-class applied to the root element if `error={true}`. */
    error: {},

    /* Pseudo-class applied to the root element if `required={true}`. */
    required: {},

    /* Pseudo-class applied to the asterisk element. */
    asterisk: {},

    /* Styles applied to the root element if the component is a descendant of `FormControl`. */
    formControl: {
        position: 'absolute',
        left: 0,
        top: 0,
        // slight alteration to spec spacing to match visual spec result
        transform: 'translate(0, 24px) scale(1)'
    },

    /* Styles applied to the root element if `margin="dense"`. */
    marginDense: {
        // Compensation for the `Input.inputDense` style.
        transform: 'translate(0, 21px) scale(1)'
    },

    /* Styles applied to the `input` element if `shrink={true}`. */
    shrink: {
        transform: 'translate(0, 1.5px) scale(0.75)',
        transformOrigin: 'top left'
    },

    /* Styles applied to the `input` element if `disableAnimation={false}`. */
    animated: {
        transition: theme.transitions.create(['color', 'transform'], {
        duration: theme.transitions.duration.shorter,
        easing: theme.transitions.easing.easeOut
        })
    },

    /* Styles applied to the root element if `variant="filled"`. */
    filled: {
        // Chrome's autofill feature gives the input field a yellow background.
        // Since the input field is behind the label in the HTML tree,
        // the input field is drawn last and hides the label with an opaque background color.
        // zIndex: 1 will raise the label above opaque background-colors of input.
        zIndex: 1,
        pointerEvents: 'none',
        transform: 'translate(12px, 20px) scale(1)',
        '&$marginDense': {
        transform: 'translate(12px, 17px) scale(1)'
        },
        '&$shrink': {
        transform: 'translate(12px, 10px) scale(0.75)',
        '&$marginDense': {
            transform: 'translate(12px, 7px) scale(0.75)'
        }
        }
    },

    /* Styles applied to the root element if `variant="outlined"`. */
    outlined: {
        // see comment above on filled.zIndex
        zIndex: 1,
        pointerEvents: 'none',
        transform: 'translate(14px, 20px) scale(1)',
        '&$marginDense': {
        transform: 'translate(14px, 12px) scale(1)'
        },
        '&$shrink': {
        transform: 'translate(14px, -6px) scale(0.75)'
        }
    }
  };
})(theme);

export default InputLabelStyles;
