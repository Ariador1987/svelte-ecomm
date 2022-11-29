import { writable, derived } from "svelte/store";
import localProducts from "../localProducts";

// subscribe
// set
// update

const flattenProducts = (dataArr) => {
    return dataArr.map((item) => {
        // modifying item. Override image object with only the url
        let image = "src" + item.image.url;
        return {...item, image};
    })
}
const productsWithFlattedImg = flattenProducts(localProducts);

const store = writable([...productsWithFlattedImg]);
export const featuredStore = derived(store , ($featured) => {
    return $featured.filter((item) => item.featured === true);
});
export default store;