import React, { useState } from 'react';
//import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { RouterProvider } from "react-router-dom";
import HomePage from './HomePage';
import Root from './routes/root';
import ProductDetails from "./ProductDetails";

function App() {
    const [showMessage, setShowMessage] = useState(false);

    const toggleMessage = () => {
        setShowMessage(!showMessage);
    }

    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <nav className="blue-menu">
                        <div className="cart-container"
                             onMouseEnter={() => setShowMessage(true)}
                             onMouseLeave={() => setShowMessage(false)}
                        >
                            <FontAwesomeIcon icon={faCartShopping} className="cart-icon" />
                            {showMessage && (
                                <div className="popup">Vaša košarica je prazna</div>
                            )}
                        </div>
                    </nav>
                </header>
                <body>
                <Routes>
                    <Route path="/" element={<Root />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/product/:code/:id" element={<ProductDetails />} />
                </Routes>
                </body>
            </div>
        </Router>
    );
}

export default App;
