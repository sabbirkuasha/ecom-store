export const load = async ({fetch})=>{
    // console.log(fetch)
    const Res = await fetch('http://localhost:1337/api/posts?populate[0]=FeaturedImage')
    const result = await Res.json()
    // console.log(result)
    const products = result.data

    return{
        post: products,
    }
}