import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../../css/header.css";
import MenuBar from "./Menu-Bar";

import {
  Search,
  ShoppingBag,
  Heart,
  Truck,
  Coins,
} from "lucide-react";

const SCROLL_DELTA = 8;

const Header = () => {
  const [compact, setCompact] = useState(false);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;

      requestAnimationFrame(() => {
        const currentY = window.scrollY;
        const diff = currentY - lastScrollY.current;

        if (diff > SCROLL_DELTA && !compact) setCompact(true);
        if (diff < -SCROLL_DELTA && compact) setCompact(false);

        lastScrollY.current = currentY;
        ticking.current = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [compact]);

  return (
    <header className={`lux-header ${compact ? "compact" : ""}`}>
      {/* ================= TOP BAR ================= */}
      <div className="lux-header-top">
        {/* LEFT */}
        <div className="header-slogan">
          Luxury Fragrance House
        </div>

        {/* CENTER */}
        <div
          className="header-logo"
          onClick={() => navigate("/")}
          style={{ cursor: "pointer" }}
        >
          <span className="logo-text">
            DEL<span className="logo-i">I</span>K
          </span>
        </div>

        {/* RIGHT */}
        <div className="header-right">
          {/* TOP RIGHT */}
          <div className="right-top">
            <div
              className="icon-item"
              data-tooltip="Kiểm tra đơn hàng"
            >
              <Truck size={18} />
            </div>

            <div className="coin-item">
              <Coins size={18} />
              <span>0 VNĐ</span>
            </div>

            <div
              className="icon-item"
              data-tooltip="Sản phẩm yêu thích"
            >
              <Heart size={18} />
            </div>
          </div>

          {/* BOTTOM RIGHT */}
          <div className="right-bottom">
            <div className="search-box">
              <Search size={18} />
              <input
                type="text"
                placeholder="Tìm kiếm sản phẩm..."
              />
            </div>

            {/* AUTH */}
            <div
              className="auth-text"
              onClick={() => navigate("/auth")}
            >
              Đăng Nhập / Đăng Ký
            </div>

            <div
              className="icon-item"
              data-tooltip="Giỏ hàng"
            >
              <ShoppingBag size={20} />
            </div>
          </div>
        </div>
      </div>

      {/* ================= MENU ================= */}
      <div className="menu-wrapper">
        <MenuBar />
      </div>
    </header>
  );
};

export default Header;
