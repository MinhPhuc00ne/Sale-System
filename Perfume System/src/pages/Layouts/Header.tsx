
import { useEffect, useState } from "react";
import "../../css/header.css";
import logo from "../../assets/LOGO.jpg";
import MenuBar from "./Menu-Bar";
import { Search, ShoppingBag, Heart, User } from "lucide-react";

const Header = () => {
  const [hideMenu, setHideMenu] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;

      if (currentY > lastScrollY && currentY > 120) {
        // scroll xuống
        setHideMenu(true);
      } else {
        // scroll lên
        setHideMenu(false);
      }

      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastScrollY]);

  return (
    <header className="lux-header">
      {/* ===== TOP BAR ===== */}
      <div className="lux-header-top">
        {/* LEFT – SLOGAN */}
        <div className="header-slogan">
          Luxury Fragrance House
        </div>

        {/* CENTER – LOGO */}
        <div className="header-logo">
          <img src={logo} alt="Logo" className="logo-img" />
        </div>

        {/* RIGHT – ICONS */}
        <div className="header-icons">
          <Search className="lux-icon" />
          <ShoppingBag className="lux-icon" />
          <Heart className="lux-icon" />
          <User className="lux-icon" />
        </div>
      </div>

      {/* ===== MENU ===== */}
      <div className={`menu-wrapper ${hideMenu ? "hide" : ""}`}>
        <MenuBar />
      </div>
    </header>
  );
};

export default Header;

