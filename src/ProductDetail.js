// ProductDetail.js
import React from 'react';

const ProductDetail = ({ match }) => {
    const { id } = match.params; // Dobi id izdelka iz parametrov poti
    return (
        <div>
            <h2>Podrobnosti izdelka {id}</h2>
            {/* Dodajte kodo za prikaz podrobnosti izdelka glede na id */}
        </div>
    );
}

export default ProductDetail;
