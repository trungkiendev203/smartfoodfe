import React from 'react';

function Products({ searchQuery, wishlistItems, onToggleWishlist, onAddToCart }) {
  const products = [
    {
      id: 1,
      name: 'Táo đỏ nhập khẩu',
      price: 85000,
      oldPrice: 165000,
      rating: 4.9,
      image: '/taodo.png',
      badge: 'HOT',
      badgeClass: 'hot',
    },
    {
      id: 2,
      name: 'Bông cải xanh Đà Lạt',
      price: 35000,
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&q=80&w=200',
    },
    {
      id: 3,
      name: 'Cá hồi phi lê',
      price: 250000,
      oldPrice: 500000,
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?auto=format&fit=crop&q=80&w=200',
      badge: '-50%',
      badgeClass: 'sale',
    },
    {
      id: 4,
      name: 'Sữa tươi Vinamilk',
      price: 28000,
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&q=80&w=200',
    },
    {
      id: 5,
      name: 'Đồ hộp',
      price: 32000,
      rating: 4.9,
      image: '/dohop.png',
    },
  ];

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const formatPrice = (price) => {
    return price.toLocaleString('vi-VN') + 'đ';
  };

  return (
    <section className="products">
      <h3>Sản phẩm gợi ý cho bạn</h3>
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            {product.badge && (
              <div className={`product-badge ${product.badgeClass}`}>{product.badge}</div>
            )}
            <button
              className={`product-wishlist ${wishlistItems.includes(product.id) ? 'active' : ''}`}
              onClick={() => onToggleWishlist(product.id)}
            >
              <i className={wishlistItems.includes(product.id) ? 'fas fa-heart' : 'far fa-heart'}></i>
            </button>
            <div className="product-image">
              <img src={product.image} alt={product.name} style={{ borderRadius: '12px' }} />
            </div>
            <div className="product-info">
              <h4>{product.name}</h4>
              <div className="product-price">
                <span className="price-current">{formatPrice(product.price)}</span>
                {product.oldPrice && (
                  <span className="price-old">{formatPrice(product.oldPrice)}</span>
                )}
              </div>
              <div className="product-footer">
                <div className="product-rating">
                  <i className="fas fa-star"></i>
                  <span>{product.rating}</span>
                </div>
                <button className="btn-add-cart" onClick={() => onAddToCart(product)}>
                  <i className="fas fa-shopping-cart"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;
