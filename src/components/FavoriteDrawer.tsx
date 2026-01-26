import { X, Trash2 } from "lucide-react";
import { useFavorite } from "../context/FavoriteContext";
import "../css/favoriteDrawer.css";

const formatPrice = (price: number) =>
  price.toLocaleString("vi-VN") + "đ";

const FavoriteDrawer = () => {
  const {
    favorites,
    openFavorite,
    setOpenFavorite,
    removeFavorite,
    clearFavorite,
  } = useFavorite();

  return (
    <>
      {/* OVERLAY */}
      <div
        className={`fav-overlay ${openFavorite ? "show" : ""}`}
        onClick={() => setOpenFavorite(false)}
      />

      {/* DRAWER */}
      <div className={`fav-drawer ${openFavorite ? "open" : ""}`}>
        {/* HEADER */}
        <div className="fav-header">
          <h3>YÊU THÍCH</h3>
          <X
            className="close-icon"
            onClick={() => setOpenFavorite(false)}
          />
        </div>

        {/* CONTENT */}
        {favorites.length === 0 ? (
          <div className="fav-empty">
            Chưa có sản phẩm yêu thích
          </div>
        ) : (
          <>
            <div className="fav-list">
              {favorites.map((item) => (
                <div key={item.id} className="fav-item">
                  <img src={item.image} alt={item.name} />

                  <div className="info">
                    <h4>{item.name}</h4>
                    <b>{formatPrice(item.price)}</b>
                  </div>

                  <Trash2
                    className="delete"
                    onClick={() => {
                      if (confirm("Bỏ yêu thích sản phẩm này?")) {
                        removeFavorite(item.id);
                      }
                    }}
                  />
                </div>
              ))}
            </div>

            <div className="fav-actions">
              <button
                className="btn-outline"
                onClick={() => {
                  if (confirm("Bỏ yêu thích tất cả?")) {
                    clearFavorite();
                  }
                }}
              >
                Bỏ yêu thích tất cả
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default FavoriteDrawer;
