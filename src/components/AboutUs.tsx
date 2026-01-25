import { useMemo, useState } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import AIChat from "../components/AIChat";
import "../css/aboutus.css";

/* ================= ASSETS ================= */
import F1 from "../assets/F1.jpg";
import F2 from "../assets/F2.jpg";

/* ================= TYPE ================= */
type Store = {
  id: number;
  name: string;
  address: string;
  lat: number;
  lng: number;
};

/* ================= DATA ================= */
const STORES: Store[] = [
  {
    id: 1,
    name: "DELTIK Boutique – HUTECH",
    address: "Đại học HUTECH, TP.HCM",
    lat: 10.801938,
    lng: 106.714667,
  },
  {
    id: 2,
    name: "DELTIK Boutique – Hoàn Kiếm",
    address: "Hoàn Kiếm, Hà Nội",
    lat: 21.028511,
    lng: 105.804817,
  },
  {
    id: 3,
    name: "DELTIK Boutique – Ba Đình",
    address: "Ba Đình, Hà Nội",
    lat: 21.033333,
    lng: 105.85,
  },
];

/* ================= MAP STYLE ================= */
const mapStyle: google.maps.MapTypeStyle[] = [
  { elementType: "geometry", stylers: [{ color: "#f4f4f4" }] },
  { elementType: "labels.icon", stylers: [{ visibility: "off" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#444" }] },
];

const AboutUS = () => {
  const [selectedStore, setSelectedStore] = useState<Store | null>(null);
  const [openAI, setOpenAI] = useState(false);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyCELhpXVKGCz8Z6ELy-1HBKj_yjh1gIKA0",
  });

  const center = useMemo<google.maps.LatLngLiteral>(
    () => ({ lat: 16.047079, lng: 108.20623 }),
    []
  );

  return (
    <div className="about-deltik">
      {/* ================= HERO ================= */}
      <section className="hero">
        <h1>DELTIK — khoảnh khắc chạm đầu tiên</h1>
        <p>
          DELTIK được tạo nên từ các chữ cái trong tên của năm người sáng lập. Âm
          <strong> “tik” </strong>
          lấy cảm hứng từ tiếng mở nắp chai – một tín hiệu nhỏ, đánh dấu sự khởi đầu
          của trải nghiệm mùi hương. Với DELTIK, “chạm” không chỉ là chạm vào chai
          nước hoa, mà là chạm vào cảm xúc.
        </p>
        <button className="cta">Khám phá câu chuyện The Fifth Scent</button>
      </section>

      {/* ================= BRAND POSITIONING ================= */}
      <section className="article">
        <img src={F1} alt="DELTIK story" />
        <div>
          <h2>Định vị thương hiệu</h2>
          <p>
            DELTIK là một niche perfume dành cho giới trẻ – không đại trà, không
            phô trương xa xỉ. Chúng tôi tập trung vào cảm xúc, cá tính và sự tinh
            tế hiện đại. Mỗi mùi hương được tạo ra không phải để gây ấn tượng tức
            thì, mà để ở lại thật lâu.
          </p>
          <p className="promise">
            <em>Mỗi mùi là một câu chuyện. Mùi thứ năm là chữ ký của bạn.</em>
          </p>
        </div>
      </section>

      {/* ================= SEASONS ================= */}
      <section className="seasons">
        <h2>DELTIK · Seasons & Self</h2>
        <div className="season-grid">
          <div>
            <h3>Spring</h3>
            <p>Floral & Tea – trong trẻo, dịu nhẹ như một ngày mới.</p>
          </div>
          <div>
            <h3>Summer</h3>
            <p>Citrus & Marine – tươi mát, rực rỡ như gió và nắng.</p>
          </div>
          <div>
            <h3>Autumn</h3>
            <p>Woody & Spicy – ấm trầm, sâu lắng như một câu chuyện cũ.</p>
          </div>
          <div>
            <h3>Winter</h3>
            <p>Vanilla & Amber – ngọt ấm, ôm sát như một cái ôm lâu.</p>
          </div>
          <div className="highlight">
            <h3>Your Scent</h3>
            <p>Mùi thứ năm – không được định nghĩa sẵn. Bạn tự tạo ra nó.</p>
          </div>
        </div>
      </section>

      {/* ================= PERSONALIZATION ================= */}
      <section className="article reverse">
        <img src={F2} alt="Custom perfume" />
        <div>
          <h2>Cá nhân hoá mùi hương của bạn</h2>
          <ul>
            <li>Chọn dung tích: 30ml / 50ml / 100ml</li>
            <li>Chọn tầng hương đầu – giữa – cuối</li>
            <li>Khắc tên & xem trước trên chai</li>
            <li>Gói quà & thiệp chúc</li>
          </ul>
          <button className="cta">Bắt đầu tạo mùi riêng</button>
        </div>
      </section>

      {/* ================= MAP ================= */}
      {isLoaded && (
        <GoogleMap
          center={center}
          zoom={6}
          mapContainerStyle={{ width: "100%", height: "60vh" }}
          options={{
            styles: mapStyle,
            disableDefaultUI: true,
            zoomControl: true,
          }}
        >
          {STORES.map((store) => (
            <Marker
              key={store.id}
              position={{ lat: store.lat, lng: store.lng }}
              onClick={() => setSelectedStore(store)}
            />
          ))}
        </GoogleMap>
      )}

      {selectedStore && (
        <div className="store-panel">
          <h3>{selectedStore.name}</h3>
          <p>{selectedStore.address}</p>
          <button onClick={() => setSelectedStore(null)}>Đóng</button>
        </div>
      )}

      {/* ================= AI ================= */}
      <div className="ai-toggle" onClick={() => setOpenAI(!openAI)}>
        {openAI ? "✕" : "💬"}
      </div>
      {openAI && <AIChat />}
    </div>
  );
};

export default AboutUS;
