import React from 'react';
import Product from './Product';
import jsonData from './transformer.json';
import './HomePage.css';

function HomePage() {
    const products = Object.values(jsonData.items.items.data);

    return (
        <div className="display">
            {products.map((product, index) => (
                <Product

                    key={index}
                    brand={product.brandNamesmall}
                    code={product.code}
                    name={product.nameSmall}
                    price={product.price}
                    discountPercent={product.discountPercent}
                    imageUrl={product.images}
                    id = {product.id}
                />
            ))}
        </div>
    );
}

export default HomePage;
