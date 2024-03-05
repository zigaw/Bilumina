import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Product.css';

const Product = ({ brand, code, name, price, discountPercent, imageUrl, id }) => {
    const defaultUrl = "https://cdn.babycenter.si/products/705x705/";
    const [currentImageUrl, setCurrentImageUrl] = useState(imageUrl[0].imagUrl); // Stanje za trenutni URL slike

    const handleImageHover = () => {
        // Spremeni URL slike, ko uporabnik hovera nad sliko
        setCurrentImageUrl(imageUrl[1].imagUrl);
    }

    const handleImageLeave = () => {
        setCurrentImageUrl(imageUrl[0].imagUrl);
    }

    const formattedPrice = price.replace(',', '.');
    const parsedPrice = parseFloat(formattedPrice);

    const brandAndCode = `${brand} | SKU: ${code}`;
    const parsedDiscount = parseInt(discountPercent, 10);

    let discountedPrice;
    let formattedDiscountedPrice;
    if (parsedDiscount !== 0) {
        discountedPrice = parsedPrice - (parsedPrice * (parsedDiscount / 100));
        discountedPrice = discountedPrice.toFixed(2);
        formattedDiscountedPrice = discountedPrice.replace(',', '.');
    } else {
        discountedPrice = parsedPrice;
    }

    return (
        <Link to={`/product/${code}/${id}`} className="product-link">
            <div className="element">
                <img
                    className={"displayImage"}
                    src={defaultUrl + currentImageUrl}
                    alt={name}
                    onMouseEnter={handleImageHover}
                    onMouseLeave={handleImageLeave}
                />
                <div className="text-container">
                    <div className="brand-code">{brandAndCode}</div>
                    <div className="name">{name}</div>
                    <div className="price">
                        {parsedDiscount > 0 ? (
                            <>
                                <span className="original-price">{price}€</span>
                                <span className="discounted-price">{formattedDiscountedPrice}€</span>
                            </>
                        ) : (
                            `${price}€`
                        )}
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default Product;
