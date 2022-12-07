<script>
	import CartButton from '../Cart/CartButton.svelte';
	import { link } from 'svelte-routing';
    import globalStore from "../../stores/globalStore";
    let openSidebar = globalStore.toggleItem;
</script>

<nav class="navbar">
    <div class="nav-center">
        <button class="btn-sidebar-toggle" on:click="{() => openSidebar("sidebar", true)}">
            <i class="fas fa-bars"></i>
        </button>
        <!-- logo -->
        <a href="#" use:link class="nav-logo">
            <img src="/src/assets/images/logo.svg" alt="razors logo">
        </a>
        <CartButton />
    </div>
</nav>