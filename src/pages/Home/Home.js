import React, { useEffect, useState } from 'react'
import ProductCard from '../../components/ProductCard/ProductCard'

const Home = () => {
  const [products, setProducts] = useState([])

  const fetchProducts = async () => {
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json()
    setProducts(data)
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div className='mt-3 d-flex justify-content-center flex-wrap gap-3'>
      {
        products.length === 0 
          ? <h3 className='mt-5 text-white'> Cargando productos... </h3>
          : products?.map((product) => (<ProductCard key={product.id} {...product} />))
      }
    </div>
  )
}

export default Home