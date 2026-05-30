import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import AIChat from './components/AIChat';

function App() {
  const [cartCount, setCartCount] = useState(5);
  const [wishlistCount, setWishlistCount] = useState(0);
  const [notificationCount, setNotificationCount] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeNav, setActiveNav] = useState('home');
  const [wishlistItems, setWishlistItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
    setCartCount(cartCount + 1);
  };

  const handleToggleWishlist = (productId) => {
    if (wishlistItems.includes(productId)) {
      setWishlistItems(wishlistItems.filter(id => id !== productId));
      setWishlistCount(wishlistCount - 1);
    } else {
      setWishlistItems([...wishlistItems, productId]);
      setWishlistCount(wishlistCount + 1);
    }
  };

  return (
    <div className="App">
      <Header
        cartCount={cartCount}
        wishlistCount={wishlistCount}
        notificationCount={notificationCount}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <div className="main-container">
        <Sidebar activeNav={activeNav} setActiveNav={setActiveNav} />

        <MainContent
          searchQuery={searchQuery}
          wishlistItems={wishlistItems}
          onToggleWishlist={handleToggleWishlist}
          onAddToCart={handleAddToCart}
        />

        <AIChat />
      </div>
    </div>
  );
}

export default App;
