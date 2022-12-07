<script>
    // we need link if user is not logged in to navigate him to login
	import { link } from 'svelte-routing';
    import globalStore from "../../stores/globalStore";
    import {fly, fade, blur} from "svelte/transition";

    //itemlist
    let user = false;
</script>

<div class="cart-overlay" transition:blur>
    <div class="cart-container" transition:fly={{x: 100}}>
        <div class="cart" transition:fade={{delay: 400}}>
            <div class="cart-header">
                <button class="btn-close" on:click="{() => globalStore.toggleItem("cart", false)}">
                    <i class="fas fa-window-close"></i>
                </button>
                <h2 class="cart-title">Your bag</h2>
                <span/>
            </div>
            <p>Cart items</p>
            <!-- Cart Footer TODO: Login link or checkout -->
            <div class="cart-footer">
                {#if user}
                    <a href="/checkout" use:link class="btn btn-primary btn-block" on:click={() => globalStore.toggleItem("cart", false)}>
                        Checkout
                    </a>
                   {:else}
                   <p class="cart-login">
                    In order to checkout please 
                </p>
                <a href="/login" use:link class="btn btn-primary btn-block" on:click={() => globalStore.toggleItem("cart", false)}>
                    Login
                </a>
                {/if}
            </div>
        </div>
    </div>
</div>