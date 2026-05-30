import React from 'react';

function Header({ cartCount, wishlistCount, notificationCount, searchQuery, setSearchQuery }) {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <div className="logo-icon">
            <i className="fas fa-leaf"></i>
          </div>
          <div className="logo-text">
            <h1>SmartFood</h1>
            <p>Fresh & Healthy</p>
          </div>
        </div>

        <div className="header-center">
          <div className="category-dropdown">
            <span>Danh mục</span>
            <i className="fas fa-chevron-down"></i>
          </div>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Tìm kiếm sản phẩm..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="search-btn">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>

        <div className="header-right">
          <div className="header-icon">
            <i className="fas fa-bell"></i>
            {notificationCount > 0 && <span className="badge">{notificationCount}</span>}
          </div>
          <div className="header-icon">
            <i className="fas fa-heart"></i>
            {wishlistCount > 0 && <span className="badge">{wishlistCount}</span>}
          </div>
          <div className="header-icon">
            <i className="fas fa-shopping-cart"></i>
            {cartCount > 0 && <span className="badge badge-success">{cartCount}</span>}
          </div>
          <div className="user-info">
            <img src="https://i.pravatar.cc/40" alt="User" />
            <span>Xin chào, Minh</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
