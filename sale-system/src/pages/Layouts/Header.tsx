import "../../css/header.css";

const Header = () => {
  return (
    <header className="header">
      <h2 className="logo">📚 BookStore</h2>

      <input className="search" placeholder="Tìm sách..." />

      <div className="header-actions">
        <button>Đăng nhập</button>
        <button>🛒 Giỏ hàng</button>
      </div>
    </header>
  );
};

export default Header;
