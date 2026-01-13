import "../../css/footer.css";
import { Facebook, Instagram, Twitter, Rss } from "lucide-react";

const Footer = () => {
  return (
    <>
      {/* ================= SUBSCRIBE ================= */}
      <div className="subscribe-wrapper">
        <div className="subscribe-section">
          <div className="subscribe-left">
            Đăng ký để nhận ưu đãi qua email:
          </div>

          <div className="subscribe-right">
            <div className="subscribe-form">
              <input type="email" placeholder="Nhập email của bạn" />
              <button>ĐĂNG KÝ</button>
            </div>

            <div className="subscribe-social">
              <div className="social-item">
                <Facebook />
              </div>
              <div className="social-item">
                <Instagram />
              </div>
              <div className="social-item">
                <Twitter />
              </div>
              <div className="social-item">
                <Rss />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= FOOTER ================= */}
      <footer className="main-footer">
        <div className="footer-container">
          <div className="footer-col">
            <h4>THÔNG TIN</h4>
            <ul>
              <li>Giới thiệu</li>
              <li>Quy chế hoạt động</li>
              <li>Hợp tác</li>
              <li>Affiliate</li>
              <li>Tuyển dụng</li>
              <li>Liên hệ</li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>CÂU HỎI THƯỜNG GẶP</h4>
            <ul>
              <li>Tra cứu đơn hàng</li>
              <li>Đổi trả sản phẩm</li>
              <li>Không có hóa đơn?</li>
              <li>Thiếu sản phẩm</li>
              <li>Sản phẩm khác hình</li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>CHĂM SÓC KHÁCH HÀNG</h4>
            <ul>
              <li>Chính sách bán hàng</li>
              <li>Chính sách bảo hành</li>
              <li>Chính sách giao hàng</li>
              <li>Thanh toán</li>
              <li>Bảo mật</li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>DỊCH VỤ KHÁCH HÀNG</h4>
            <p><strong>Tên doanh nghiệp:</strong> Công ty ABC</p>
            <p><strong>Hotline:</strong> 0900 000 000</p>
            <p><strong>Email:</strong> support@email.com</p>
          </div>
        </div>

        <div className="footer-bottom">
          © 2026 Your Brand. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
