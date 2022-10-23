<script>
	import SvelteMarkdown from 'svelte-markdown'
    export let data
    const {post} = data
	data = post.attributes
    console.log('svelte file - ')
    console.log(data)


	let source = ''
    let websiteURL=import.meta.env.VITE_WEBSITEURL
    function stringCorrection(source1){
        let correction = source1.replace('/uploads/',websiteURL)
        // console.log(correction)
        return correction
    }  
</script>

<main>
	<div class="px-5 pt-5">
		<div class="p-3 ring-2 mb-5 rounded-xl shadow-2xl">
			<h1 class="text-3xl pb-3">{post.attributes.Title}</h1>
			<!-- <img class="py-3" src="http://localhost:1337{post.attributes.FeaturedImage.data.attributes.formats.thumbnail.url}" alt="{post.attributes.Title}">             -->
			<div class="prose p-5 bg-slate-800 max-w-none rounded-xl">
				<h1 class="text-3xl font-extrabold text-red-600">PROSE</h1>
				<SvelteMarkdown source={stringCorrection(post.attributes.Description)} />
			</div>
		</div>
    </div>




	<!-- This is how js object for each loop work -->
	<!-- {#each Object.entries(data) as [title, paragraph]}
		<div class="ring-2 mb-2">
			<h1>{title}</h1>
			<p>{paragraph}</p>
		</div>
	{/each} -->

</main>
