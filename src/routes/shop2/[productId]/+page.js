export async function load ({fetch,params}){
  let id = params.productId
  const Res = await fetch(`http://localhost:1337/api/posts/${id}`)
  const result = await Res.json()
  const products = result.data
  // console.log(products)

  return{
      post: products,
  }
}