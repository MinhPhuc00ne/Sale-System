import "../../css/menu-bar.css";

const MenuBar = () => {
  const menus = [
    "HOME",
    "PERFUME",
    "NEW ARRIVAL",
    "BEST SELLER",
    "COLLECTION",
    "BRAND",
    "GIFT",
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
