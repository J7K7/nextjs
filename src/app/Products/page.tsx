"use client"

import React from 'react';
import ProductModel from '@/Models/ProductModel';

const Products = ({ products }: { products: ProductModel[] }) => {
    return(
    <div>
      <h2>Product Page</h2>
      {products && Array.isArray(products) && products.length > 0 ? (
        <ul>
            {products.map(product => (
            <li key={product.id}>
                <p>{product.name}</p>
                <p>{product.mobileNo}</p>
            </li>
            ))}
        </ul>
        ) : (
            <p>No products available</p>
        )}
    </div>
    )
}

export default Products;