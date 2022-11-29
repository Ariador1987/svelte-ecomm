<script>
    import productStore, {featuredStore} from "../../stores/defaultProductsStore";
	import About from "../../pages/About.svelte";
	import App from "../../App.svelte";
	import Checkout from "../../pages/Checkout.svelte";
	import ProductSingleItem from "./ProductSingleItem.svelte";
    import Loading from "../Loading.svelte";
	import { onDestroy, onMount } from "svelte";

    export let title = "";
    // $: featuredProducts = $productStore.filter((product) => product.featured === true);
    // let unsubscribed;
    // show only featured products using reactivity
    // onMount(() => {
        // console.log(featured);
    //     unsubscribed = productStore.subscribe(val => {
    //         featuredProducts = val.filter((product) => product.featured === true);
    //     });
    // });
    // onDestroy(() => unsubscribed());
</script>

{#if $featuredStore.length === 0}
   return <Loading/>
{:else}   
   <section class="section">
       <h2 class="section-title">{title}</h2>
       <div class="products-center">
           {#each $featuredStore as product (product.id)}
            <ProductSingleItem {product}/>
           {/each}
        </div>
    </section>
{/if}
