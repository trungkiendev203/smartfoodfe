import React from 'react';
import Categories from './Categories';
import Products from './Products';
import Features from './Features';

function MainContent({ searchQuery, wishlistItems, onToggleWishlist, onAddToCart }) {
  return (
    <main className="main-content">
      {/* Hero Banner */}
      <section className="hero-banner" style={{ padding: 0, background: 'none' }}>
        <img
          src="/image copy.png"
          alt="Hero Banner"
          style={{
            width: '100%',
            height: 'auto',
            borderRadius: '16px',
            objectFit: 'cover',
            display: 'block',
          }}
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />
      </section>

      <Categories />

      <Products
        searchQuery={searchQuery}
        wishlistItems={wishlistItems}
        onToggleWishlist={onToggleWishlist}
        onAddToCart={onAddToCart}
      />

      <Features />
    </main>
  );
}

export default MainContent;
