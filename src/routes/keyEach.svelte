<script>
    import Code_el from '$lib/Code_el.svelte'

    let products = [
        {name: 't-shirt', quantity: 10},
        {name: 'sharee', quantity: 15},
        {name: 'frock', quantity: 24},
        {name: 'jeans', quantity: 64},
    ]

    function addProduct(){
        let cup = {name: 'cup', quantity: 22}
        products = [cup, ...products]
    }
</script>
<main class="text-center m-auto">
    
    <div class="mt-5 w-60 p-5 m-auto text-left bg-gray-900">
        <!-- We should always use key when using for each loop -->
        <!-- Because if we use key then our every element will be binded to that key under the hood, which will help us to keep track of those element efficiently -->
        {#each products as product, index(product.name)}
        <div class="flex flex-row space-x-3">
            <input type="checkbox" name="product" id="product">
            <h3 class="text-2xl">{index}. {product.name}</h3>
        </div>
            
        {/each}
    </div>
    <button class="mt-5 btn btn-primary"
            on:click={addProduct}>
        Add Product
    </button>

    <Code_el code1 = "#each products as product, index(product.name)">
        <span slot="description">
            Svelte-kit use key to bind every element of each loop
            <br>
            So its better to use keyed each loop
        </span>
    </Code_el>
</main>