import React from 'react';

function Sidebar({ activeNav, setActiveNav }) {
  const navItems = [
    { id: 'home', icon: 'fa-home', label: 'Trang chủ' },
    { id: 'store', icon: 'fa-store', label: 'Cửa hàng' },
    { id: 'category', icon: 'fa-th', label: 'Danh mục' },
    { id: 'flash-sale', icon: 'fa-bolt', label: 'Flash Sale', badge: 'HOT', badgeClass: 'badge-hot' },
    { id: 'wishlist', icon: 'fa-heart', label: 'Yêu thích' },
    { id: 'orders', icon: 'fa-file-alt', label: 'Đơn hàng' },
    { id: 'ai-assistant', icon: 'fa-robot', label: 'AI Assistant', badge: 'New', badgeClass: 'badge-new' },
  ];

  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        {navItems.map((item) => (
          <a
            key={item.id}
            href="#"
            className={`nav-item ${activeNav === item.id ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              setActiveNav(item.id);
            }}
          >
            <i className={`fas ${item.icon}`}></i>
            <span>{item.label}</span>
            {item.badge && <span className={item.badgeClass}>{item.badge}</span>}
          </a>
        ))}
      </nav>

      <div className="chatbot">
        <div
          className="custom-speech-bubble"
          style={{
            background: 'white',
            padding: '14px 18px',
            borderRadius: '20px',
            fontSize: '14px',
            color: '#1f2937',
            lineHeight: '1.6',
            fontWeight: '600',
            boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
            position: 'relative',
            marginBottom: '8px',
            transform: 'translateX(20%)',
            zIndex: 2,
            display: 'inline-block',
            width: '85%',
          }}
        >
          Xin chào! 👋<br />
          Mình có thể giúp gì<br />
          cho bạn hôm nay?
          <div
            style={{
              position: 'absolute',
              bottom: '-12px',
              left: '30px',
              borderWidth: '12px 12px 0',
              borderStyle: 'solid',
              borderColor: 'white transparent transparent transparent',
              filter: 'drop-shadow(0 2px 1px rgba(0,0,0,0.02))',
            }}
          ></div>
        </div>
        <div
          className="chatbot-message"
          style={{
            padding: 0,
            background: 'none',
            textAlign: 'center',
            transform: 'translateX(-20%) scale(1.15)',
            transformOrigin: 'center bottom',
          }}
        >
          <img
            src="/chatbotxinchao.png"
            alt="Bot Image"
            style={{ maxWidth: '100%', display: 'inline-block' }}
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
