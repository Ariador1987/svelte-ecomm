<script>
	import { link } from 'svelte-routing';
    import CartButton from '../Cart/CartButton.svelte';
    import navLinks from '../../constants/navLinks';
    
</script>

<nav class="navbar">
    <div class="nav-container">
        <div class="nav-center">
            <ul class="nav-links">
                {#each navLinks as navLink}
                   <li>
                        <a href="{navLink.url}" use:link>{navLink.text}</a>
                   </li>
                {/each}
                
            </ul>
            <a href="/" use:link class="nav-logo big-logo">
                <img src="/src/assets/images/logo.svg" alt="razers logo">
            </a>
            <div class="nav-aside">
                <CartButton/>
            </div>
        </div>
    </div>
</nav>