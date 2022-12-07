<script>
    import navLinks from "../../constants/navLinks";
    import { link } from "svelte-routing";
    import globalStore from "../../stores/globalStore";
    import {fly, fade} from "svelte/transition";
    
    let closeSidebar = globalStore.toggleItem;
</script>

<div class="sidebar-container" transition:fly={{x:-1000}}>
    <div class="sidebar" transition:fade={{delay:500}}>
        <div class="sidebar-header">
            <button class="btn-close" on:click="{() => closeSidebar("sidebar", false)}">
                <i class="fas fa-window-close"></i>
            </button>
        </div>
        <img src="/src/assets/images/logo.svg" alt="razers logo" class="logo sidebar-logo" />
        <ul class="sidebar-links">
            {#each navLinks as navLink}
               <li>
                    <a href="{navLink.url}" use:link on:click={() => console.log("close sidebar")}>{navLink.text}</a>
               </li>
            {/each}
            
        </ul>
    </div>
</div>