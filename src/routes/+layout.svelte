<script>
	import {page} from '$app/stores'
	import '../app.postcss'
	import NavBar from '../lib/NavBar.svelte'
	import Footer from '../lib/Common/Footer.svelte'
	

	// import for experiment only
	// import Nav from '../lib/Nav.svelte'
	// import Nav2 from '../lib/Nav2.svelte'
	// import Nav3 from '../lib/Nav3.svelte'

	// Activate these 3 only when it requires
	// $: console.log("page info is: ")
	// $: console.log($page.routeId)
	// $: console.log($page)

</script>


<NavBar />


<slot />
<Footer/>
<!-- <Nav />
<Nav2 /> -->
<!-- <Nav3 /> -->
