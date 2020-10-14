import theme from "../customTheme/themes";

const TextFieldStyles = ((theme) => {
  return {
    /* Styles applied to the root element. */
    root: {}
    /**
     * The `TextField` is a convenience wrapper for the most common cases (80%).
     * It cannot be all things to all people, otherwise the API would grow out of control.
     *
     * ## Advanced Configuration
     *
     * It's important to understand that the text field is a simple abstraction
     * on top of the following components:
     *
     * - [FormControl](/api/form-control/)
     * - [InputLabel](/api/input-label/)
     * - [FilledInput](/api/filled-input/)
     * - [OutlinedInput](/api/outlined-input/)
     * - [Input](/api/input/)
     * - [FormHelperText](/api/form-helper-text/)
     *
     * If you wish to alter the props applied to the `input` element, you can do so as follows:
     *
     * ```jsx
     * const inputProps = {
     *   step: 300,
     * };
     *
     * return <TextField id="time" type="time" inputProps={inputProps} />;
     * ```
     *
     * For advanced cases, please look at the source of TextField by clicking on the
     * "Edit this page" button above. Consider either:
     *
     * - using the upper case props for passing values directly to the components
     * - using the underlying components directly as shown in the demos
     */    
  };
})(theme);

export default TextFieldStyles;
