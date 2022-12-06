<script>
    import SmallNavbar from "./SmallNavbar.svelte";
    import BigNavbar from "./BigNavbar.svelte";

    let screenWidth;
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

