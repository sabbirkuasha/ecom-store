export const load = async ()=>{
    const Res = await fetch('http://localhost:1337/api/posts?populate[0]=FeaturedImage')
    const result = await Res.json()
    // console.log(result)
    const products = result.data

    return{
        post: products,
    }
}
// export const load = async ()=>{
//     const Res = await fetch('https://dummyjson.com/products?limit=10&skip=10&select=title,price')
//     const result = await Res.json()
//     const products = result.products

//     return{
//         product: products,
//     }
// }