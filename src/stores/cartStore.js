import { derived, writable } from "svelte/store";

const cartStore = writable([
	{
		id: 1,
		title: "razor blade",
		price: 1.99,
		image: "/src/assets/product-images/product-1.png",
		amount: 1,
	},
	{
		id: 2,
		title: "Gillette Razor",
		price: 9.99,
		image: "/src/assets/product-images/product-2.png",
		amount: 1,
	},
	{
		id: 3,
		title: "Barber Razor",
		price: 7.99,
		image: "/src/assets/product-images/product-3.png",
		amount: 4,
	},
]);

export const derivedCartStore = derived(cartStore, ($cartStore) => {
	const total = $cartStore.reduce((cache, currentItem) => {
		return (cache += currentItem.amount * currentItem.price);
	}, 0);

	return total.toFixed(2);
});

export default cartStore;
