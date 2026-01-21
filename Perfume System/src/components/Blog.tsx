import "../css/blog.css";

const BLOGS = [
  {
    title: "Mùi hương không chỉ để ngửi",
    tag: "INSIGHT",
    content: `
    Mùi hương không tồn tại để gây ấn tượng với người khác, mà để nhắc bạn nhớ mình là ai.
    Một mùi hương đúng không khiến bạn nổi bật hơn, mà khiến bạn cảm thấy trọn vẹn hơn.
    Có những ngày ta chọn mùi nhẹ như không khí, chỉ để bản thân được thở.
    Có những ngày ta cần mùi gỗ trầm, để đứng vững giữa hỗn loạn.
    Nước hoa không nói thay bạn, nó khuếch đại cảm xúc bạn đang mang.
    Khi xịt mùi hương, bạn đang chọn cách bước ra thế giới.
    Đó là lựa chọn tinh tế, không ồn ào.
    DELTIK tin rằng mùi hương là một dạng ngôn ngữ thầm lặng.
    Ngôn ngữ đó chỉ người thật sự cảm mới hiểu.
    Và khi hiểu rồi, bạn sẽ không bao giờ chọn mùi một cách ngẫu nhiên nữa.
    `,
  },
  {
    title: "Vì sao ký ức luôn có mùi?",
    tag: "MEMORY",
    content: `
    Con người nhớ mùi nhanh hơn hình ảnh và âm thanh.
    Một mùi hương có thể kéo bạn về một khoảnh khắc cách đây nhiều năm.
    Đó có thể là mùi áo cũ, mùi mưa, hay mùi ai đó từng rất quan trọng.
    Nước hoa vì thế không chỉ là sản phẩm, mà là chiếc chìa khóa ký ức.
    Khi mùi hương chạm vào khứu giác, nó chạm thẳng vào cảm xúc.
    Không qua logic, không cần lý trí.
    Bạn có thể quên khuôn mặt, nhưng rất khó quên mùi.
    DELTIK tạo mùi với ý niệm lưu giữ ký ức.
    Mỗi chai nước hoa là một lát cắt thời gian.
    Và khi mở nắp, ký ức thức dậy.
    `,
  },
  {
    title: "Mùi hương và bản lĩnh cá nhân",
    tag: "PERSONALITY",
    content: `
    Người tự tin không cần mùi quá gắt để chứng minh mình.
    Họ chọn mùi vừa đủ, nhưng rất rõ.
    Mùi hương phản ánh cách bạn hiện diện trong không gian.
    Không lấn át, không mờ nhạt.
    Một mùi hương tốt không xin phép để được chú ý.
    Nó tồn tại một cách tự nhiên.
    DELTIK hướng tới những cá nhân có bản sắc riêng.
    Không chạy theo xu hướng, không cần được công nhận.
    Mùi hương của họ không dành cho số đông.
    Nó dành cho những ai đủ tinh tế để cảm nhận.
    `,
  },
  {
    title: "Cách chọn mùi theo trạng thái cảm xúc",
    tag: "GUIDE",
    content: `
    Không phải ngày nào bạn cũng nên dùng cùng một mùi.
    Cảm xúc thay đổi, mùi hương cũng nên thay đổi.
    Ngày cần tập trung, hãy chọn mùi sạch và khô.
    Ngày cần kết nối, hãy chọn mùi ấm và tròn.
    Ngày muốn biến mất, hãy chọn mùi da thịt.
    Đừng chọn mùi để gây ấn tượng khi bạn đang mệt.
    Hãy chọn mùi để ôm lấy chính mình.
    DELTIK khuyến khích bạn lắng nghe cảm xúc trước khi chọn mùi.
    Khi bạn thật với mình, mùi hương sẽ thật với bạn.
    Đó là lúc mùi trở thành một phần của bạn.
    `,
  },
  {
    title: "Sự im lặng của mùi hương cao cấp",
    tag: "PHILOSOPHY",
    content: `
    Nước hoa cao cấp không ồn ào.
    Nó không cần quảng cáo quá nhiều.
    Mùi hương tốt có khoảng lặng.
    Khoảng lặng để người khác tự tiến lại gần.
    DELTIK không tạo mùi để gây sốc.
    Chúng tôi tạo mùi để tồn tại lâu dài.
    Một mùi hương trưởng thành là mùi không cần chứng minh.
    Nó hiện diện như một phần con người bạn.
    Không phô trương, không khoa trương.
    Chỉ cần ở đó, rất đúng.
    `,
  },
  {
    title: "Khi nước hoa trở thành chữ ký",
    tag: "SIGNATURE",
    content: `
    Có người được nhớ đến vì giọng nói.
    Có người được nhớ đến vì ánh nhìn.
    Và có người được nhớ đến vì mùi hương.
    Đó là khi mùi trở thành chữ ký cá nhân.
    Một chữ ký không cần ký tên.
    Chỉ cần xuất hiện.
    DELTIK tin rằng ai cũng có mùi của riêng mình.
    Không phải mùi phổ biến nhất.
    Mà là mùi đúng nhất.
    Khi tìm được rồi, bạn sẽ không cần tìm nữa.
    `,
  },
];

const Blog = () => {
  return (
    <div className="blog-page">
      {/* INTRO */}
      <section className="blog-intro">
        <span className="blog-label">BLOG</span>
        <h1>
          Mùi hương, ký ức <br /> và những điều không thể nói thành lời
        </h1>
        <p>
          Đây không phải blog bán hàng.
          <br />
          Đây là nơi DELTIK viết về cảm xúc, bản sắc và mùi hương.
        </p>
      </section>

      {/* BLOG LIST */}
      <section className="blog-list">
        {BLOGS.map((item, index) => (
          <article key={index} className="blog-card">
            <span className="blog-tag">{item.tag}</span>
            <h2>{item.title}</h2>
            <p>{item.content}</p>
          </article>
        ))}
      </section>

      {/* SPECIAL 1: SCENT QUOTE */}
      <section className="scent-quote">
        <p>
          “Mùi hương không đến để được chú ý.
          <br />
          Nó đến để được nhớ.”
        </p>
        <span>— DELTIK</span>
      </section>

      {/* SPECIAL 2: SCENT MEMORY BOX */}
      <section className="scent-memory">
        <h3>Scent Memory Box</h3>
        <p>
          Nếu bạn có một mùi hương gắn với ký ức không thể quên,
          hãy giữ nó cho riêng mình.
          <br />
          Vì đôi khi, ký ức đẹp nhất không cần chia sẻ.
        </p>
      </section>
    </div>
  );
};

export default Blog;
