import React from 'react'
import { Link } from 'react-router-dom'
import './productcard.css'

const ProductCard = ({ title, id, category, description, image, price }) => {
  return (
    <article className="product-card gap-3 px-3" id={id}>
      <header className='card-header'>
        <img src={image} alt={title} />
      </header>

      <section className='card-body d-flex flex-column gap-2'>
        <hr />
        <h6>{title}</h6>
        <div>
          <span className="badge text-bg-secondary">{category}</span>
        </div>
        <p>{description}</p>
      </section>
      
      <footer className='card-footer pb-2'>
        <h5>${Number(price).toFixed(2)}</h5>
        <Link to={`/product-detail/${id}`} className='btn btn-outline-dark'>Ver más</Link>
      </footer>
    </article>
  )
}

export default ProductCard