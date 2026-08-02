import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Heart } from "lucide-react";
import "../css/productDetail.css";
import { useCart } from "../context/CartContext";
import { useFavorite } from "../context/FavoriteContext";

type ProductState = {
  id: number;
  name: string;
  image: string;
  price: number;
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
  const navigate = useNavigate();
  const { state } = useLocation() as {
    state: ProductState | null;
  };

  const { addToCart } = useCart();
  const { toggleFavorite, isFavorite } = useFavorite();

  const [size, setSize] = useState(sizes[0]);
  const [quantity, setQuantity] = useState(1);

  if (!state) {
    return (
      <div className="empty-detail">
        <p>Vui lòng chọn sản phẩm để xem chi tiết.</p>
      </div>
    );
  }

  const favorite = isFavorite(state.id);
  const unitPrice = state.price + size.extra;
  const totalPrice = unitPrice * quantity;

  const formatPrice = (price: number) =>
    price.toLocaleString("vi-VN");

  /* ADD TO CART - KHÔNG ALERT */
  const addSilent = () => {
    addToCart({
      id: state.id,
      name: state.name,
      image: state.image,
      price: unitPrice,
      size: size.ml,
      quantity,
    });
  };

  /* ADD TO CART - CÓ ALERT */
  const handleAddToCart = () => {
    addSilent();
    alert("✅ Đã thêm sản phẩm vào giỏ hàng");
  };

  /* FAVORITE */
  const handleFavorite = () => {
    toggleFavorite({
      id: state.id,
      name: state.name,
      image: state.image,
      price: unitPrice,
    });

    alert(
      favorite
        ? "💔 Đã bỏ khỏi mục yêu thích"
        : "❤️ Đã thêm vào mục yêu thích"
    );
  };

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
          {sizes.map((s) => (
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
            <button
              onClick={() =>
                setQuantity((q) => Math.max(1, q - 1))
              }
            >
              −
            </button>
            <span>{quantity}</span>
            <button
              onClick={() => setQuantity((q) => q + 1)}
            >
              +
            </button>
          </div>
        </div>

        {/* ACTION */}
        <div className="action-row">
          <button
            className="btn-cart"
            onClick={handleAddToCart}
          >
            🛒 Thêm vào giỏ
          </button>

          <button
            className="btn-buy"
            onClick={() => {
              addSilent();
              navigate("/checkout");
            }}
          >
            ⚡ Mua ngay
          </button>
        </div>

        {/* FAVORITE */}
        <div className="favorite-row">
          <button
            className={`btn-favorite ${
              favorite ? "active" : ""
            }`}
            onClick={handleFavorite}
          >
            <Heart
              size={18}
              fill={favorite ? "#ff4d6d" : "none"}
              stroke="#ff4d6d"
            />
            {favorite ? "Đã yêu thích" : "Thêm vào yêu thích"}
          </button>
        </div>

        {/* SPEC */}
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
