import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProductsList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
    axios.get('https://dummyjson.com/products')
        .then(response => {
        setProducts(response.data);
        });
    }, []);

    return (
        <div>
            <h1>Lista de productos</h1>
            {products.map(product => (
            <div key={product.id}>
                <h2>{product.name}</h2>
                <p>Price: {product.price}</p>
                <p>Category: {product.category}</p>
            </div>
            ))}
        </div>
    );
}

export default ProductsList;