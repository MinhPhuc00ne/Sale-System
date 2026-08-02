# 🌹 DELIX - High-End Perfume & Fragrance E-Commerce Platform

[![React](https://img.shields.io/badge/React-19.0-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.2-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?logo=vercel&logoColor=white)](https://perfumesystem-7az1wnbfh-phucgammer012345-8352s-projects.vercel.app/)

**DELIX** là hệ thống thương mại điện tử chuyên nghiệp dành cho dòng nước hoa cao cấp, được phát triển bằng React 19, TypeScript và Vite. Nền tảng kết hợp giao diện sang trọng, mượt mà cùng trợ lý tư vấn AI thông minh và tích hợp bản đồ tìm kiếm boutique.

🌐 **Demo trực tiếp:** [https://perfumesystem-7az1wnbfh-phucgammer012345-8352s-projects.vercel.app/](https://perfumesystem-7az1wnbfh-phucgammer012345-8352s-projects.vercel.app/)

---

## ✨ Tính Năng Nổi Bật (Key Features)

### 🛒 1. Mua Sắm & Trải Nghiệm Khách Hàng
- **Danh mục & Chi tiết sản phẩm**: Hiển thị bộ sưu tập nước hoa cao cấp với bộ lọc, chi tiết nốt hương và mô tả sản phẩm.
- **Giỏ hàng & Danh sách yêu thích (Cart & Wishlist Drawer)**: Quản lý giỏ hàng linh hoạt, lưu trữ sản phẩm yêu thích thông qua `CartContext` & `FavoriteContext`.
- **Thanh toán (Checkout)**: Quy trình đặt hàng tiện lợi và giao diện xác nhận chuyên nghiệp.

### 🤖 2. Trợ Lý Tư Vấn Nước Hoa AI (AI Fragrance Assistant)
- Tích hợp chatbot tư vấn thông minh giúp đề xuất mùi hương theo cá tính, phong cách và hoàn cảnh sử dụng.
- Định vị và hướng dẫn tìm kiếm các cửa hàng/boutique DELIX gần nhất.

### 🗺️ 3. Tích Hợp Bản Đồ & Giao Hàng (Google Maps & Delivery)
- Sử dụng `@react-google-maps/api` để hiển thị cửa hàng boutique trực quan trên bản đồ.
- Theo dõi trạng thái và vị trí giao hàng tiện lợi với `DeliveryContext`.

### 🎨 4. Giao Diện & Animation Cao Cấp
- Thiết kế hiện đại, sang trọng theo phong cách luxury brand.
- Sử dụng `framer-motion` cho các hiệu ứng chuyển trang, drawer slide-in và tương tác siêu mượt.

### 📄 5. Các Trang Thương Hiệu & Thông Tin
- **Brand & About Us**: Câu chuyện thương hiệu, triết lý sáng tạo.
- **Blog & News**: Tin tức xu hướng nước hoa và nghệ thuật mùi hương.
- **Recruitment & Contact**: Trang tuyển dụng nhân sự và biểu mẫu liên hệ trực tiếp.
- **Auth Page**: Trang đăng nhập / đăng ký tài khoản người dùng độc lập.

---

## 🛠️ Công Nghệ Sử Dụng (Tech Stack)

- **Frontend Framework:** React 19, TypeScript
- **Build Tool:** Vite 7
- **Routing:** React Router v7 (`react-router-dom`)
- **State Management:** React Context API (`CartContext`, `FavoriteContext`, `DeliveryContext`)
- **UI & Animations:** Framer Motion, Lucide React (Icons), Custom CSS / CSS Modules
- **Maps Integration:** `@react-google-maps/api`
- **Deployment:** Vercel

---

## 📁 Cấu Trúc Dự Án (Project Structure)

```text
Perfume System/
├── public/                # Tài nguyên tĩnh (images, icons, favicon)
├── src/
│   ├── assets/            # Hình ảnh sản phẩm, banner thương hiệu
│   ├── components/        # Các thành phần giao diện (Products, ProductDetail, AIChat, CartDrawer, Checkout, v.v.)
│   ├── context/           # React Context (CartContext, FavoriteContext, DeliveryContext)
│   ├── data/              # Dữ liệu mẫu (mục sản phẩm, danh mục nốt hương)
│   ├── pages/             # Layouts chính & Auth page
│   │   ├── Auth/          # Đăng nhập & Đăng ký
│   │   └── Layouts/       # Header, Footer, Menu-Bar, MainLayout
│   ├── router/            # Cấu hình tuyến đường (React Router v7)
│   ├── styles/ & css/     # Style quy định giao diện & thiết kế
│   ├── App.tsx            # Root component
│   └── main.tsx           # Entry point của ứng dụng
├── package.json           # Danh sách dependencies & scripts
├── vite.config.ts         # Cấu hình Vite
└── README.md              # Tài liệu hướng dẫn dự án
```

---

## 🚀 Hướng Dẫn Cài Đặt & Chạy Cục Bộ (Local Setup)

### Yêu cầu tiên quyết
- **Node.js**: phiên bản `>= 18.0.0`
- **npm** hoặc **yarn** / **pnpm**

### Các bước thực hiện

1. **Clone repository về máy:**
   ```bash
   git clone https://github.com/MinhPhuc00ne/sale-system.git
   cd "Perfume System"
   ```

2. **Cài đặt các gói phụ thuộc (Dependencies):**
   ```bash
   npm install
   ```

3. **Khởi chạy môi trường phát triển (Development mode):**
   ```bash
   npm run dev
   ```
   Truy cập ứng dụng tại địa chỉ: `http://localhost:5173`

4. **Build dự án cho Production:**
   ```bash
   npm run build
   ```

---

## 🌐 Deploy Trên Vercel

Dự án đã được tự động hóa quy trình CI/CD và triển khai trên Vercel:
- **Live URL:** [https://perfumesystem-7az1wnbfh-phucgammer012345-8352s-projects.vercel.app/](https://perfumesystem-7az1wnbfh-phucgammer012345-8352s-projects.vercel.app/)

---

## 📝 Giấy Phép (License)

Dự án phục vụ mục đích học tập và phát triển cá nhân. All rights reserved.
