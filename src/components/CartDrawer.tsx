import { X, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "../css/cartDrawer.css";

const formatPrice = (price: number) =>
  price.toLocaleString("vi-VN") + "đ";

const CartDrawer = () => {
  const navigate = useNavigate();

  const {
    cart,
    openCart,
    setOpenCart,
    removeItem,
  } = useCart();

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const goTo = (path: string) => {
    setOpenCart(false);
    navigate(path);
  };

  return (
    <>
      {/* OVERLAY */}
      <div
        className={`cart-overlay ${openCart ? "show" : ""}`}
        onClick={() => setOpenCart(false)}
      />

      {/* DRAWER */}
      <div className={`cart-drawer ${openCart ? "open" : ""}`}>
        {/* HEADER */}
        <div className="cart-header">
          <h3>GIỎ HÀNG</h3>
          <X
            className="close-icon"
            onClick={() => setOpenCart(false)}
          />
        </div>

        {/* CONTENT */}
        {cart.length === 0 ? (
          <div className="cart-empty">
            Giỏ hàng của bạn đang trống
          </div>
        ) : (
          <>
            <div className="cart-list">
              {cart.map((item) => (
                <div
                  key={`${item.id}-${item.size}`}
                  className="cart-item"
                >
                  <img src={item.image} alt={item.name} />

                  <div className="info">
                    <h4>{item.name}</h4>
                    <p>
                      {item.size}ml × {item.quantity}
                    </p>
                    <b>
                      {formatPrice(
                        item.price * item.quantity
                      )}
                    </b>
                  </div>

                  <Trash2
                    className="delete"
                    onClick={() => {
                      if (confirm("Xóa sản phẩm này?")) {
                        removeItem(item.id, item.size);
                      }
                    }}
                  />
                </div>
              ))}
            </div>

            {/* TOTAL */}
            <div className="cart-total">
              <span>Tổng cộng:</span>
              <b>{formatPrice(totalPrice)}</b>
            </div>

            {/* ACTIONS */}
            <div className="cart-actions">
              <button
                className="btn-outline"
                onClick={() => goTo("/products")}
              >
                Tiếp tục mua hàng
              </button>

              <button
                className="btn-primary"
                onClick={() => goTo("/checkout")}
              >
                Thanh toán
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
