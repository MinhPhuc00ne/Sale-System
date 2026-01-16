import { useMemo, useState } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import AIChat from "../components/AIChat";

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
    name: "DELIX Fragrance – HUTECH",
    address: "Đại học HUTECH, TP.HCM",
    lat: 10.801938,
    lng: 106.714667,
  },
  {
    id: 2,
    name: "DELIX Fragrance – Hoàn Kiếm",
    address: "Hoàn Kiếm, Hà Nội",
    lat: 21.028511,
    lng: 105.804817,
  },
  {
    id: 3,
    name: "DELIX Fragrance – Ba Đình",
    address: "Ba Đình, Hà Nội",
    lat: 21.033333,
    lng: 105.85,
  },
  {
    id: 4,
    name: "DELIX Fragrance – Tây Hồ",
    address: "Tây Hồ, Hà Nội",
    lat: 21.073333,
    lng: 105.818889,
  },
];

/* ================= MAP STYLE ================= */
const mapStyle: google.maps.MapTypeStyle[] = [
  { elementType: "geometry", stylers: [{ color: "#f4f4f4" }] },
  { elementType: "labels.icon", stylers: [{ visibility: "off" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#4a4a4a" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#f4f4f4" }] },
];

const AboutUs = () => {
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
    <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
      {/* ================= MAP ================= */}
      {isLoaded && (
        <GoogleMap
          center={center}
          zoom={6}
          mapContainerStyle={{ width: "100%", height: "100%" }}
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

      {/* ================= STORE PANEL ================= */}
      {selectedStore && (
        <div className="store-panel">
          <button
            className="close-btn"
            onClick={() => setSelectedStore(null)}
          >
            ✕
          </button>

          <h2>{selectedStore.name}</h2>
          <p className="tag">NƯỚC HOA & LÀM ĐẸP</p>

          <span className="status">● ĐANG MỞ</span>

          <p className="address">{selectedStore.address}</p>

          <button className="action-btn">KHÁM PHÁ BOUTIQUE</button>
        </div>
      )}

      {/* ================= AI TOGGLE ================= */}
      <div
        className="ai-toggle"
        onClick={() => setOpenAI(!openAI)}
      >
        {openAI ? "✕" : "💬"}
      </div>

      {/* ================= AI CHAT ================= */}
      {openAI && (
        <div className="ai-wrapper">
          <AIChat />
        </div>
      )}

      {/* ================= STYLE ================= */}
      <style>{`
        .store-panel {
          position: absolute;
          left: 40px;
          top: 50%;
          transform: translateY(-50%);
          width: 380px;
          background: #fff;
          padding: 36px;
          box-shadow: 0 30px 80px rgba(0,0,0,0.18);
          font-family: "Helvetica Neue", Arial, sans-serif;
          animation: slideIn .35s ease;
          z-index: 10;
        }

        .close-btn {
          position: absolute;
          top: 16px;
          right: 16px;
          border: none;
          background: none;
          font-size: 18px;
          cursor: pointer;
        }

        .store-panel h2 {
          font-size: 22px;
          letter-spacing: 2px;
          margin-bottom: 6px;
        }

        .tag {
          font-size: 12px;
          letter-spacing: 2px;
          color: #999;
          margin-bottom: 24px;
        }

        .status {
          font-size: 13px;
          letter-spacing: 1px;
          color: #1a7f37;
        }

        .address {
          margin-top: 12px;
          font-size: 14px;
          color: #444;
          line-height: 1.6;
        }

        .action-btn {
          margin-top: 32px;
          width: 100%;
          padding: 16px;
          background: #000;
          color: #fff;
          border: none;
          font-size: 13px;
          letter-spacing: 3px;
          cursor: pointer;
        }

        .ai-toggle {
          position: fixed;
          bottom: 24px;
          right: 24px;
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: #000;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          cursor: pointer;
          z-index: 1000;
        }

        .ai-wrapper {
          position: fixed;
          bottom: 92px;
          right: 24px;
          z-index: 1000;
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translate(-30px, -50%);
          }
          to {
            opacity: 1;
            transform: translate(0, -50%);
          }
        }
      `}</style>
    </div>
  );
};

export default AboutUs;
