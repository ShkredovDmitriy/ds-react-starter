import * as R from "ramda";
import DTO, { filterEmpties } from "../DTO";
const transforms = [
  [["id"], ["id"]],
  [["header"], ["name"]],
  [["subheader"], ["subheader"]],
  [["description"], ["description"]],
  [["from"], ["time_start"]],
  [["img", "desktop"], ["img_desktop"]],
  [["img", "notebook"], ["img_notebook"]],
  [["img", "tablet"], ["img_tablet"]],
  [["img", "mobile"], ["img_mobile"]],
];

export const ProductsApiDTO = R.map(DTO(transforms, false));

export default ProductsApiDTO;
