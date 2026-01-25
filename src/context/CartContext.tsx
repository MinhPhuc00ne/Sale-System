import { createContext, useContext, useEffect, useState } from "react";

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
  totalQuantity: number;

  openCart: boolean;
  setOpenCart: (v: boolean) => void;
};

const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [openCart, setOpenCart] = useState(false);

  /* LOAD */
  useEffect(() => {
    const saved = localStorage.getItem("cart");
    if (saved) setCart(JSON.parse(saved));
  }, []);

  /* SAVE */
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item: CartItem) => {
    setCart(prev => {
      const existed = prev.find(
        p => p.id === item.id && p.size === item.size
      );

      if (existed) {
        return prev.map(p =>
          p.id === item.id && p.size === item.size
            ? { ...p, quantity: p.quantity + item.quantity }
            : p
        );
      }

      return [...prev, item];
    });
  };

  const removeItem = (id: number, size: number) => {
    setCart(prev =>
      prev.filter(p => !(p.id === id && p.size === size))
    );
  };

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
        totalQuantity,
        openCart,
        setOpenCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
};
