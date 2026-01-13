import { useState } from "react";

/* ================= TYPES ================= */
type Message = {
  role: "user" | "assistant";
  content: string;
};

/* ================= AI LOGIC ================= */
const getAIReply = (text: string): string => {
  const msg = text.toLowerCase();

  /* ===== GREETING ===== */
  if (
    msg.includes("hello") ||
    msg.includes("hi") ||
    msg.includes("chào") ||
    msg.includes("xin chào")
  ) {
    return "Chào bạn ✨ Tôi là trợ lý tư vấn nước hoa. Bạn đang tìm mùi hương cho dịp nào?";
  }

  /* ===== SCENT STYLE ===== */
  if (msg.includes("nhẹ")) {
    return "Mùi nhẹ thường là hương citrus, trà xanh hoặc hoa trắng. Phù hợp dùng ban ngày và môi trường văn phòng.";
  }

  if (msg.includes("đậm") || msg.includes("mạnh")) {
    return "Mùi đậm thường có hương gỗ, da thuộc hoặc amber. Phù hợp dùng buổi tối hoặc đi tiệc.";
  }

  if (msg.includes("ngọt")) {
    return "Mùi ngọt thường là vanilla, caramel hoặc hoa quả. Phù hợp đi tiệc, sinh nhật hoặc buổi tối.";
  }

  if (msg.includes("mát")) {
    return "Mùi mát thường là bạc hà, cam chanh, biển. Rất hợp dùng mùa hè hoặc ban ngày.";
  }

  /* ===== OCCASION ===== */
  if (msg.includes("đi tiệc")) {
    return "Đi tiệc bạn nên chọn mùi hương nổi bật, lưu hương tốt như amber, vanilla hoặc hương gỗ ấm.";
  }

  if (msg.includes("sinh nhật")) {
    return "Sinh nhật nên dùng mùi dễ chịu nhưng vẫn ấn tượng, như hoa trắng pha vanilla nhẹ.";
  }

  if (msg.includes("đi làm") || msg.includes("công sở")) {
    return "Đi làm nên chọn mùi nhẹ, thanh lịch để không gây khó chịu cho người xung quanh.";
  }

  if (msg.includes("đi học")) {
    return "Đi học phù hợp với mùi mát, nhẹ như citrus hoặc trà xanh.";
  }

  if (msg.includes("hẹn hò")) {
    return "Hẹn hò nên chọn mùi ấm, quyến rũ nhẹ như xạ hương hoặc vanilla.";
  }

  /* ===== GENDER ===== */
  if (msg.includes("nam")) {
    return "Nam giới thường phù hợp với mùi gỗ, citrus, hoặc hương biển. Bạn thích nhẹ hay đậm?";
  }

  if (msg.includes("nữ")) {
    return "Nữ giới thường hợp với mùi hoa, ngọt nhẹ hoặc fruity. Bạn dùng ban ngày hay buổi tối?";
  }

  if (msg.includes("unisex")) {
    return "Unisex thường là mùi trà, gỗ nhẹ hoặc citrus. Dễ dùng cho nhiều hoàn cảnh.";
  }

  /* ===== TIME ===== */
  if (msg.includes("ban ngày")) {
    return "Ban ngày nên dùng mùi nhẹ, mát để tạo cảm giác dễ chịu.";
  }

  if (msg.includes("buổi tối")) {
    return "Buổi tối phù hợp với mùi ấm, sâu và lưu hương tốt.";
  }

  /* ===== WEATHER ===== */
  if (msg.includes("mùa hè")) {
    return "Mùa hè rất hợp với mùi mát, citrus hoặc biển.";
  }

  if (msg.includes("mùa đông")) {
    return "Mùa đông nên dùng mùi ấm như gỗ, vanilla hoặc amber.";
  }

  /* ===== PERFORMANCE ===== */
  if (msg.includes("lưu hương")) {
    return "Các mùi gỗ, amber và vanilla thường có độ lưu hương rất tốt.";
  }

  if (msg.includes("tỏa hương")) {
    return "Nếu bạn muốn tỏa hương tốt, hãy chọn nước hoa có nồng độ EDP hoặc Parfum.";
  }

  /* ===== PRICE ===== */
  if (msg.includes("rẻ") || msg.includes("giá thấp")) {
    return "Bạn có thể chọn các mùi nhẹ, dễ dùng với mức giá vừa phải cho sử dụng hàng ngày.";
  }

  if (msg.includes("cao cấp") || msg.includes("sang")) {
    return "Nước hoa cao cấp thường có mùi phức tạp và độ lưu hương tốt, rất phù hợp làm quà tặng.";
  }

  /* ===== GIFT ===== */
  if (msg.includes("quà")) {
    return "Làm quà tặng bạn nên chọn mùi unisex, dễ dùng và thanh lịch.";
  }

  /* ===== DEFAULT ===== */
  return "Bạn có thể cho mình biết thêm về dịp sử dụng, giới tính hoặc mùi hương bạn thích không?";
};

/* ================= COMPONENT ================= */
const AIChat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = () => {
    if (!input.trim()) return;

    const newMessages: Message[] = [
      ...messages,
      { role: "user", content: input },
    ];

    setMessages(newMessages);
    setInput("");
    setLoading(true);

    setTimeout(() => {
      setMessages([
        ...newMessages,
        {
          role: "assistant",
          content: getAIReply(input),
        },
      ]);
      setLoading(false);
    }, 700);
  };

  return (
    <div
      style={{
        width: 340,
        background: "#0f0f0f",
        color: "#fff",
        padding: 16,
        borderRadius: 12,
        boxShadow: "0 8px 30px rgba(0,0,0,0.6)",
      }}
    >
      <h3>💬 Tư vấn nước hoa</h3>

      <div style={{ height: 260, overflowY: "auto", marginBottom: 12 }}>
        {messages.map((m, i) => (
          <div key={i} style={{ marginBottom: 8 }}>
            <b>{m.role === "user" ? "Bạn" : "AI"}:</b> {m.content}
          </div>
        ))}
        {loading && <p style={{ opacity: 0.6 }}>AI đang suy nghĩ...</p>}
      </div>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Nhập mùi bạn thích..."
        style={{
          width: "100%",
          padding: 10,
          borderRadius: 6,
          border: "none",
          marginBottom: 8,
        }}
        onKeyDown={(e) => e.key === "Enter" && sendMessage()}
      />

      <button
        onClick={sendMessage}
        style={{
          width: "100%",
          padding: 10,
          borderRadius: 6,
          border: "none",
          background: "#fff",
          color: "#000",
          fontWeight: 600,
          cursor: "pointer",
        }}
      >
        Gửi
      </button>
    </div>
  );
};

export default AIChat;
