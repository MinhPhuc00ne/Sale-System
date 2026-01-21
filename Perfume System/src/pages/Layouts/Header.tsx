import { useEffect, useState } from "react";
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

const HIDE_AT = 80; // cuộn xuống bao nhiêu px thì ẩn
const SHOW_AT = 60; // gần đầu trang thì hiện lại

const Header = () => {
  const [compact, setCompact] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;

      // Ẩn dứt khoát
      if (y > HIDE_AT && !compact) {
        setCompact(true);
      }

      // Chỉ hiện lại khi gần top
      if (y < SHOW_AT && compact) {
        setCompact(false);
      }
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
          To Touch Is To Feel
        </div>

        {/* CENTER */}
        <div
          className="header-logo"
          onClick={() => navigate("/")}
        >
          <span className="logo-text">
            DELTIK
          </span>
        </div>

        {/* RIGHT */}
        <div className="header-right">
          {/* TOP RIGHT */}
          <div className="right-top">
            <div className="icon-item" data-tooltip="Kiểm tra đơn hàng">
              <Truck size={18} />
            </div>

            <div className="coin-item">
              <Coins size={18} />
              <span>0 VNĐ</span>
            </div>

            <div className="icon-item" data-tooltip="Yêu thích">
              <Heart size={18} />
            </div>
          </div>

          {/* BOTTOM RIGHT */}
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

            <div className="icon-item" data-tooltip="Giỏ hàng">
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
