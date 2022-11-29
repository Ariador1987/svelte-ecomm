<script>
    import {link} from "svelte-routing";
    //eslint-disable-next-line
    // export let location;
    // export let product;
    // if (product) {
    //     const {title, image, price, id} = product;
    //     console.log(product)

    // }
    export let product = {};
    const {id, title, price, description, featured, created_at: createdAt, updated_at: updatedAt, image} = product;
</script>

<article class="product">
    <div class="img-container">
        <img src="{image}" alt={title}>
        <a href={`/products/${id}`} class="btn btn-primary product-link" use:link>details</a>
    </div>
    <div class="product-footer">
        <p class="product-title">{title}</p>
        <p class="product-title">{price}</p>
        <p class="product-title">{new Date(createdAt).toDateString()}</p>
    </div>
</article>
