export default (props) => (
  console.log(
    "%c" + Object.values(props)[0] + " %o",
    "color: GreenYellow",
    props
  ),
  null // ➜ React components must return something
);

//import Console from "~/services/Console";
//<Console message="FaqEditForm: Рендер SimpleForm с props" {...props} />
