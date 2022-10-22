export const load = ({ fetch, params}) => {
    // console.log(params)
  
    const fetchProduct = async (id) => {
      const res = await fetch(`http://localhost:1337/api/posts/${id}?populate[0]=FeaturedImage`)
      const data = await res.json()
      console.log('code is here')
      return data.data.attributes
    }


    // const fetchProduct = async (id) => {
    //   const res = await fetch(`https://dummyjson.com/products/${id}`)
    //   const data = await res.json()
    //   // console.log(data)
    //   return data
    // }
  
    return {
      product: fetchProduct(params.productId)
    }
  
  }