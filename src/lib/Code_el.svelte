<script>
    export let code1 = "code"
    export let description = ""
</script>
<div class="mt-5 shadow-xl mockup-code w-1/2 m-auto ring-slate-600 ring-2">
    {description}
    <slot name="description">
        
    </slot>
    <pre class="bg-warning-content"><code>{code1}</code></pre>
</div>