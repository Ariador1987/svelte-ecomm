<script>
	import Hero from "../components/Hero.svelte";
    import FeaturedProducts from "../components/Products/FeaturedProducts.svelte";
    import {Link, link} from "svelte-routing";

    // const getProps = () => {
    //     return {class: "btn btn-primary btn-hero"}
    // }
</script>

<Hero>
    <!-- <Link to="/products" {getProps}>Shop now</Link> -->
    <a href="/products" class="btn btn-primary btn-hero" use:link>Products</a>
</Hero>
<FeaturedProducts title="featured products" />