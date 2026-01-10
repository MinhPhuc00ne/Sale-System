import "../css/homepage.css";

import A1 from "../assets/A1.jpg";
import A2 from "../assets/A2.jpg";
import A3 from "../assets/A3.jpg";
import A7 from "../assets/A7.jpg";

const Homepage = () => {
  return (
    <div className="lux-homepage">
      {/* A1 */}
      <div
        className="hero-section"
        style={{ backgroundImage: `url(${A1})` }}
      >
        <button className="discover-btn">TÌM HIỂU THÊM</button>
      </div>

      {/* SLOGAN */}
      <div className="slogan-section">
        <h2>Come and Here, Come and experience.</h2>
      </div>

      {/* A2 */}
      <div
        className="hero-section"
        style={{ backgroundImage: `url(${A2})` }}
      >
        <button className="discover-btn">TÌM HIỂU THÊM</button>
      </div>

      {/* A3 */}
      <div
        className="hero-section"
        style={{ backgroundImage: `url(${A3})` }}
      >
        <button className="discover-btn">TÌM HIỂU THÊM</button>
      </div>

      {/* A7 */}
      <div
        className="hero-section"
        style={{ backgroundImage: `url(${A7})` }}
      >
        <button className="discover-btn">TÌM HIỂU THÊM</button>
      </div>
    </div>
  );
};

export default Homepage;
