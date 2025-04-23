import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';

const HomePage = () => {
  return (
    <div>
      <Header />
      <main>
        <h1>Welcome to Loja Dropshipping</h1>
        <section>
          <h2>Featured Products</h2>
          <div className="product-list">
            {/* Example Product Cards */}
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;