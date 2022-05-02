import React, { useContext } from 'react'
import { Product } from './Product'
import { AppContext } from '../context/AppContext'
import '../styles/componets/Products.css'

export const Products = () => {

    const { state, addToCart } = useContext(AppContext);
    const { products } = state

    const handleAddToCart = (product) => () => {
        addToCart(product)
    }

    return (
        <div className="Products">
            <div className="Products-items">
                {products.map(product => (
                    <Product key={product.id} product={product} handleClick={handleAddToCart} />
                ))}
            </div>
        </div>
    )
}