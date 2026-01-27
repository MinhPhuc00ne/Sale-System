import { useState } from "react";
import "../css/contact.css";
import AIChat from "../components/AIChat";

/* ================= DATA ================= */
const MOODS: string[] = [
  "Thanh sạch",
  "Ấm áp",
  "Gợi cảm",
  "Trầm tĩnh",
  "Tươi mới",
  "Cá tính",
];

type FAQ = {
  q: string;
  a: string;
};

const FAQS: FAQ[] = [
  {
    q: "DELTIK có hỗ trợ tư vấn chọn mùi không?",
    a: "Có. Bạn chỉ cần chia sẻ cảm xúc hoặc hoàn cảnh sử dụng, DELTIK sẽ gợi ý mùi phù hợp.",
  },
  {
    q: "Tôi chưa từng dùng nước hoa niche, có phù hợp không?",
    a: "Hoàn toàn phù hợp. DELTIK hướng đến trải nghiệm cá nhân, dễ cảm và tinh tế.",
  },
  {
    q: "Mùi hương giữ được bao lâu?",
    a: "Trung bình 6–10 giờ trên da, lâu hơn trên vải, tùy cơ địa.",
  },
  {
    q: "Có thể chọn mùi làm quà không?",
    a: "Có. DELTIK hỗ trợ tư vấn mùi theo người nhận và hoàn cảnh tặng.",
  },
  {
    q: "DELTIK có cửa hàng không?",
    a: "Hiện tại DELTIK hoạt động online và pop-up theo từng thời điểm.",
  },
  {
    q: "Có dịch vụ khắc tên không?",
    a: "Có. Khắc tên giúp chai nước hoa trở thành dấu ấn cá nhân.",
  },
  {
    q: "Bao lâu tôi nhận được phản hồi?",
    a: "Trong vòng 24 giờ làm việc.",
  },
];

const POLICIES: string[] = [
  "Hỗ trợ đổi sản phẩm trong vòng 7 ngày kể từ khi nhận hàng.",
  "Sản phẩm phải còn nguyên vẹn và chưa qua sử dụng.",
  "Không áp dụng đổi trả với sản phẩm đã khắc tên.",
  "Chi phí vận chuyển đổi trả do khách hàng chi trả (trừ lỗi từ DELTIK).",
  "Sản phẩm lỗi hoặc giao sai sẽ được đổi mới 100%.",
  "Mỗi đơn hàng chỉ được đổi một lần.",
  "Không hoàn tiền mặt, chỉ hỗ trợ đổi sản phẩm tương đương.",
  "Yêu cầu đổi trả cần được xác nhận qua email hoặc hotline.",
];

type ActiveBox = "" | "faq" | "policy";

const Contact = () => {
  const [activeBox, setActiveBox] = useState<ActiveBox>("");
  const [sent, setSent] = useState<boolean>(false);
  const [openAI, setOpenAI] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="contact-page">
      {/* ================= OVERLAY ================= */}
      {activeBox && (
        <div className="contact-overlay">
          <div className="overlay-inner">
            <button
              className="overlay-back"
              onClick={() => setActiveBox("")}
            >
              ← Quay lại
            </button>

            {activeBox === "faq" && (
              <>
                <h2>Câu hỏi thường gặp</h2>
                {FAQS.map((item, i) => (
                  <div key={i} className="qa-item">
                    <h4>{item.q}</h4>
                    <p>{item.a}</p>
                  </div>
                ))}
              </>
            )}

            {activeBox === "policy" && (
              <>
                <h2>Chính sách giao hàng & đổi trả</h2>
                <ul>
                  {POLICIES.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      )}

      {/* ================= INTRO ================= */}
      <section className="contact-intro">
        <span className="contact-label">CONTACT</span>
        <h1>
          Bạn cần tư vấn chọn mùi, hỗ trợ đơn hàng,
          <br />
          hay muốn chuẩn bị một món quà đặc biệt?
        </h1>
        <p>
          DELTIK luôn sẵn sàng lắng nghe —
          <br />
          <strong>“mùi của chính mình”</strong>.
        </p>
      </section>

      {/* ================= MOOD ================= */}
      <section className="contact-mood">
        <p className="mood-title">
          Hôm nay bạn đang tìm mùi theo cảm xúc nào?
        </p>
        <div className="mood-list">
          {MOODS.map((mood, i) => (
            <span key={i} className="mood-chip">
              {mood}
            </span>
          ))}
        </div>
      </section>

      {/* ================= MAIN ================= */}
      <section className="contact-main">
        <div className="contact-info">
          <h3>Thông tin liên hệ</h3>

          <div className="info-block">
            <span>Email</span>
            <p>DeltikSupport110224@email.com</p>
          </div>

          <div className="info-block">
            <span>Hotline</span>
            <p>+84 900 000 000</p>
          </div>

          <div className="info-block">
            <span>Social</span>
            <p>Instagram · TikTok · Facebook</p>
          </div>

          <div className="info-block">
            <span>Thời gian phản hồi</span>
            <p>Trong vòng 24 giờ làm việc</p>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h3>Gửi lời nhắn cho DELTIK</h3>

          <input placeholder="Họ và tên *" required />
          <input placeholder="Email hoặc SĐT *" required />

          <select required>
            <option value="">Chủ đề *</option>
            <option>Tư vấn mùi</option>
            <option>Đơn hàng</option>
            <option>Khắc tên</option>
            <option>Quà tặng</option>
            <option>Khác</option>
          </select>

          <textarea
            required
            placeholder={`Bạn đang tìm mùi theo mood nào?
Bạn thích hoặc không thích nốt hương nào?`}
          />

          {!sent ? (
            <button type="submit">Gửi cho DELTIK</button>
          ) : (
            <div className="submit-success">
              ✓ Gửi thành công
              <br />
              DELTIK sẽ phản hồi bạn trong vòng 24 giờ làm việc.
            </div>
          )}
        </form>
      </section>

      {/* ================= LINKS ================= */}
      <section className="contact-links">
        <button onClick={() => setActiveBox("faq")}>
          Xem Câu hỏi thường gặp (FAQ)
        </button>
        <button onClick={() => setActiveBox("policy")}>
          Chính sách giao hàng & đổi trả
        </button>
      </section>

      {/* ================= EXPECTATION ================= */}
      <section className="contact-expectation">
        <p>
          Mỗi tin nhắn đều được đọc bởi đội ngũ đứng sau mùi hương —
          <br />
          không phải bot, không phải trả lời sẵn.
        </p>
      </section>

      {/* ================= AI FLOAT ================= */}
<div
  className="ai-toggle"
  onClick={() => setOpenAI(!openAI)}
>
  {openAI ? "✕" : "💬"}
</div>

{openAI && (
  <div className="ai-float">
    <AIChat />
  </div>
)};
    </div>
  );
}
export default Contact;
