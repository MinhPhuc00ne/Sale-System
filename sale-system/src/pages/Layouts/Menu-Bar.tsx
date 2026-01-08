import "../../css/menu-bar.css";

const MenuBar = () => {
  const menus = ["Homepage", "About Us", "Products", "Product details", "Contact"];

  return (
    <nav className="menu-bar">
      {menus.map((item) => (
        <span key={item} className="menu-item">
          {item}
        </span>
      ))}
    </nav>
  );
};

export default MenuBar;
