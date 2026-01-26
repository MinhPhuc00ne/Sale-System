import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import FloatingContact from "../../components/FloatingContact";
import CartDrawer from "../../components/CartDrawer";
import FavoriteDrawer from "../../components/FavoriteDrawer";

const MainLayout = () => {
  return (
    <div className="app-layout">
      {/* HEADER */}
      <Header />

      {/* DRAWERS */}
      <CartDrawer />
      <FavoriteDrawer />

      {/* FLOATING ICON */}
      <FloatingContact />

      {/* PAGE CONTENT */}
      <main className="main-content">
        <Outlet />
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default MainLayout;
