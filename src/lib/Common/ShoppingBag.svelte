<script>
    import CartItemsStore from '../../routes/Store'
    import SingleCartItem from './SingleCartItem.svelte'

    let CartItemsStores = null
    CartItemsStore.subscribe((data)=>{
        // console.log(data)
        CartItemsStores = data
        // console.log('Total Item')
        // console.log(CartItemsStores.length)
    })


    let cartCount = 0
    $: {
        cartCount = 0
    }

</script>


<div class="card-body rounded-none">
    <div class="bg-slate-900">
        <span class="text-md">Shopping Bag</span>
        <span class="font-bold text-md">{(CartItemsStores.length)} Items</span>
    </div>
    <div class="flex flex-col justify-between">
        {#each CartItemsStores as CartItem (CartItem.id)}
            <!-- Single Cart Item -->
            <SingleCartItem name= {CartItem.name}
                            price = {CartItem.price}
                            img = {CartItem.img}
                            quantity = {CartItem.quantity}
            />
        {/each}
        
        
        
    </div>
    <div class="card-actions felx flex-row w-full justify-between">
        <button class="btn btn-primary grow">View cart</button>
        <button class="btn btn-secondary grow">Checkout</button>
    </div>
</div>