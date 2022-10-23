export async function load ({fetch}){
    const Res = await fetch('http://localhost:1337/api/posts?populate[0]=FeaturedImage')
    const result = await Res.json()
    const products = result.data
    console.log(products)

    return{
        post: products,
    }
}