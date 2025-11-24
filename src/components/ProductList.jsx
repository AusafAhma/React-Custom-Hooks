import React from 'react';
import useFetch from '../hooks/useFetch';

const ProductList = () => {
    const { data, loading, error } = useFetch('https://api.escuelajs.co/api/v1/products');

    if (loading) {
        return (
            <div className="loading-container">
                <div className="spinner"></div>
                <p>Loading products...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="error-container">
                <p>Error: {error}</p>
                <button onClick={() => window.location.reload()}>Retry</button>
            </div>
        );
    }

    return (
        <div className="product-list-container">
            <h1>Premium Collection</h1>
            <div className="product-grid">
                {data && data.slice(0, 12).map((product) => (
                    <div key={product.id} className="product-card">
                        <div className="image-container">
                            <img src={product.images[0]} alt={product.title} onError={(e) => { e.target.src = 'https://placehold.co/600x400?text=No+Image' }} />
                        </div>
                        <div className="product-info">
                            <h3>{product.title}</h3>
                            <p className="price">${product.price}</p>
                            <button className="add-to-cart">Add to Cart</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
