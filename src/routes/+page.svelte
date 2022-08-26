<svelte:head>
	<title>Deshal | Ecommerce | Home</title>
    <link rel="icon" href="https://fav.farm/🏪" />
</svelte:head>

<script>
    import CartItemsStore from './Store'

    let CartItemsStores = null
    CartItemsStore.subscribe((data)=>{
        CartItemsStores = data
    })

    let newItem = {
        id: 4, name: 'Tinti', price: '3200', quantity: 1,
        img: 'https://deshal.net/wp-content/uploads/2022/06/Tinti-1-103742-3.jpg',
    }
    
    function addToCart (){
        console.log('add product to shopping bag')
        CartItemsStore.update((currentData)=>{
            
          
            return [newItem, ...currentData]
        })
    }


    
</script>

<main class="p-5">
    <div class="text-center">
        Landing Page content
    </div>
    
    <ul>
        <li class="outline rounded-md mt-2">
            <a  class="flex w-full pl-4 p-2 rounded-md
                    hover:bg-slate-800 focus:outline"
                href="/Women/Salwar-Kameez">
            Salwar Kameez
            </a>
        </li>
    </ul>
    
<div class="outline p-5 mt-5 rounded-md">
    <button class="btn btn-primary" on:click={addToCart}>Add to Cart</button>
</div>


</main>
