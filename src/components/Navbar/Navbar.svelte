<script>
    import SmallNavbar from "./SmallNavbar.svelte";
    import BigNavbar from "./BigNavbar.svelte";
    import globalStore from "../../stores/globalStore";

    let closeSidebar = globalStore.toggleItem;
    
    let screenWidth;
    $: if (screenWidth > 992) {
        globalStore.toggleItem("sidebar", false);
    }
    // onMount
    // window.addEL innerWidth
    // onDestroy
</script>

<svelte:window bind:innerWidth={screenWidth}/>
{#if screenWidth < 900}
    <SmallNavbar/>
{:else}
    <BigNavbar/>
{/if}

