import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../css/header.css";
import MenuBar from "./Menu-Bar";

import { useCart } from "../../context/CartContext";
import { useFavorite } from "../../context/FavoriteContext";

import {
  Search,
  ShoppingBag,
  Heart,
  Truck,
  Coins,
} from "lucide-react";

const HIDE_AT = 80;
const SHOW_AT = 60;

const Header = () => {
  const [compact, setCompact] = useState(false);
  const navigate = useNavigate();

  const { totalQuantity, setOpenCart } = useCart();
  const { totalFavorite, setOpenFavorite } = useFavorite(); // ✅ mở drawer yêu thích

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (y > HIDE_AT && !compact) setCompact(true);
      if (y < SHOW_AT && compact) setCompact(false);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [compact]);

  return (
    <header className={`lux-header ${compact ? "compact" : ""}`}>
      <div className="lux-header-top">
        {/* LEFT */}
        <div className="header-slogan">
          To Touch Is To Feel
        </div>

        {/* CENTER */}
        <div
          className="header-logo"
          onClick={() => navigate("/")}
        >
          <span className="logo-text">DELTIK</span>
        </div>

        {/* RIGHT */}
        <div className="header-right">
          {/* TOP */}
          <div className="right-top">
            <div className="icon-item">
              <Truck size={18} />
            </div>

            <div className="coin-item">
              <Coins size={18} />
              <span>0 VNĐ</span>
            </div>

            {/* FAVORITE */}
            <div
              className="icon-item heart-icon"
              onClick={() => setOpenFavorite(true)}
            >
              <Heart size={18} />
              {totalFavorite > 0 && (
                <span className="heart-badge">
                  {totalFavorite}
                </span>
              )}
            </div>
          </div>

          {/* BOTTOM */}
          <div className="right-bottom">
            <div className="search-box">
              <Search size={18} />
              <input placeholder="Tìm kiếm sản phẩm..." />
            </div>

            <div
              className="auth-text"
              onClick={() => navigate("/auth")}
            >
              Đăng Nhập / Đăng Ký
            </div>

            {/* CART */}
            <div
              className="icon-item cart-icon"
              onClick={() => setOpenCart(true)}
            >
              <ShoppingBag size={20} />
              {totalQuantity > 0 && (
                <span className="cart-badge">
                  {totalQuantity}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* MENU */}
      <div className="menu-wrapper">
        <MenuBar />
      </div>
    </header>
  );
};

export default Header;
