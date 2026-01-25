import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import FloatingContact from "../../components/FloatingContact";
import { CartProvider } from "../../context/CartContext";

const MainLayout = () => {
  return (
    <CartProvider>
      <div className="app-layout">
        <Header />
        <FloatingContact />

        <main className="main-content">
          <Outlet />
        </main>

        <Footer />
      </div>
    </CartProvider>
  );
};

export default MainLayout;
