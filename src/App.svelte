<script>
    //// PAGES
    import Login from "./pages/Login.svelte";
    import About from "./pages/About.svelte";
    import Checkout from "./pages/Checkout.svelte";
    import Home from "./pages/Home.svelte";
    import Products from "./pages/Products.svelte";
    import ProductDetail from "./pages/ProductDetail.svelte";
    //// ROUTER
    import {Router, Route, Link} from "svelte-routing";
    import Navbar from "./components/Navbar/Navbar.svelte";
    import Sidebar from "./components/Navbar/Sidebar.svelte";
</script>

<svelte:head>
    <title>Razors Ecommerce</title>
</svelte:head>

<Router>
    <Navbar/>
    <Sidebar/>
    <Route path="/" component={Home}/>
    <Route path="/about" component={About}/>
    <Route path="/login" component={Login}/>
    <Route path="/products" component={Products}/>
    <Route path="/products/:id" component={ProductDetail}/>
</Router>

