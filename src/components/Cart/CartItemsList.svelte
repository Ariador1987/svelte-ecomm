<script>
    import SingleItem from "./SingleItem.svelte";
    import cartStore, { derivedCartStore } from "../../stores/cartStore";
    import {fly} from "svelte/transition";
    import {flip} from "svelte/animate";
</script>

<section class="cart-items">
    <article>
        {#each $cartStore as cartItem, index (cartItem.id)}
            <div in:fly={{delay: (index + 1) * 500, x: 100}} 
                out:fly={{x: -100}} 
                animate:flip>
                <SingleItem {...cartItem}/>
            </div>
            {:else}
            <h2 class="empty-cart">is currently empty...</h2>
        {/each}
    </article>
    <h3 class="cart-total">
        ${$derivedCartStore}
    </h3>
</section>