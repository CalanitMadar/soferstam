import React from 'react';
import '../../style/products/ProductItem.css';

const ProductItem = ({ title, imageSrc, description }) => {
    return (
        <div className="product-item">
            <h3>{title}</h3>
            <img src={imageSrc} alt={title} />
            <p>{description}</p>
        </div>
    );
}

export default ProductItem;
