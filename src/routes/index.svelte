<script>
    let quantity = 0
    let inventory = [1,2,3]
    let user = {name: 'Somapti'}
    $: remaining = 10 - quantity
    let price = 5
    $: total_cost = price * quantity

    function addToCard(){
        inventory = [...inventory, quantity]
        quantity = ++ quantity
        user.name = "Safiya"
    }
    function updatePrice(){
        price = price + 7
    }
</script>

<main class="p-5 text-center">
    <h1>Your shopping cart has {quantity} items</h1>
    <button class="btn btn-primary"
            on:click={addToCard}>
        Add to Cart
    </button>

    <h2>{inventory}</h2>
    <h2>{user.name}</h2>

    <div>
        Remaining inventory: {remaining}
    </div>
    <div class="p-5">
        Item Price is: {price}
        <button class="btn btn-warning"
                on:click={updatePrice}>
            Update Price
        </button>
    </div>
    {#if quantity}
        <div class="text-2xl">
            Total Cost {price} X {quantity}: 
            <b class="text-3xl font-extrabold text-red-600">{total_cost}</b>
        </div>
    {/if}
    
</main>
