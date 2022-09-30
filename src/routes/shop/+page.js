// a +page.svelte receive its data from load function 
// which is inside +page.js file
// that means whatever we return here should get passed to the +page.svelte file 

// this is old way
// export const load = async({fetch}) =>{

//     const productRes = await fetch('https://dummyjson.com/products?limit=10')
//     const productData = await productRes.json()
//     const products = productData.products
    
//     const productResL = await fetch('https://sec.altersense.com/api/products')
//     const productDataL = await productResL.json()
    
//     return{
//         product: products,
//         productL: productDataL,
//     }
// }


// this is new way - async
export const load = async({fetch}) =>{

    const fetchProductsJSON = async ()=>{
        const productRes = await fetch('https://dummyjson.com/products?limit=10')
        const productData = await productRes.json()
        const products = productData.products
        return products
    }
    
    const fetchProductsLARAVEL = async ()=>{
        const productResL = await fetch('https://sec.altersense.com/api/products')
        const productDataL = await productResL.json()
        return productDataL
    }
    
    return{
        product: fetchProductsJSON(),
        productL: fetchProductsLARAVEL(),
    }
}
