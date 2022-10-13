<script>
    import SvelteMarkdown from 'svelte-markdown'
    export let data
    
    let websiteURL=import.meta.env.VITE_WEBSITEURL
    function stringCorrection(source1){
        let correction = source1.replace('/uploads/',websiteURL)
        console.log(correction)
        return correction
    }

    let data1 = data.post
    
    let source = ''
</script>


<main>

    
    <!-- <div class="prose">
        <SvelteMarkdown source={source2} />
    </div> -->

<div class="px-5 pt-5">
    {#each data1 as post}
        <div class="p-3 ring-2 mb-5 rounded-xl shadow-2xl">
            <h1 class="text-3xl pb-3">{post.attributes.Title}</h1>
            <img class="py-3" src="http://localhost:1337{post.attributes.FeaturedImage.data.attributes.formats.thumbnail.url}" alt="{post.attributes.Title}">
            
            <!-- <div class="bg-slate-700 p-5">
                <h1 class="text-3xl font-extrabold text-red-600">NOT MODIFIED</h1>
                <h1 class="text-xl">{post.attributes.Description}</h1>
            </div>
            
            <div class="bg-slate-800 p-5">
                <h1 class="text-3xl font-extrabold text-red-600">@html</h1>
                <h1 class="text-xl">{@html post.attributes.Description}</h1>
            </div>
            
            <div class="bg-slate-700 p-5">
                <h1 class="text-3xl font-extrabold text-red-600">
                    Markdown</h1>
                    <SvelteMarkdown source={post.attributes.Description} />
            </div> -->
            
            <div class="prose p-5 bg-slate-800 max-w-none rounded-xl">
                <h1 class="text-3xl font-extrabold text-red-600">PROSE</h1>
                <SvelteMarkdown source={stringCorrection(post.attributes.Description)} />
            </div>
        </div>

        
    {/each}
</div>
    
</main>