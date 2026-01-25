import { useState } from "react";
import "../css/brand.css";
import { MessageCircle, X, Search, Star, Quote } from "lucide-react";
import AIChat from "../components/AIChat";

import B1 from "../assets/B1.jpg";
import B2 from "../assets/B2.jpg";

/* ================= TYPES ================= */
type FontStyle = "serif" | "sans" | "script" | "lux" | "modern";

type Brand = {
  name: string;
  style: FontStyle;
  featured?: boolean;
};

type BrandMap = {
  [key: string]: Brand[];
};

/* ================= BRAND DATA A–Z ================= */
const BRAND_DATA: BrandMap = {
  A: [
    { name: "Amouage", style: "serif", featured: true },
    { name: "Armani Privé", style: "modern" },
    { name: "Acqua di Parma", style: "script" },
  ],
  B: [
    { name: "Byredo", style: "sans", featured: true },
    { name: "Bvlgari", style: "lux" },
    { name: "Bond No.9", style: "modern" },
  ],
  C: [
    { name: "Chanel", style: "serif", featured: true },
    { name: "Creed", style: "lux" },
    { name: "Clive Christian", style: "script" },
  ],
  D: [
    { name: "Dior", style: "serif", featured: true },
    { name: "Diptyque", style: "sans" },
  ],
  E: [{ name: "Etat Libre d’Orange", style: "modern" }],
  F: [
    { name: "Frederic Malle", style: "lux", featured: true },
    { name: "Floris London", style: "serif" },
  ],
  G: [{ name: "Guerlain", style: "script", featured: true }],
  H: [{ name: "Hermès", style: "serif", featured: true }],
  I: [{ name: "Initio", style: "lux" }],
  J: [
    { name: "Jo Malone", style: "sans", featured: true },
    { name: "Juliette Has A Gun", style: "modern" },
  ],
  K: [{ name: "Kilian", style: "script", featured: true }],
  L: [
    { name: "Le Labo", style: "sans" },
    { name: "Louis Vuitton", style: "serif", featured: true },
  ],
  M: [
    { name: "Maison Francis Kurkdjian", style: "script", featured: true },
    { name: "Memo Paris", style: "lux" },
  ],
  N: [{ name: "Nishane", style: "modern", featured: true }],
  O: [{ name: "Ormonde Jayne", style: "serif" }],
  P: [
    { name: "Parfums de Marly", style: "lux", featured: true },
    { name: "Penhaligon’s", style: "script" },
  ],
  Q: [{ name: "Quentin Bisch", style: "modern" }],
  R: [{ name: "Roja Dove", style: "lux", featured: true }],
  S: [
    { name: "Serge Lutens", style: "script", featured: true },
    { name: "Santa Maria Novella", style: "serif" },
  ],
  T: [{ name: "Tom Ford", style: "serif", featured: true }],
  U: [{ name: "Ulrich Lang", style: "modern" }],
  V: [
    { name: "Vilhelm Parfumerie", style: "lux", featured: true },
    { name: "Van Cleef & Arpels", style: "serif" },
  ],
  W: [{ name: "Widian", style: "lux" }],
  X: [{ name: "Xerjoff", style: "script", featured: true }],
  Y: [{ name: "Yves Saint Laurent", style: "serif" }],
  Z: [{ name: "Zoologist", style: "modern", featured: true }],
};

/* ================= ALPHABET ================= */
const ALPHABET = Object.keys(BRAND_DATA);

/* ================= COMPONENT ================= */
const Brand = () => {
  const [activeLetter, setActiveLetter] = useState("A");
  const [openAI, setOpenAI] = useState(false);
  const [search, setSearch] = useState("");

  const brands = BRAND_DATA[activeLetter].filter((b) =>
    b.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="brand-page-light">
      <div className="brand-header-light">
        <h1>Brands</h1>
        <p>Tinh hoa thương hiệu nước hoa cao cấp từ A–Z</p>
      </div>

      <div className="brand-search-modern">
        <Search size={18} />
        <input
          placeholder="Tìm kiếm thương hiệu..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="alphabet-bar-light">
        {ALPHABET.map((letter) => (
          <span
            key={letter}
            className={`alphabet-letter-light ${
              activeLetter === letter ? "active" : ""
            }`}
            onMouseEnter={() => {
              setActiveLetter(letter);
              setSearch("");
            }}
          >
            {letter}
          </span>
        ))}
      </div>

      <div className="brand-list-light">
        {brands.map((brand) => (
          <div
            key={brand.name}
            className={`brand-card-light ${brand.style}`}
          >
            {brand.featured && <Star size={14} />}
            <span>{brand.name}</span>
          </div>
        ))}
      </div>

      <div className="lux-divider">
        <Quote />
        <p>“Perfume is the silent language of identity.”</p>
      </div>

      <section className="brand-article">
        <img src={B1} />
        <div className="article-content">
          <h2>Nghệ thuật thương hiệu mùi hương</h2>
          <p>
            Bốn mùa có thể định nghĩa thời tiết. Nhưng mùi hương định nghĩa bạn. DELTIK tạo ra 4 mùi cho Xuân–Hạ–Thu–Đông, và mùi thứ năm không được định nghĩa sẵn: một mùi hương cá nhân, được tạo từ lựa chọn và cảm xúc của chính bạn.
          </p>
        </div>
      </section>

      <section className="brand-article reverse">
        <img src={B2} />
        <div className="article-content">
          <h2>Dấu ấn cá nhân vượt thời gian</h2>
          <p>
            Mỗi mùi hương bắt đầu bằng một khoảnh khắc — tiếng “tik” khi mở nắp, và cảm xúc vừa kịp thức dậy.
          </p>
        </div>
      </section>

      <div
        className="ai-toggle-btn light"
        onClick={() => setOpenAI(!openAI)}
      >
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

export default Brand;
