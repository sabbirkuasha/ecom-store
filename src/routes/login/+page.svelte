<script>
    import PageAnimate from "../../lib/PageAnimate.svelte";
</script>

<PageAnimate>

    <main>
        <h1>
            Login page content
        </h1>

        <div class="text-center p-10">
            <h1 class="p-5 font-bold">Login Form</h1>
            <input  class="input input-bordered input-info w-full max-w-xs"
                    type="email" 
                    name="email" 
                    placeholder="input your email">
            <input  class="input input-bordered input-info w-full max-w-xs"
                    type="text" 
                    name="username" 
                    placeholder="input your username">
            <input  class="mt-5 input input-bordered input-info w-full max-w-xs"
                    type="password" 
                    name="password" 
                    placeholder="input your password">

            <button class="btn btn-secondary">Login</button>
        </div>
        
    </main>
</PageAnimate>