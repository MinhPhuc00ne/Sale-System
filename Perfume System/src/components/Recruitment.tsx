import { useState } from "react";
import "../css/recruitment.css";
import { MessageCircle, X } from "lucide-react";
import AIChat from "../components/AIChat";

/* ================= ASSETS ================= */
import HeroImg from "../assets/recruitment-1.jpg";
import CertImg from "../assets/D1.jpg";

/* ================= DATA ================= */
const ROLES = [
  {
    title: "Perfume Creator",
    desc: "Bạn không pha mùi. Bạn tạo ra ký ức.",
    detail: `
Tại DELTIK, Perfume Creator là người kể chuyện bằng khứu giác.
Mỗi công thức bắt đầu từ một cảm xúc rất thật.
Bạn nghiên cứu nguyên liệu — nhưng quan trọng hơn, bạn nghiên cứu con người.
Có những mùi không cần nổi bật, chỉ cần đúng.
Sai một nốt, cảm xúc lệch đi.
Đúng một nốt, ký ức được sinh ra.
    `,
  },
  {
    title: "Brand Storyteller",
    desc: "Bạn viết để được nhớ, không phải để bán.",
    detail: `
Bạn tin rằng chữ cũng có mùi.
Bạn hiểu nhịp thở, khoảng lặng và sự tiết chế.
Bạn kể những câu chuyện không hoàn hảo nhưng chân thật.
Giữa hàng ngàn thương hiệu, bạn chọn đi chậm hơn để đi sâu hơn.
    `,
  },
  {
    title: "Visual / Content Creator",
    desc: "Bạn nhìn thế giới bằng ánh sáng và cảm xúc.",
    detail: `
Hình ảnh tại DELTIK không cần ồn ào.
Bạn làm việc với ánh sáng, chất liệu và không gian trống.
Một khung hình tốt khiến người xem muốn dừng lại.
Hình ảnh phải chạm trước khi mùi xuất hiện.
    `,
  },
  {
    title: "Retail Experience",
    desc: "Bạn là điểm chạm đầu tiên giữa người và mùi.",
    detail: `
Bạn không bán hàng — bạn tạo trải nghiệm.
Bạn lắng nghe nhiều hơn nói.
Mỗi người bước vào đều mang theo một câu chuyện.
Khoảnh khắc đúng có thể theo họ nhiều năm sau.
    `,
  },
];

const Recruitment = () => {
  const [selectedRole, setSelectedRole] = useState<any>(null);
  const [openAI, setOpenAI] = useState(false);

  return (
    <div className="recruitment-page">
      {/* HERO */}
      <section className="recruitment-hero">
        <div className="hero-text">
          <span className="recruitment-label">RECRUITMENT</span>
          <h1>Join the fifth scent</h1>
          <p>
            Không tuyển người làm việc.
            <br />
            Chúng tôi tìm người để lại <strong>dấu mùi</strong>.
          </p>
        </div>
        <div className="hero-image">
          <img src={HeroImg} alt="DELTIK Studio" />
        </div>
      </section>

      {/* WHY */}
      <section className="recruitment-why">
        <h2>Why we exist</h2>
        <p>
          DELTIK bắt đầu từ một khoảnh khắc rất nhỏ — tiếng “tik” khi mở nắp chai.
          Nhưng chính khoảnh khắc đó lại mở ra cả một thế giới cảm xúc.
        </p>
        <p>
          Chúng tôi tin rằng nước hoa không để gây chú ý.
          Nó tồn tại để được nhớ, để nhận ra bản thân
          và để kết nối những con người xa lạ.
        </p>
        <span className="quote">Scent is memory.</span>
      </section>

      {/* CERT */}
      <section className="recruitment-cert">
        <img src={CertImg} alt="DELTIK Certification" />
        <div className="cert-text">
          <h2>Craftsmanship & Certification</h2>
          <p>
            Chứng chỉ tại DELTIK không để trưng bày.
            Nó đại diện cho sự tôn trọng nguyên liệu,
            kiểm soát chất lượng và đạo đức sáng tạo.
          </p>
          <p>
            Sáng tạo cần nền tảng vững chắc.
            Đây là cam kết rằng mỗi mùi hương
            được tạo ra trong môi trường minh bạch
            và có trách nhiệm lâu dài.
          </p>
        </div>
      </section>

      {/* ROLES */}
      <section className="recruitment-roles">
        <h2>Who we are looking for</h2>
        <div className="role-grid">
          {ROLES.map((role, i) => (
            <div
              key={i}
              className="role-card"
              onClick={() => setSelectedRole(role)}
            >
              <h3>{role.title}</h3>
              <p>{role.desc}</p>
              <span className="role-more">Read more</span>
            </div>
          ))}
        </div>
      </section>

      {/* MODAL */}
      {selectedRole && (
        <div
          className="role-modal-overlay"
          onClick={() => setSelectedRole(null)}
        >
          <div className="role-modal" onClick={(e) => e.stopPropagation()}>
            <h3>{selectedRole.title}</h3>
            {selectedRole.detail
              .trim()
              .split("\n")
              .map((line: string, i: number) => (
                <p key={i}>{line}</p>
              ))}
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="recruitment-cta">
        <h2>Tell us your scent</h2>
        <p>
          Không cần CV hoàn hảo.
          <br />
          Hãy kể cho chúng tôi bạn là ai.
        </p>
        <a href="mailto:testarossa@deltik.com">
          testarossa@deltik.com
        </a>
      </section>

      {/* AI CHAT */}
      <div className="ai-toggle-btn" onClick={() => setOpenAI(!openAI)}>
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

export default Recruitment;
