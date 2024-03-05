import React, { useState, useEffect } from 'react';
import data from './ProduktiJson/produkti.json'; // Uvoz celotnih podatkov

const ProductDetails = ({code, id }) => {
    const [productData, setProductData] = useState(null);

    useEffect(() => {
        // Iskanje pravega izdelka glede na ID
        const selectedProduct = data.find(product => product.data.id === id);
        setProductData(selectedProduct);
    }, [id]);

    return (
        <div>
            {productData ? (
                <div>
                    <h2>{productData.data.nameSmall}</h2>
                    <p>Blagovna znamka: {productData.data.brandNamesmall}</p>
                    <p>Cena: {productData.data.price}€</p>
                    {/* Dodajte ostale podatke, ki jih želite prikazati */}
                </div>
            ) : (
                <p>Nalaganje podatkov o izdelku...</p>
            )}
        </div>
    );
};

export default ProductDetails;
