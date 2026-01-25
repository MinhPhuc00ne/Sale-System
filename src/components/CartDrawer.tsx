import { X, Trash2 } from "lucide-react";
import { useCart } from "../context/CartContext";
import "../css/cartDrawer.css";

const formatPrice = (p: number) =>
  p.toLocaleString("vi-VN") + "đ";

const CartDrawer = () => {
  const {
    cart,
    openCart,
    setOpenCart,
    removeItem,
  } = useCart();

  if (!openCart) return null;

  return (
    <>
      <div
        className="cart-overlay"
        onClick={() => setOpenCart(false)}
      />

      <div className="cart-drawer">
        <div className="cart-header">
          <h3>Giỏ hàng</h3>
          <X onClick={() => setOpenCart(false)} />
        </div>

        {cart.length === 0 ? (
          <div className="cart-empty">
            Giỏ hàng của bạn đang trống
          </div>
        ) : (
          <>
            <div className="cart-list">
              {cart.map(item => (
                <div
                  key={`${item.id}-${item.size}`}
                  className="cart-item"
                >
                  <img src={item.image} />
                  <div className="info">
                    <h4>{item.name}</h4>
                    <p>{item.size}ml × {item.quantity}</p>
                    <b>{formatPrice(item.price * item.quantity)}</b>
                  </div>
                  <Trash2
                    onClick={() => {
                      if (confirm("Xóa sản phẩm này?")) {
                        removeItem(item.id, item.size);
                      }
                    }}
                  />
                </div>
              ))}
            </div>

            <button className="btn-view-cart">
              Xem giỏ hàng
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
