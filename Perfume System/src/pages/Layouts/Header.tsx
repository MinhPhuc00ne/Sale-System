import { useEffect, useState, useRef } from "react";
import "../../css/header.css";
import MenuBar from "./Menu-Bar";
import { Search, ShoppingBag, Heart, User } from "lucide-react";

const SCROLL_DELTA = 8; // ngưỡng chống rung (px)

const Header = () => {
  const [compact, setCompact] = useState(false);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      if (ticking.current) return;

      ticking.current = true;

      requestAnimationFrame(() => {
        const currentY = window.scrollY;
        const diff = currentY - lastScrollY.current;

        // scroll xuống đủ mạnh → ẩn
        if (diff > SCROLL_DELTA && !compact) {
          setCompact(true);
        }

        // scroll lên đủ mạnh → hiện
        if (diff < -SCROLL_DELTA && compact) {
          setCompact(false);
        }

        lastScrollY.current = currentY;
        ticking.current = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [compact]);

  return (
    <header className={`lux-header ${compact ? "compact" : ""}`}>
      <div className="lux-header-top">
        <div className="header-slogan">Luxury Fragrance House</div>

        <div className="header-logo">
          <span className="logo-text">
            DEL<span className="logo-i">I</span>K
          </span>
        </div>

        <div className="header-icons">
          <Search className="lux-icon" />
          <ShoppingBag className="lux-icon" />
          <Heart className="lux-icon" />
          <User className="lux-icon" />
        </div>
      </div>

      <div className="menu-wrapper">
        <MenuBar />
      </div>
    </header>
  );
};

export default Header;
