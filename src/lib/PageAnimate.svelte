<script>
    import {slide} from 'svelte/transition'
	import Footer from './Common/Footer.svelte';
</script>


<div transition:slide>
    <slot />
</div>