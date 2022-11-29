<script>
    export let id;
    //eslint-disable-next-line
    export let location;
    
    import {link} from "svelte-routing";
	import Loading from "../components/Loading.svelte";
    //// GLOBAL STORE
    import productStore from "../stores/defaultProductsStore";
    // getting product from exported ID value (passed prop will be string)
    // 2nd edgecase is if productStore is empty while waiting from BackEnd
    $:product = $productStore.find((prod) => prod.id === Number.parseInt(id));
</script>

{#if !product}
   <Loading/>
   {:else}
    <section class="single-product">
        <!--Back to products-->
        <a href="/products" class="btn btn-primary" use:link>back to products</a>
        <!--Single product Container-->
        <div class="single-product-container">
            <article class="single-product-image">
                <img src="../{product.image}" alt={product.title}>
            </article>
            <article>
                <h1>{product.title}</h1>
                <h2>${product.price}</h2>
                <p>{product.description}</p>
                <button class="btn btn-primary btn-block" on:click="{() => console.log("hi")}">Add to cart</button>
            </article>
        </div>
    </section>
{/if}
