import { useLocation } from "react-router-dom";
import { useState } from "react";
import "../css/productDetail.css";

type ProductState = {
  id: number;
  name: string;
  image: string;
  price: number; // VNĐ
  sold: number;
  season: string;
};

const sizes = [
  { ml: 75, extra: 0 },
  { ml: 100, extra: 600_000 },
  { ml: 125, extra: 1_200_000 },
  { ml: 150, extra: 1_800_000 },
];

const ProductDetail = () => {
  const { state } = useLocation() as { state: ProductState | null };

  const [size, setSize] = useState(sizes[0]);
  const [quantity, setQuantity] = useState(1);

  if (!state) {
    return (
      <div className="empty-detail">
        <p>Vui lòng chọn một sản phẩm để xem chi tiết.</p>
      </div>
    );
  }

  const totalPrice = (state.price + size.extra) * quantity;

  const formatPrice = (price: number) =>
    price.toLocaleString("vi-VN");

  return (
    <div className="detail-page">
      {/* IMAGE */}
      <div className="detail-left">
        <img src={state.image} alt={state.name} />
      </div>

      {/* INFO */}
      <div className="detail-right">
        <h1>{state.name}</h1>

        <div className="rating">
          ⭐⭐⭐⭐⭐ <span>({state.sold} lượt mua)</span>
        </div>

        {/* SIZE */}
        <div className="sizes">
          {sizes.map(s => (
            <button
              key={s.ml}
              className={s.ml === size.ml ? "active" : ""}
              onClick={() => setSize(s)}
            >
              {s.ml}ml
            </button>
          ))}
        </div>

        {/* PRICE */}
        <div className="price">
          <span className="amount">
            {formatPrice(totalPrice)}
          </span>
          <span className="currency">₫</span>
        </div>

        {/* QUANTITY */}
        <div className="quantity-row">
          <span>Số lượng</span>

          <div className="qty-box">
            <button onClick={() => setQuantity(q => Math.max(1, q - 1))}>−</button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity(q => q + 1)}>+</button>
          </div>
        </div>

        {/* ACTIONS */}
        <div className="action-row">
          <button className="btn-cart">🛒 Thêm vào giỏ</button>
          <button className="btn-buy">⚡ Mua ngay</button>
        </div>

        {/* INFO */}
        <div className="spec">
          <p><b>Thương hiệu:</b> Parfums De Marly</p>
          <p><b>Nồng độ:</b> Eau De Parfum</p>
          <p><b>Độ lưu hương:</b> 6–8 giờ</p>
          <p><b>Xuất xứ:</b> Pháp</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
