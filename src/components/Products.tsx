import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MessageCircle, X } from "lucide-react";
import AIChat from "../components/AIChat";
import "../css/product.css";
import viewBanner from "../assets/view.jpg";

type ProductType = {
  id: number;
  name: string;
  image: string;
  price: number;
  sold: number;
  season: string;
};

const seasons = ["Xuân", "Hạ", "Thu", "Đông"];

const perfumeNames = [
  "Delik Spring Bloom","Violet Sakura","Amber Dawn","Ocean Whisper","Midnight Rain",
  "Black Orchid Noir","Golden Carrera","Aqua Crystal","Shadow Wood","Silver Musk",
  "Vanilla Ember","Rose Éternelle","Jasmine Silk","Urban Leather","Soft Powder",
  "White Tea Harmony","Spice & Smoke","Blooming Peony","Royal Oud","Moonlight Iris",
  "Fresh Linen","Sunset Vanilla","Wild Fig","Pink Champagne","Pure Cashmere",
  "Cedar Mist","Orange Blossom","Dark Chocolate","Green Tea Zen","Eternal Signature",
];

const Products = () => {
  const navigate = useNavigate();
  const [openAI, setOpenAI] = useState(false);

  const [products, setProducts] = useState<ProductType[]>([]);
  const [filtered, setFiltered] = useState<ProductType[]>([]);
  const [selectedSeasons, setSelectedSeasons] = useState<string[]>([]);
  const [maxPrice, setMaxPrice] = useState(10_000_000);

  useEffect(() => {
    const list: ProductType[] = [];

    for (let i = 1; i <= 30; i++) {
      const fileName = i <= 10 ? `${i}.png` : `${i}.jpg`;

      list.push({
        id: i,
        name: perfumeNames[i - 1],
        image: new URL(`../assets/${fileName}`, import.meta.url).href,
        price: Math.floor(Math.random() * 8_000_000 + 2_000_000),
        sold: Math.floor(Math.random() * 900 + 100),
        season: seasons[i % 4],
      });
    }

    setProducts(list);
    setFiltered(list);
  }, []);

  useEffect(() => {
    let result = [...products];

    if (selectedSeasons.length > 0) {
      result = result.filter(p => selectedSeasons.includes(p.season));
    }

    result = result.filter(p => p.price <= maxPrice);
    setFiltered(result);
  }, [products, selectedSeasons, maxPrice]);

  const toggleSeason = (s: string) => {
    setSelectedSeasons(prev =>
      prev.includes(s) ? prev.filter(i => i !== s) : [...prev, s]
    );
  };

  return (
    <div className="product-page">
      <div className="banner">
        <img src={viewBanner} alt="Banner" />
      </div>

      <div className="content">
        <aside className="sidebar">
          <h3>Mùa hương</h3>
          {seasons.map(s => (
            <label key={s} className="checkbox">
              <input
                type="checkbox"
                checked={selectedSeasons.includes(s)}
                onChange={() => toggleSeason(s)}
              />
              {s}
            </label>
          ))}

          <h3>Lọc giá</h3>
          <input
            type="range"
            min={0}
            max={10_000_000}
            step={500_000}
            value={maxPrice}
            onChange={(e) => setMaxPrice(+e.target.value)}
          />
          <p>0 – {maxPrice.toLocaleString("vi-VN")} ₫</p>
        </aside>

        <main className="product-grid">
          {filtered.map(p => (
            <div
              key={p.id}
              className="product-card"
              onClick={() => navigate("/product-detail", { state: p })}
            >
              <img src={p.image} alt={p.name} />
              <h4>{p.name}</h4>
              <div className="stars">⭐⭐⭐⭐⭐ <span>({p.sold})</span></div>
              <p className="price">
                {p.price.toLocaleString("vi-VN")} ₫
              </p>
            </div>
          ))}
        </main>
      </div>

      {/* AI */}
      <div className="ai-toggle-btn light" onClick={() => setOpenAI(!openAI)}>
        {openAI ? <X /> : <MessageCircle />}
      </div>

      {openAI && (
        <div className="ai-chat-wrapper">
          <AIChat />
        </div>
      )}
    </div>
  );
};

export default Products;
