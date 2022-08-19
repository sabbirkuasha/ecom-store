<script>
    import CategoryBar from "$lib/all_Products/CategoryBar.svelte";
    import SingleProduct from "$lib/all_Products/singleProduct.svelte";
</script>

<CategoryBar categoryName = "SALWAR KAMEEJ"/>

<div class="w-full flex flex-row bg-white justify-between shadow-xl ring-1">
    <!--left - breadcrumb -->
    <div class="text-black flex-grow p-2">
        <div class="text-sm breadcrumbs hidden lg:inline-flex">
            <ul>
                <li><a href="/">Home</a></li> 
                <li><a href="/">Women</a></li> 
                <li class="font-bold text-red-700">Salwar-Kameez</li>
            </ul>
        </div>

        <!-- The button to open modal -->
        <label for="my-modal-4" class="btn hidden">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            </svg>
        </label>

        <!-- Put this part before </body> tag -->
        <input type="checkbox" id="my-modal-4" class="modal-toggle" />
        <label for="my-modal-4" class="modal cursor-pointer">
        <label class="modal-box relative" for="">
            <h3 class="text-lg font-bold">Congratulations random Internet user!</h3>
            <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
        </label>
        </label>
    </div>
    <!-- middle  Sub category -->
    <div class="text-black p-2 md:w-2/4 sm:w-auto m-auto border hidden">
        <ul class="flex flex-row flex-grow justify-center">
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
    <!-- right - filters -->
    <div class="text-black p-2 w-1/4 text-right hidden md:flex justify-end space-x-7">
        <div class="flex flex-row">
           <span class="m-auto"> Filters </span>
           <span class="m-auto">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clip-rule="evenodd" />
              </svg>
           </span>
            
        </div>

        <div class="flex flex-row">
        <span class=" m-auto"> Sort By </span>
           <span class=" m-auto">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
            </svg>
        </div>
    </div>
</div>

<div class="p-4 bg-white ring-2 
            grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
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