<script>
    import productStore from "../../stores/defaultProductsStore";
	import About from "../../pages/About.svelte";
	import App from "../../App.svelte";
	import Checkout from "../../pages/Checkout.svelte";
	import ProductSingleItem from "./ProductSingleItem.svelte";
    import Loading from "../Loading.svelte";

    export let title = "";
    // let localProducts = [];
    // let unsubscribed;
    // everytime we're rending the component we're subscribing , we NEED TO DISPOSE such stuff
    // We can do this with a one liner using a dollar $
    // onMount(() => {
    //     unsubscribed = productStore.subscribe(value => {
    //         localProducts = value;
    //     })
    //     console.log(unsubscribed)
    // });
    // onDestroy(() => unsubscribed());
</script>

<section class="section">
    <h2 class="section-title">{title}</h2>
    <div class="products-center">
        {#each $productStore as product (product.id)}
           <ProductSingleItem {product}/>
           {:else}
           <Loading/>
        {/each}
    </div>
</section>
