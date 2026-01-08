import { Outlet } from "react-router-dom";
import Header from "./Header";
import MenuBar from "./Menu-Bar";
import Footer from "./Footer";

const MainLayout = () => {
  return (
    <>
      <Header />
      <MenuBar />
      <main style={{ minHeight: "70vh", padding: "20px" }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
