import { RouterProvider } from "react-router-dom";
import router from "./router";
import "./css/global.css";

import { CartProvider } from "./context/CartContext";
import { FavoriteProvider } from "./context/FavoriteContext";
import { DeliveryProvider } from "./context/DeliveryContext";

function App() {
  return (
    <CartProvider>
      <FavoriteProvider>
        <DeliveryProvider>
          <RouterProvider router={router} />
        </DeliveryProvider>
      </FavoriteProvider>
    </CartProvider>
  );
}

export default App;
