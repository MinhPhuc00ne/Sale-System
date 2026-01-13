import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import FloatingContact from "../../components/FloatingContact";

const MainLayout = () => {
  return (
    <div className="app-layout">
      <Header />
      <FloatingContact />

      <main className="main-content">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
