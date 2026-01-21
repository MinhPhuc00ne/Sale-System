import { NavLink } from "react-router-dom";
import "../../css/menu-bar.css";

const MenuBar = () => {
  const menus = [
    { label: "Homepage", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Products", path: "/products" },
    { label: "Product Detail", path: "/product-detail" },
    { label: "Brand", path: "/brand" },
    { label: "Recruitment", path: "/recruitment" },
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
