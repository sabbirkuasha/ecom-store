<script>
    export let product ="product"
    export let price =542
</script>
<div class="card w-96 shadow-xl rounded-none">
    <figure>
        <div class="w-12 h-12 bg-red-700 absolute left-0 bottom-0 ml-4 mb-20 flex">
            <span class="m-auto text-white text-center">NEW</span> 
        </div>
        <img src="https://placeimg.com/432/540/arch" alt="Shoes" />
    </figure>
    <div class="">
      <h2 class="text-black font-bold px-2 p-1">{product}</h2>
      <h2 class="text-black px-2 p-1">Tk. {price}</h2>
    </div>
</div>