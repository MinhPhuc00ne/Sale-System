import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

/* =======================
   TYPES
======================= */
export type CartItem = {
  id: number;
  name: string;
  image: string;
  price: number;
  size: number;
  quantity: number;
};

type CartContextType = {
  cart: CartItem[];

  addToCart: (item: CartItem) => void;
  removeItem: (id: number, size: number) => void;
  clearCart: () => void;

  totalQuantity: number;

  openCart: boolean;
  setOpenCart: (v: boolean) => void;
};

/* =======================
   CONTEXT
======================= */
const CartContext = createContext<CartContextType | null>(null);

/* =======================
   PROVIDER
======================= */
export const CartProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [openCart, setOpenCart] = useState(false);

  /* LOAD CART FROM LOCALSTORAGE */
  useEffect(() => {
    const saved = localStorage.getItem("cart");
    if (saved) {
      try {
        setCart(JSON.parse(saved));
      } catch {
        setCart([]);
      }
    }
  }, []);

  /* SAVE CART TO LOCALSTORAGE */
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  /* ADD TO CART */
  const addToCart = (item: CartItem) => {
    setCart((prev) => {
      const existed = prev.find(
        (p) => p.id === item.id && p.size === item.size
      );

      if (existed) {
        return prev.map((p) =>
          p.id === item.id && p.size === item.size
            ? { ...p, quantity: p.quantity + item.quantity }
            : p
        );
      }

      return [...prev, item];
    });
  };

  /* REMOVE SINGLE ITEM */
  const removeItem = (id: number, size: number) => {
    setCart((prev) =>
      prev.filter(
        (p) => !(p.id === id && p.size === size)
      )
    );
  };

  /* CLEAR CART (DÙNG CHO CHECKOUT) */
  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  /* TOTAL QUANTITY (ICON HEADER) */
  const totalQuantity = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeItem,
        clearCart,
        totalQuantity,
        openCart,
        setOpenCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

/* =======================
   HOOK
======================= */
export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error(
      "useCart must be used inside CartProvider"
    );
  }
  return ctx;
};
