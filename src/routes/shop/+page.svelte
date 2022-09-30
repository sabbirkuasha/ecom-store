<script>
    import PageAnimate from "../../lib/PageAnimate.svelte";

    export let data
    // console.log(data)
    const products = data.product
    // console.log(products[0])
    const productsLara = data.productL
    // console.log(productsLara)

</script>

<PageAnimate>
<main>
    <div class="w-auto flex justify-between">
        <div class="px-3 w-1/2">
            {#await productsLara then productsLaras}
                {#each productsLaras as product (product.id)}
                    <div class="bg-slate-900 p-3 w-auto m-auto mt-5 flex">
                        <div>
                            <img class="w-40" src="https://placeimg.com/400/225/arch" alt="arch">
                        </div>

                        <div class="px-5">
                            <h1 class="text-xl">Brand: <span class="font-bold">{product.name}</span></h1>
                            <h1 class="text-lg">Title: <span class="font-bold">{product.slug}</span></h1>
                            <h1 class="text-xl text-red-300">Price: <span class="font-bold">{product.price}</span></h1>
                            <h1 class="text-m">Description: <span class="">{product.description}</span></h1>
                        </div>
                    </div>
                {/each}
            {/await}
        </div>







        <div class="px-3 w-1/2">
            {#await products then productss}
                {#each productss as product}
                    <div class="bg-slate-900 p-3 w-auto m-auto mt-5 flex">
                        <div>
                            <img class="w-40" src="{product.images[0]}" alt="{product.brand}">
                        </div>
                        <div class="px-5">
                            <h1 class="text-xl">Brand: <span class="font-bold">{product.brand}</span></h1>
                            <h1 class="text-lg">Title: <span class="font-bold">{product.category}</span></h1>
                            <h1 class="text-xl text-red-300">Price: <span class="font-bold">{product.price}</span></h1>
                            <h1 class="text-m">Description: <span class="">{product.description}</span></h1>
                        </div>
                    </div>
                {/each}
            {/await}
        </div>
    </div>
    

</main>
</PageAnimate>