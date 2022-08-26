<script>
    import CartItemsStore from '../../routes/Store'
    export let name ="product"
    export let badge = []
    export let price = 542
    export let img = "https://deshal.net/wp-content/uploads/2022/06/Himadri-1-104482-3.jpg"
    export let img2 = "https://deshal.net/wp-content/uploads/2022/06/Himadri-1-104482-1.jpg"
    
    export let product
    // console.log(product)
    name =product.name
    price =product.price
    badge=product.badge
    img=product.img
    img2=product.img2


    function addToCart (){
        console.log('add product from category page')
        CartItemsStore.update((currentData)=>{
            console.log(currentData)
            return [product, ...currentData]
        })
    }


// will remove this part later
let hideAddtoCart = true
function on_bind() {
		console.log("hello");
        hideAddtoCart = !hideAddtoCart
	}

	function on_key_down({key, ctrlKey, repeat}) {       
		if (repeat) return;
		
		switch (key) {           
			case "h":
				if(ctrlKey) {
					event.preventDefault();
					on_bind();
					break;
				}
		}
	}
</script>
<!-- will remove late -->
<svelte:window on:keydown={on_key_down}/>


<div class="card w-auto shadow-md rounded-md">
    <figure class="relative bg-white">
        <!-- only on this when New badge is switched off -->
        <!-- <div class="w-12 h-12 bg-red-700 absolute left-0 bottom-0 ml-4 mb-20 flex">
            <span class="m-auto text-white text-center">NEW</span> 
        </div> -->

        <!-- Approach 2 -->
        <img class="cursor-pointer absolute top-0 left-0 transition-opacity duration-250 ease-in opacity-100 hover:opacity-0 " 
            src={img} alt={name} />

        <img class="cursor-pointer w-auto h-auto" 
            src={img2} alt={name}/>

    </figure>
    <div class="mt-2 z-10 bg-white relative">
        <!-- only on this when New Overlay box is switched off -->
        {#if badge}
            {#each badge as singleBadge}
                <div class="mr-2 badge badge-outline uppercase badge-error text-xs">{singleBadge}</div>
            {/each} 
        {/if}
        <h2 class="text-black font-bold ml-2">{name}</h2>
        <h2 class="text-black pb-1 ml-2">Tk. {price}</h2>

        <!-- will remove later -->
        <button on:click={addToCart} 
                class="btn btn-primary w-full float-right bottom-0 "
                class:hidden="{hideAddtoCart}"> 
            Add to Cart
        </button>
    </div>
</div>

