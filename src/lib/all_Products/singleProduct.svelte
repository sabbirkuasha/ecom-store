<script>
    export let product ="product"
    export let price = 542
    let curImg = ""
    export let img = "https://deshal.net/wp-content/uploads/2022/06/Himadri-1-104482-3.jpg"
    export const img2 = "https://deshal.net/wp-content/uploads/2022/06/Himadri-1-104482-1.jpg"

    curImg = img
    let mouseEnterF = ()=>{
        curImg = img2
    }
    let mouseLeaveF = ()=>{
        curImg = img
    }
</script>
<div class="card w-auto shadow-md rounded-md">
    <figure class="">

        <!-- only on this when New badge is switched off -->
        <!-- <div class="w-12 h-12 bg-red-700 absolute left-0 bottom-0 ml-4 mb-20 flex">
            <span class="m-auto text-white text-center">NEW</span> 
        </div> -->
       
        <img class="w-auto h-auto" src={curImg} alt="Shoes" />
    </figure>
    <div class=" ml-2 mt-2 rounded-xl">
        <!-- only on this when New Overlay box is switched off -->
        <div class="badge badge-outline uppercase badge-error text-xs">New</div>
        <!-- <div class="badge badge-secondary">Eid Collection</div> -->
        <h2 class="text-black font-bold">{product}</h2>
        <h2 class="text-black pb-1">Tk. {price}</h2>
    </div>
</div>