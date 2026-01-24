import { RouterProvider } from "react-router-dom";
import router from "./router";
import "./css/global.css";

import { CartProvider } from "./context/CartContext";
import CartDrawer from "./components/CartDrawer";

function App() {
  return (
    <CartProvider>
      <RouterProvider router={router} />
      <CartDrawer />
    </CartProvider>
  );
}

export default App;
