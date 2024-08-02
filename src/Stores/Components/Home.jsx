
import React from 'react';
import './Home.css'
import Landingpage from '../Pages/Landingpage';

const Home = () => {
    return (
        <>
        <Landingpage/>
        <div className="homepage">
            <header className="header">
                <div className="logo">E-Shop</div>
                <nav className="nav">
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#products">Products</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
                <div className="cart">
                    <button>Cart</button>
                </div>
            </header>
            <main className="main">
                <div className="banner">
                    <h1>Welcome to E-Shop</h1>
                    <p>Your one-stop shop for everything!</p>
                    <button className="shop-now-btn">Shop Now</button>
                </div>
                <section className="products" id="products">
                    <h2>Featured Products</h2>
                    <div className="product-list">
                        <div className="product">
                            <img src="product1.jpg" alt="Product 1" />
                            <h3>Product 1</h3>
                            <p>$19.99</p>
                        </div>
                        <div className="product">
                            <img src="product2.jpg" alt="Product 2" />
                            <h3>Product 2</h3>
                            <p>$29.99</p>
                        </div>
                        {/* Add more products as needed */}
                    </div>
                </section>
            </main>
            <footer className="footer">
                <p>&copy; 2024 E-Shop. All rights reserved.</p>
            </footer>
        </div>
        </>
    );
};

export default Home
