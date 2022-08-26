<script>
    export let name = "name"
    export let price = "10"
    
    export let img = "https://deshal.net/wp-content/uploads/2022/06/Himadri-1-104482-3.jpg"

    let quantityF = 0
    $: quantityF = quantityF + 1
</script>

<div class="flex flex-row py-2">
    <div class="w-2/5">
        <img class="aspect-square object-cover rounded-sm cursor-pointer" 
            src={img} alt="some"/>
    </div>
    <div class="w-3/5 flex flex-col relative">
        <h2 class=" font-bold px-2 text-md">{name}</h2>
        <h2 class=" pb-1 text-md px-2">{price}</h2>
        <div class="w-full bottom-0 absolute">
            <label class="input-group w-full px-2">
                <span class="btn btn-primary btn-outline text-xl">+</span>
                <input type="text" value={quantityF} class="input w-1/3 input-bordered text-center p-0 text-xl grow" />
                <span class="btn btn-primary btn-outline text-2xl">-</span>
            </label>
        </div>
    </div>
</div>