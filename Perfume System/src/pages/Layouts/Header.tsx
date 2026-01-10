import { useState } from "react";
import "../../css/header.css";
import logo from "../../assets/LOGO.jpg";
import avatar from "../../assets/avata.jpg";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <header className="lux-header">
        {/* LEFT */}
        <div className="header-left">
          <img src={logo} alt="Logo" className="logo-img" />
          <span className="slogan">Luxury Fragrance House</span>
        </div>

        {/* RIGHT */}
        <div className="header-right">
          <i className="icon">🔍</i>
          <i className="icon">🛒</i>
          <i className="icon">⭐</i>
          <img src={avatar} alt="Profile" className="avatar" />
          <i className="icon" onClick={() => setOpenMenu(true)}>
            ☰
          </i>
        </div>
      </header>

      {/* MENU DRAWER */}
      {openMenu && (
        <div className="menu-overlay" onClick={() => setOpenMenu(false)}>
          <div className="menu-drawer" onClick={(e) => e.stopPropagation()}>
            <span onClick={() => setOpenMenu(false)}>✕</span>
            <nav>
              <a>HOME</a>
              <a>PERFUME</a>
              <a>COLLECTION</a>
              <a>ABOUT</a>
              <a>CONTACT</a>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
