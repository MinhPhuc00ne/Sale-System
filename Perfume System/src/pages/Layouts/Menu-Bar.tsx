import "../../css/menu-bar.css";

const MenuBar = () => {
  const menus = [
    "Homepage",
    "About Us",
    "Products",
    "Services",
    "Product details",
    "Recruitment",
    "Partner",
    "ABOUT",
    "BLOG",
    "CONTACT",
  ];

  return (
    <nav className="lux-menu">
      {menus.map((item) => (
        <span key={item} className="menu-item">
          {item}
        </span>
      ))}
    </nav>
  );
};

export default MenuBar;
