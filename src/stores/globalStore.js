import { writable } from "svelte/store";

const globalStore = writable({
	sidebar: false,
	cart: true,
	alert: false,
});

// custom store, subscribe method must exist and point to the global store
const store = {
	// dont invoke just reference
	subscribe: globalStore.subscribe,
	//// Simple approach, create method for every functionality we got
	// toggleCart: (newCartValue) =>
	// 	globalStore.update((currStoreValue) => {
	// 		return { ...currStoreValue, cart: newCartValue };
	// 	}),
	//// more Generic approach
	toggleItem: (item, value) => {
		globalStore.update((storeValues) => {
			return { ...storeValues, [item]: value };
		});
	},
};
export default store;
