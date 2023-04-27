const ProductDetails = ({product}) => {
  console.log(product)
  return (
    <div>ProductDetails</div>
  )
}
export default ProductDetails


export async function getServerSideProps ({params}){
  const res = await fetch(`https://fakestoreapi.com/products/${params.id}`)
  const product = await res.json()

  return {
    props: {
      product
    }
  }
}