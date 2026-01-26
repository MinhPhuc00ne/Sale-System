import { RouterProvider } from "react-router-dom";
import router from "./router";
import "./css/global.css";

import { CartProvider } from "./context/CartContext";
import { FavoriteProvider } from "./context/FavoriteContext";

function App() {
  return (
    <CartProvider>
      <FavoriteProvider>
        <RouterProvider router={router} />
      </FavoriteProvider>
    </CartProvider>
  );
}

export default App;
