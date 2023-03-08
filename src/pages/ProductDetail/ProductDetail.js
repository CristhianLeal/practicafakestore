import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './product-detail.css'

const ProductDetail = () => {
  const params = useParams()
  const [product, setProduct] = useState(null)

  const fetchProduct = async (id) => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`)
    const data = await response.json()
    
    setProduct(data)
  }

  useEffect(() => {
    fetchProduct(params.id)
  }, [params.id])

  if (!product) return <h3 className='text-white text-center mt-3'>Cargando producto...</h3>

  return (
    <section className='product-detail-container container p-4 mt-5'>

      <div className='row'>
        <img src={product.image} className='col-4' alt={product.title}/>

        <div className='col-8'>
          <h3> {product.title} </h3>
          <p> {product.description} </p>
          <span class="badge bg-secondary"> {product.category} </span>
          <h4 className='mt-3'>${product.price}</h4>
          
          <div className='d-flex gap-4 justify-content-end align-items-center'>
            <p className='m-0'> Hay {product.rating.count} disponible!! </p>
            <button className='btn btn-outline-success'> Comprar Ahora !! </button>
          </div>
          
        </div>


      </div>
    </section>
  )
}

export default ProductDetail