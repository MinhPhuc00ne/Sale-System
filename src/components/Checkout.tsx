import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/checkout.css";
import logo from "../assets/logo.svg";

import { useCart } from "../context/CartContext";
import { useDelivery } from "../context/DeliveryContext";
import { nanoid } from "nanoid";

/* =======================
   LOCATION DEMO
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
  const { addOrder } = useDelivery();

  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [ward, setWard] = useState("");

  const [agreePolicy, setAgreePolicy] = useState(false);
  const [printInvoice, setPrintInvoice] = useState(false);

  const [submitted, setSubmitted] = useState(false);

  const districts = city ? Object.keys(LOCATION_DATA[city]) : [];
  const wards =
    city && district ? LOCATION_DATA[city][district] : [];

  const total = cart.reduce(
    (s, i) => s + i.price * i.quantity,0
  );

  const canSubmit = agreePolicy && printInvoice;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!agreePolicy) {
      alert("Bạn chưa đồng ý điều khoản & chính sách");
      return;
    }

    if (!printInvoice) {
      alert("Vui lòng chọn in hóa đơn");
      return;
    }

    if (!city || !district || !ward) {
      alert("Vui lòng chọn đầy đủ địa chỉ");
      return;
    }

    addOrder({
      id: nanoid(),
      createdAt: new Date().toLocaleString("vi-VN"),
      items: cart,
      total,
      status: "PROCESSING",
      receiver: "Khách hàng",
      phone: "Chưa cập nhật",
      address: `${ward}, ${district}, ${city}`,
    });

    clearCart();
    setSubmitted(true);
  };

  return (
    <div className="checkout-page">
      <div
        className="checkout-logo"
        onClick={() => navigate("/")}
      >
        <img src={logo} alt="logo" />
      </div>

      {submitted ? (
        <div className="order-success">
          <h2>🎉 Đặt hàng thành công!</h2>
          <p>Đơn hàng đang được xử lý.</p>
          <button onClick={() => navigate("/delivery")}>
            Theo dõi đơn hàng
          </button>
        </div>
      ) : (
        <form
          className="checkout-container"
          onSubmit={handleSubmit}
        >
          {/* LEFT */}
          <div className="checkout-left">
            <h3>Thông tin giao hàng</h3>

            <input placeholder="Họ và tên" required />
            <input placeholder="Số điện thoại" required />
            <input placeholder="Địa chỉ chi tiết" required />

            <select
              value={city}
              onChange={(e) => {
                setCity(e.target.value);
                setDistrict("");
                setWard("");
              }}
            >
              <option value="">Chọn Tỉnh / Thành</option>
              {Object.keys(LOCATION_DATA).map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>

            <select
              value={district}
              disabled={!city}
              onChange={(e) => {
                setDistrict(e.target.value);
                setWard("");
              }}
            >
              <option value="">Chọn Quận</option>
              {districts.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>

            <select
              value={ward}
              disabled={!district}
              onChange={(e) => setWard(e.target.value)}
            >
              <option value="">Chọn Phường</option>
              {wards.map((w) => (
                <option key={w} value={w}>
                  {w}
                </option>
              ))}
            </select>

            {/* CHECKBOX */}
            <label className="option-line">
              <input
                type="checkbox"
                checked={agreePolicy}
                onChange={(e) =>
                  setAgreePolicy(e.target.checked)
                }
              />
              <span>
                Tôi đồng ý điều khoản & chính sách
              </span>
            </label>

            <label className="option-line">
              <input
                type="checkbox"
                checked={printInvoice}
                onChange={(e) =>
                  setPrintInvoice(e.target.checked)
                }
              />
              <span>Tôi muốn in hóa đơn</span>
            </label>

            <button
              type="submit"
              disabled={!canSubmit}
              className={!canSubmit ? "disabled" : ""}
            >
              Hoàn tất đơn hàng
            </button>
          </div>

          {/* RIGHT */}
          <div className="checkout-right">
            <h3>Đơn hàng</h3>

            {cart.map((i) => (
              <div key={i.id} className="order-item">
                <img src={i.image} alt={i.name} />
                <div>
                  <p>{i.name}</p>
                  <span>
                    {i.size}ml × {i.quantity}
                  </span>
                </div>
                <b>
                  {formatPrice(
                    i.price * i.quantity
                  )}
                </b>
              </div>
            ))}

            <div className="summary">
              <div>
                <span>Tổng</span>
                <b>{formatPrice(total)}</b>
              </div>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default Checkout;
