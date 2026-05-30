# SmartFood - React Version

Dự án SmartFood được refactor từ HTML/CSS/JS thuần sang ReactJS với Vite.

## Tính năng đã implement

### ✅ Components
- **Header**: Logo, search bar, cart, wishlist, notifications
- **Sidebar**: Navigation menu với active state
- **MainContent**: Hero banner, categories, products, features
- **AIChat**: Chat assistant với minimize/maximize, send message

### ✅ Logic đã thêm
- **Search**: Tìm kiếm sản phẩm theo tên
- **Wishlist**: Thêm/xóa sản phẩm yêu thích
- **Cart**: Thêm sản phẩm vào giỏ hàng, đếm số lượng
- **Navigation**: Chuyển đổi giữa các menu
- **Chat**: Gửi tin nhắn, minimize/maximize chat box
- **Responsive**: Giữ nguyên responsive design từ bản gốc

## Cài đặt

```bash
npm install
```

## Chạy dự án

```bash
npm run dev
```

Mở trình duyệt tại: http://localhost:5173/

## Build production

```bash
npm run build
```

## Cấu trúc thư mục

```
src/
├── components/
│   ├── Header.jsx          # Header với search, cart, wishlist
│   ├── Sidebar.jsx         # Navigation sidebar
│   ├── MainContent.jsx     # Main content wrapper
│   ├── Categories.jsx      # Danh mục sản phẩm
│   ├── Products.jsx        # Danh sách sản phẩm
│   ├── Features.jsx        # Tính năng nổi bật
│   └── AIChat.jsx          # AI Chat assistant
├── assets/
│   └── images/             # Hình ảnh
├── App.jsx                 # Main App component
├── App.css                 # Styles (giữ nguyên từ bản gốc)
├── main.jsx               # Entry point
└── index.css              # Global styles
```

## State Management

Sử dụng React useState hooks để quản lý:
- `cartCount`: Số lượng sản phẩm trong giỏ
- `wishlistCount`: Số lượng sản phẩm yêu thích
- `searchQuery`: Từ khóa tìm kiếm
- `activeNav`: Menu đang active
- `wishlistItems`: Danh sách ID sản phẩm yêu thích
- `cartItems`: Danh sách sản phẩm trong giỏ

## Giao diện

✅ Giữ nguyên 100% giao diện từ bản HTML/CSS gốc
✅ Responsive design hoạt động tốt
✅ Animations và transitions được giữ nguyên

## Công nghệ sử dụng

- **React 18**: UI library
- **Vite**: Build tool (nhanh hơn CRA)
- **Font Awesome 6.4.0**: Icons
- **CSS thuần**: Giữ nguyên từ bản gốc

## Lưu ý

- Các hình ảnh local (chatbotxinchao.png, avatarbotchat.png, image copy.png) cần được đặt trong `src/assets/images/`
- Nếu thiếu hình, component sẽ tự động ẩn để không ảnh hưởng giao diện
