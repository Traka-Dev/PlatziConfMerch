import React from 'react'
import { Product } from './Product'
import '../styles/componets/Products.css'

export const Products = ({ products }) => {

    return (
        <div className="Products">
            <div className="Products-items">
                {products.map(product => (
                    <Product key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}