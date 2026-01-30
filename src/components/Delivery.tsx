import "../css/delivery.css";
import { useDelivery } from "../context/DeliveryContext";

const Delivery = () => {
  const { orders, markDelivered } = useDelivery();

  return (
    <div className="delivery-page">
      <h2>🚚 Đơn hàng của bạn</h2>

      {orders.length === 0 && (
        <p className="empty">
          Bạn chưa có đơn giao hàng nào.
        </p>
      )}

      {orders.map((o) => (
        <div key={o.id} className="delivery-card">
          <div className="delivery-header">
            <span>Mã đơn: {o.id}</span>
            <span className={`status ${o.status}`}>
              {o.status === "PROCESSING" && "Đang xử lý"}
              {o.status === "SHIPPING" && "Đang giao"}
              {o.status === "DELIVERED" && "Đã nhận"}
            </span>
          </div>

          <p>📍 {o.address}</p>
          <p>📦 {o.items.length} sản phẩm</p>
          <b>{o.total.toLocaleString("vi-VN")} ₫</b>

          {o.status !== "DELIVERED" ? (
            <button
              className="btn-received"
              onClick={() => markDelivered(o.id)}
            >
              Đã nhận hàng
            </button>
          ) : (
            <div className="thank">
              💖 Cảm ơn bạn đã mua hàng tại DELTIK
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Delivery;
