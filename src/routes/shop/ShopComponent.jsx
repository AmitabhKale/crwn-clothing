import React, { useContext } from 'react'
import { ProductsContext } from '../../context/ProductsContext'
import './ShopStyles.scss'
import ProductCard from '../../components/product-card/ProductCard'

const ShopComponent = () => {
    const {products} = useContext(ProductsContext);

  return (
    <div className='products-container'>
        {products.map((product) => (
            <ProductCard key={product.id} product={product} />
        ))}
    </div>
  )
}

export default ShopComponent