<svelte:head>
	<title>Deshal | BreastCancer | Home</title>
    <link rel="icon" href="https://fav.farm/🏪" />
</svelte:head>

<script>
    import PageAnimate from "../../lib/PageAnimate.svelte";
    import SingleVideoPost from "../../lib/NewLine/SingleVideoPost.svelte";


    let scrollElement

    function nextSlide(){
        console.log(scrollElement.scrollLeft)
        scrollElement.scrollLeft+= 950
    }
    function prevSlide(){
        console.log(scrollElement)
        scrollElement.scrollLeft-= 950
    }

</script>


<PageAnimate>
    <main class="mt-5 mb-96">

        <div bind:this={scrollElement}
        class="bg-red-900 flex items-center justify-between gap-2 p-2 border overflow-x-auto snap-x">
            <SingleVideoPost/>
            <SingleVideoPost/>
            <SingleVideoPost/>
            <SingleVideoPost/>
        </div>

        <div class="mt-5 m-auto text-center">
            <button class="btn btn-primary" on:click={prevSlide}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                    <path fill-rule="evenodd" d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z" clip-rule="evenodd" />
                </svg>              
            </button>
            <button class="btn btn-primary" on:click={nextSlide}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                    <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clip-rule="evenodd" />
                </svg>                            
            </button>
    
        </div>
        
        
    </main>
</PageAnimate>
