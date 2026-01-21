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
    msg.includes("xin chào") ||
    msg.includes("alo")
  ) {
    return "Chào bạn ✨ Tôi là trợ lý tư vấn DELIX. Bạn đang tìm mùi hương hay boutique gần bạn?";
  }

  /* ===== LOCATION / STORE ===== */
  if (
    msg.includes("cửa hàng") ||
    msg.includes("chi nhánh") ||
    msg.includes("shop") ||
    msg.includes("store")
  ) {
    return "DELIX hiện có boutique tại TP.HCM và Hà Nội. Bạn muốn tìm cửa hàng ở khu vực nào?";
  }

  if (msg.includes("gần tôi") || msg.includes("gần đây")) {
    return "Bạn đang ở TP.HCM hay Hà Nội? Mình sẽ gợi ý boutique DELIX gần bạn nhất ✨";
  }

  if (
    msg.includes("tp.hcm") ||
    msg.includes("tphcm") ||
    msg.includes("hcm") ||
    msg.includes("sài gòn")
  ) {
    return "Tại TP.HCM, DELIX có boutique tại khu vực HUTECH – không gian hiện đại, riêng tư và đầy đủ các dòng nước hoa signature.";
  }

  if (msg.includes("hà nội") || msg.includes("hn")) {
    return "Tại Hà Nội, DELIX có boutique tại Hoàn Kiếm, Ba Đình và Tây Hồ – mỗi nơi mang phong cách tinh tế và trải nghiệm cá nhân hóa.";
  }

  if (msg.includes("hoàn kiếm")) {
    return "Boutique DELIX Hoàn Kiếm nằm tại trung tâm thành phố, phù hợp trải nghiệm các dòng nước hoa cao cấp và unisex.";
  }

  if (msg.includes("ba đình")) {
    return "DELIX Ba Đình mang phong cách trầm – sang, rất phù hợp với các mùi hương gỗ và amber.";
  }

  if (msg.includes("tây hồ")) {
    return "Boutique DELIX Tây Hồ có không gian thoáng, yên tĩnh – lý tưởng để trải nghiệm các mùi hương nhẹ và tinh tế.";
  }

  if (
    msg.includes("giờ mở cửa") ||
    msg.includes("mấy giờ mở")
  ) {
    return "Các boutique DELIX mở cửa từ 9:00 đến 21:00 hằng ngày. Bạn muốn ghé chi nhánh nào?";
  }

  if (
    msg.includes("test mùi") ||
    msg.includes("thử mùi") ||
    msg.includes("trải nghiệm")
  ) {
    return "Tại boutique DELIX, bạn có thể test mùi trực tiếp và được tư vấn cá nhân hóa theo phong cách & hoàn cảnh sử dụng.";
  }

  /* ===== SCENT STYLE ===== */
  if (msg.includes("nhẹ")) {
    return "Mùi nhẹ thường là citrus, trà xanh hoặc hoa trắng – phù hợp ban ngày và môi trường công sở.";
  }

  if (msg.includes("đậm") || msg.includes("mạnh")) {
    return "Mùi đậm thường có hương gỗ, amber hoặc da thuộc – phù hợp buổi tối hoặc đi tiệc.";
  }

  if (msg.includes("ngọt")) {
    return "Mùi ngọt như vanilla hoặc fruity rất phù hợp cho tiệc tối hoặc hẹn hò.";
  }

  if (msg.includes("mát")) {
    return "Mùi mát như cam chanh, bạc hà hoặc biển rất lý tưởng cho mùa hè.";
  }

  /* ===== OCCASION ===== */
  if (msg.includes("đi làm") || msg.includes("công sở")) {
    return "Đi làm nên chọn mùi nhẹ, thanh lịch để tạo ấn tượng tinh tế.";
  }

  if (msg.includes("hẹn hò")) {
    return "Hẹn hò nên chọn mùi ấm, quyến rũ nhẹ như xạ hương hoặc vanilla.";
  }

  if (msg.includes("tuyển dụng")) {
  return "Chúng tôi không tuyển người làm việc. Chúng tôi tìm người để lại dấu mùi. Nếu bạn tin rằng cảm xúc quan trọng hơn tốc độ, bạn có thể thuộc về DELTIK.";
}

if (msg.includes("ứng tuyển")) {
  return "DELTIK không tìm CV hoàn hảo. Chúng tôi muốn nghe câu chuyện của bạn, cách bạn cảm nhận thế giới và điều bạn muốn để lại.";
}

if (msg.includes("làm việc")) {
  return "Làm việc tại DELTIK là đi chậm, quan sát kỹ và tôn trọng từng chi tiết. Mỗi người ở đây là một tầng hương, không thể thay thế.";
}

if (msg.includes("gia nhập")) {
  return "Gia nhập DELTIK không phải để giống nhau, mà để khác đi một cách tinh tế. Nếu bạn đủ nhạy cảm để nhận ra điều đó, chúng tôi sẵn sàng lắng nghe.";
}

if (msg.includes("career") || msg.includes("công việc")) {
  return "Con đường tại DELTIK không được định nghĩa bằng chức danh. Nó được định nghĩa bằng cảm xúc bạn tạo ra và ký ức bạn để lại.";
}

if (msg.includes("liên hệ")) {
  return "Bạn có thể liên hệ với DELTIK bất cứ khi nào cần một lời tư vấn chân thành. Chúng tôi luôn sẵn sàng lắng nghe.";
}

if (msg.includes("contact")) {
  return "Liên hệ với DELTIK không chỉ để hỏi thông tin, mà để bắt đầu một cuộc trò chuyện về mùi hương và cảm xúc.";
}

if (msg.includes("email")) {
  return "Hãy gửi email cho DELTIK khi bạn cần tư vấn, hợp tác hoặc đơn giản là muốn chia sẻ một cảm xúc về mùi hương.";
}

if (msg.includes("hỗ trợ")) {
  return "Đội ngũ DELTIK hỗ trợ bằng sự kiên nhẫn và tôn trọng. Mỗi câu hỏi đều được lắng nghe cẩn thận.";
}

if (msg.includes("tư vấn")) {
  return "Nếu bạn chưa biết mình hợp mùi gì, hãy liên hệ DELTIK. Chúng tôi giúp bạn tìm mùi phù hợp với cảm xúc của bạn, không theo xu hướng.";
}

if (msg.includes("hợp tác")) {
  return "DELTIK luôn mở lòng với những mối hợp tác có chiều sâu, nơi giá trị và cảm xúc được đặt lên hàng đầu.";
}

if (msg.includes("góp ý")) {
  return "Mọi góp ý dành cho DELTIK đều đáng quý. Đó là cách chúng tôi hoàn thiện từng trải nghiệm mùi hương mỗi ngày.";
}
if (msg.includes("blog") && msg.includes("giao hàng")) {
  return "Mỗi đơn hàng của DELTIK không chỉ là một sản phẩm, mà là một trải nghiệm được chuẩn bị cẩn thận từ khoảnh khắc đóng gói. Chúng tôi tin rằng cách một mùi hương đến tay bạn cũng quan trọng như chính mùi hương đó. Giao hàng được thực hiện với sự chậm rãi cần thiết để đảm bảo trọn vẹn cảm xúc. Khi mở hộp, trải nghiệm đã bắt đầu từ trước đó rất lâu.";
}
if (msg.includes("giao hàng")) {
  return "Giao hàng tại DELTIK không chỉ là bước cuối cùng, mà là một phần của trải nghiệm. Mỗi đơn hàng được chuẩn bị cẩn thận, từ cách đóng gói đến hành trình vận chuyển. Chúng tôi chọn sự chậm rãi và chính xác thay vì vội vàng. Bởi mùi hương xứng đáng được đến tay bạn một cách trọn vẹn.";
}

if (msg.includes("đội ngũ")) {
  return "Đội ngũ DELTIK được tạo nên từ những người trầm, sâu và thật. Chúng tôi tin rằng sự im lặng đúng lúc còn giá trị hơn ngàn lời nói.";
}
  /* ===== DEFAULT ===== */
  return "Bạn có thể cho mình biết thêm về mùi hương yêu thích, dịp sử dụng hoặc khu vực bạn muốn ghé boutique không?";
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
        { role: "assistant", content: getAIReply(input) },
      ]);
      setLoading(false);
    }, 600);
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
      <h3 style={{ marginBottom: 8 }}>💬 Tư vấn nước hoa</h3>

      <div style={{ height: 260, overflowY: "auto", marginBottom: 12 }}>
        {messages.map((m, i) => (
          <div key={i} style={{ marginBottom: 8 }}>
            <b>{m.role === "user" ? "Bạn" : "DELIX"}:</b> {m.content}
          </div>
        ))}
        {loading && <p style={{ opacity: 0.6 }}>đang suy nghĩ…</p>}
      </div>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Hỏi về mùi hương hoặc boutique..."
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
