<script>
    import CategoryBar from "$lib/all_Products/CategoryBar.svelte";
    import SingleProduct from "$lib/all_Products/singleProduct.svelte";

    let products = [
        {   name: 'Himadri-1', price: '3000', badge: null, 
            img: 'https://deshal.net/wp-content/uploads/2022/06/Himadri-1-104482-3.jpg',  
            img2: 'https://deshal.net/wp-content/uploads/2022/06/Himadri-1-104482-1.jpg'  
        },
        {   name: 'Brahma', price: '3550', badge: ['New'], 
            img: 'https://deshal.net/wp-content/uploads/2022/06/Brahma-104402-3.jpg',  
            img2: 'https://deshal.net/wp-content/uploads/2022/06/Brahma-104402-1.jpg'  
        },
        {   name: 'Nodika', price: '3900', badge: ['New'], 
            img: 'https://deshal.net/wp-content/uploads/2022/06/Nodika-103920-3.jpg',  
            img2: 'https://deshal.net/wp-content/uploads/2022/06/Nodika-103920-1.jpg'  
        },
        {   name: 'Tinti', price: '3200', badge: ['New'], 
            img: 'https://deshal.net/wp-content/uploads/2022/06/Tinti-1-103742-3.jpg',  
            img2: 'https://deshal.net/wp-content/uploads/2022/06/Tinti-1-103742-4.jpg'  
        },
        {   name: 'Komolika-2', price: '3000', badge: ['Old'], 
            img: 'https://deshal.net/wp-content/uploads/2022/06/Komolika-2-103768-4.jpg',  
            img2: 'https://deshal.net/wp-content/uploads/2022/06/Komolika-2-103768-1.jpg'  
        },
        {   name: 'Pushpo Shakha-2', price: '2750', badge: ['Old','Sale'], 
            img: 'https://deshal.net/wp-content/uploads/2022/06/Pushpo-Shakha-2-103745-4.jpg',  
            img2: 'https://deshal.net/wp-content/uploads/2022/06/Pushpo-Shakha-2-103745-1.jpg'  
        },
        {   name: 'Shikhondi', price: '3400', badge: ['Old','Sale'], 
            img: 'https://deshal.net/wp-content/uploads/2022/06/Shikhondi-103760-4.jpg',  
            img2: 'https://deshal.net/wp-content/uploads/2022/06/Shikhondi-103760-1.jpg'  
        },
        {   name: 'Boruna', price: '3400', badge: null, 
            img: 'https://deshal.net/wp-content/uploads/2022/06/boruna.jpg',  
            img2: 'https://deshal.net/wp-content/uploads/2022/06/Boruna-103755-1.jpg'  
        },
        {   name: 'Orsha', price: '3300', badge: null, 
            img: 'https://deshal.net/wp-content/uploads/2022/06/Orsha-103700-3.jpg',  
            img2: 'https://deshal.net/wp-content/uploads/2022/06/Orsha-103700-4.jpg'  
        },
    ]
</script>

<CategoryBar categoryName = "SALWAR KAMEEJ"/>

<!-- Breadcrumb | Sub-Categories | Filter  -->
<div class="w-full bg-white
            grid grid-cols-3  md:grid-cols-2 lg:grid-cols-3 gap-1">

    <!-- Left - breadcrumb -->
    <div class="w-auto order-1 col-span-2 pl-5 md:col-span-1 lg:col-span-1">
        <div class="text-xs breadcrumbs lg:inline-flex">
            <ul>
                <li><a href="/">Home</a></li> 
                <li><a href="/">Women</a></li> 
                <li class="font-bold text-red-700">Salwar-Kameez</li>
            </ul>
        </div>
    </div>

    <!-- Middle - Sub-Categories Link -->
    <div class="w-auto flex order-3 lg:order-2 col-span-3 lg:col-span-1 align-middle">
        <!-- middle  Sub category -->
        <div class="text-black m-auto flex ">
            <ul class="flex flex-row flex-grow justify-center text-xs">
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

    <!-- right - Filters -->
    <div class="w-auto order-2 flex justify-end pr-3">
        <!--1st Element -Filter -->
        <div class="text-black p-2 text-right md:flex justify-end space-x-7 text-sm">
            <button class="flex flex-row" href="/Women/Salwar-Kameez">
               <span class="m-auto hidden sm:flex"> Filters </span>
               <span class="m-auto">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clip-rule="evenodd" />
                  </svg>
               </span>
            </button>
        </div>
        <!--2nd Element - Sort By -->
        <div class="text-black p-2 text-right md:flex justify-end space-x-7 text-sm">
            <button class="flex flex-row" href="/Women/Salwar-Kameez">
               <span class="m-auto hidden sm:flex"> Sort-by </span>
               <span class="m-auto">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
            </svg>
               </span>
            </button>
        </div>
    </div>
</div>

<div class="p-4 bg-white 
            grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

    {#each products as product (product.name)}
        <SingleProduct {product}/>
    {/each}
</div>