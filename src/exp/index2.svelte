<script>
    function handleClick(string){
        alert(string)
    }
</script>

<main class="text-center p-10">
    <button class="btn btn-primary"
            on:click={()=>handleClick('something')}>
        Click Me!
    </button>

    <div    class="mt-10 w-full h-20 border bg-green-900"
            on:click|self|once={()=>handleClick('Green Clicked')}>
        Click Green
        <div    class="w-1/2 m-auto p-10 border bg-red-900"
                >
            You can't click the red
        </div>
    </div>
</main>
