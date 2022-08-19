<script>
    import CategoryBar from "$lib/all_Products/CategoryBar.svelte";
    import SingleProduct from "$lib/all_Products/singleProduct.svelte";
</script>

<CategoryBar categoryName = "SALWAR KAMEEJ"/>


<div class="w-full bg-white ring-2
            grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-1">
    <div class="w-auto bg-green-900">
        Left Elements
    </div>
    <div class="w-auto flex">
        <!-- middle  Sub category -->
        <div class="text-black m-auto flex ">
            <ul class="flex flex-row flex-grow justify-center text-sm">
                <li><a class="font-bold text-red-700" href="/">Cotton</a></li>
                <li class="px-2">|</li>
                <li><a href="/">Silk</a></li>
                <li class="px-2">|</li>
                <li><a href="/">Jamdani</a></li>
                <li class="px-2">|</li>
                <li><a href="/">Katan</a></li>
                <li class="px-2">|</li>
                <li><a href="/">Cotton</a></li>
                <li class="px-2">|</li>
                <li><a href="/">Benarsee</a></li>
            </ul>
        </div>
    </div>
    <div class="w-auto bg-red-900">
        Riight Elements
    </div>
</div>

<div class="p-4 bg-white ring-2 
            grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    <SingleProduct  product ="Chuniya"
                    price =542/>
    <SingleProduct  product ="Shapla"
                    price =315/>
    <SingleProduct  product ="Shapla"
                    price =315/>
    <SingleProduct  product ="Shapla"
                    price =315/>
    <SingleProduct  product ="Chuniya"
                    price =542/>
    <SingleProduct  product ="Shapla"
                    price =315/>
    <SingleProduct  product ="Shapla"
                    price =315/>
    <SingleProduct  product ="Shapla"
                    price =315/>
</div>