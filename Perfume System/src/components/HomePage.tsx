import { useState } from "react";
import "../css/homepage.css";

import A1 from "../assets/A1.jpg";
import A2 from "../assets/A2.jpg";
import A3 from "../assets/A3.jpg";
import A7 from "../assets/A7.jpg";

import logo from "../assets/logo.svg";

import {
  Truck,
  BadgeCheck,
  Headset,
  MessageCircle,
  X,
} from "lucide-react";

import AIChat from "../components/AIChat";

const Homepage = () => {
  const [openAI, setOpenAI] = useState(false);

  return (
    <div className="lux-homepage">
      {/* A1 */}
      <div
        className="hero-section"
        style={{ backgroundImage: `url(${A1})` }}
      >
        <button className="discover-btn">
          TÌM HIỂU THÊM
        </button>
      </div>

      {/* SERVICE STRIP */}
      <div className="service-wrapper">
        <img src={logo} alt="Logo" className="service-logo" />

        <div className="service-strip">
          <div className="service-item">
            <Truck size={26} />
            <p>Giao hàng đúng thời gian cam kết</p>
          </div>

          <div className="service-item">
            <Headset size={26} />
            <p>Đội ngũ tư vấn viên nhiệt tình</p>
          </div>

          <div className="service-item">
            <BadgeCheck size={26} />
            <p>Cam kết hàng chính hãng 100%</p>
          </div>
        </div>

        <img src={logo} alt="Logo" className="service-logo" />
      </div>

      {/* A2 */}
      <div
        className="hero-section"
        style={{ backgroundImage: `url(${A2})` }}
      >
        <button className="discover-btn">
          TÌM HIỂU THÊM
        </button>
      </div>

      {/* A3 */}
      <div
        className="hero-section"
        style={{ backgroundImage: `url(${A3})` }}
      >
        <button className="discover-btn">
          TÌM HIỂU THÊM
        </button>
      </div>

      {/* A7 */}
      <div
        className="hero-section"
        style={{ backgroundImage: `url(${A7})` }}
      >
        <button className="discover-btn">
          TÌM HIỂU THÊM
        </button>
      </div>

      {/* 🤖 AI ICON */}
      <div
        className="ai-toggle-btn"
        onClick={() => setOpenAI(!openAI)}
      >
        {openAI ? <X size={24} /> : <MessageCircle size={24} />}
      </div>

      {/* 🤖 AI CHAT */}
      {openAI && (
        <div className="ai-chat-wrapper">
          <AIChat />
        </div>
      )}
    </div>
  );
};

export default Homepage;
