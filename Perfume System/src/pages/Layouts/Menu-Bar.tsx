import { NavLink } from "react-router-dom";
import "../../css/menu-bar.css";

const MenuBar = () => {
  const menus = [
    { label: "Homepage", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Products", path: "/products" },
    { label: "Services", path: "/services" },
    { label: "Product details", path: "/product" },
    { label: "Recruitment", path: "/recruitment" },
    { label: "Partner", path: "/partner" },
    { label: "ABOUT", path: "/about" },
    { label: "BLOG", path: "/blog" },
    { label: "CONTACT", path: "/contact" },
  ];

  return (
    <nav className="lux-menu">
      {menus.map((item) => (
        <NavLink
          key={item.label}
          to={item.path}
          className="menu-item"
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
};

export default MenuBar;
