import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/checkout.css";
import logo from "../assets/logo.svg";
import { useCart } from "../context/CartContext";

/* =======================
   DATA HÀNH CHÍNH (DEMO)
   ======================= */
const LOCATION_DATA: Record<string, Record<string, string[]>> = {
  "TP. Hồ Chí Minh": {
    "Quận 1": ["Bến Nghé", "Bến Thành"],
    "Quận 3": ["Phường 6", "Phường 7"],
    "Bình Thạnh": ["Phường 1", "Phường 2"],
  },
  "Hà Nội": {
    "Ba Đình": ["Kim Mã", "Ngọc Hà"],
    "Cầu Giấy": ["Dịch Vọng", "Mai Dịch"],
  },
};

const formatPrice = (p: number) =>
  p.toLocaleString("vi-VN") + " ₫";

const Checkout = () => {
  const navigate = useNavigate();
  const { cart, clearCart } = useCart();

  /* =======================
     FORM STATE
     ======================= */
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [ward, setWard] = useState("");

  const [agreePolicy, setAgreePolicy] = useState(false);
  const [needInvoice, setNeedInvoice] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  /* =======================
     DATA THEO CHỌN
     ======================= */
  const districts = city
    ? Object.keys(LOCATION_DATA[city] || {})
    : [];

  const wards =
    city && district
      ? LOCATION_DATA[city][district] || []
      : [];

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  /* =======================
     SUBMIT
     ======================= */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!agreePolicy) {
      alert("Vui lòng đồng ý Điều khoản & Chính sách");
      return;
    }

    if (!city || !district || !ward) {
      alert("Vui lòng chọn đầy đủ Tỉnh / Quận / Phường");
      return;
    }

    setSubmitted(true);
    clearCart();
  };

  /* =======================
     RENDER
     ======================= */
  return (
    <div className="checkout-page">
      <div className="checkout-logo" onClick={() => navigate("/")}>
        <img src={logo} alt="Logo" />
      </div>

      {submitted ? (
        <div className="order-success">
          <h2>🎉 Đặt hàng thành công!</h2>
          <p>Chúng tôi sẽ liên hệ sớm để xác nhận đơn hàng.</p>
          <button onClick={() => navigate("/products")}>
            Tiếp tục mua sắm
          </button>
        </div>
      ) : (
        <form className="checkout-container" onSubmit={handleSubmit}>
          {/* ================= LEFT ================= */}
          <div className="checkout-left">
            <h3>Thông tin giao hàng</h3>

            <input placeholder="Họ và tên" required />

            <div className="row">
              <input placeholder="Email" required />
              <input placeholder="Số điện thoại" required />
            </div>

            <input placeholder="Địa chỉ (số nhà, tên đường)" required />

            <div className="row">
              {/* TỈNH */}
              <select
                required
                value={city}
                onChange={(e) => {
                  setCity(e.target.value);
                  setDistrict("");
                  setWard("");
                }}
              >
                <option value="">Chọn Tỉnh / Thành phố</option>
                {Object.keys(LOCATION_DATA).map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>

              {/* QUẬN */}
              <select
                required
                value={district}
                disabled={!city}
                onChange={(e) => {
                  setDistrict(e.target.value);
                  setWard("");
                }}
              >
                <option value="">Chọn Quận / Huyện</option>
                {districts.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            </div>

            {/* PHƯỜNG */}
            <select
              required
              value={ward}
              disabled={!district}
              onChange={(e) => setWard(e.target.value)}
            >
              <option value="">Chọn Phường / Xã</option>
              {wards.map((w) => (
                <option key={w} value={w}>
                  {w}
                </option>
              ))}
            </select>

            <textarea placeholder="Ghi chú cho đơn hàng..." />

            <h3>Phương thức thanh toán</h3>

            <label className="option-line">
              <input type="radio" checked readOnly />
              <span>Thanh toán khi nhận hàng (COD)</span>
            </label>

            <div className="checkout-options">
              <label className="option-line">
                <input
                  type="checkbox"
                  checked={needInvoice}
                  onChange={(e) => setNeedInvoice(e.target.checked)}
                />
                <span>Yêu cầu xuất hóa đơn</span>
              </label>

              <label className="option-line required">
                <input
                  type="checkbox"
                  checked={agreePolicy}
                  onChange={(e) => setAgreePolicy(e.target.checked)}
                />
                <span>
                  Tôi đồng ý với Điều khoản và Chính sách của AH Perfumes*
                </span>
              </label>
            </div>

            <div className="checkout-actions">
              <button
                type="button"
                className="btn-back"
                onClick={() => navigate("/products")}
              >
                ← xem thêm sản phẩm
              </button>

              <button
                type="submit"
                className="btn-order"
                disabled={!agreePolicy}
              >
                Hoàn tất đơn hàng
              </button>
            </div>
          </div>

          {/* ================= RIGHT ================= */}
          <div className="checkout-right">
            <h3>Đơn hàng của bạn</h3>

            {cart.map((item) => (
              <div
                key={`${item.id}-${item.size}`}
                className="order-item"
              >
                <img src={item.image} alt={item.name} />
                <div className="order-info">
                  <p>{item.name}</p>
                  <span>
                    {item.size}ml × {item.quantity}
                  </span>
                </div>
                <b>{formatPrice(item.price * item.quantity)}</b>
              </div>
            ))}

            <div className="summary">
              <div>
                <span>Tạm tính</span>
                <b>{formatPrice(totalPrice)}</b>
              </div>
              <div>
                <span>Phí vận chuyển</span>
                <b>0 ₫</b>
              </div>
              <div className="total">
                <span>Tổng cộng</span>
                <b>{formatPrice(totalPrice)}</b>
              </div>
            </div>

            <p className="note">
              Đơn hàng sẽ được xác nhận qua điện thoại hoặc email.
            </p>
          </div>
        </form>
      )}
    </div>
  );
};

export default Checkout;
