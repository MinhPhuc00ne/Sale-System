export type ProductDetail = {
  id: number;
  description: string;
  inspiration: string;
  design: string;
};

export const Mockdata: ProductDetail[] = Array.from({ length: 30 }).map(
  (_, i) => ({
    id: i + 1,

    description:
      "Sản phẩm nước hoa cao cấp được tuyển chọn kỹ lưỡng từ những nguyên liệu tinh túy nhất. Mùi hương mở đầu nhẹ nhàng, tinh tế và dễ gây thiện cảm. Tầng hương giữa phát triển rõ nét, tạo chiều sâu cảm xúc và sự cuốn hút tự nhiên. Khi khô xuống, hương nền ấm áp lưu luyến trên da suốt nhiều giờ. Phù hợp sử dụng cả ban ngày lẫn buổi tối. Một lựa chọn an toàn nhưng không hề nhàm chán.",

    inspiration:
      "Lấy cảm hứng từ vẻ đẹp thanh lịch của phong cách sống hiện đại, mùi hương này đại diện cho sự tự tin và tinh tế. Những nốt hương đầu mang lại cảm giác tươi mới, dễ chịu. Tầng hương giữa gợi lên sự mềm mại và nữ tính đầy chiều sâu. Khi hương cuối xuất hiện, cảm giác ấm áp và sang trọng dần bao trùm. Đây là mùi hương dành cho người hiểu rõ giá trị bản thân. Một dấu ấn tinh tế nhưng khó quên.",

    design:
      "Thiết kế chai mang đậm tinh thần châu Âu cổ điển kết hợp cùng nét tối giản hiện đại. Thân chai được chế tác từ thủy tinh cao cấp với độ hoàn thiện cao. Các chi tiết bo cong tạo cảm giác mềm mại và thanh lịch. Nắp chai kim loại khắc logo tinh xảo, thể hiện đẳng cấp thương hiệu. Tổng thể mang lại cảm giác sang trọng nhưng không phô trương. Một điểm nhấn hoàn hảo trên bàn trang điểm.",
  })
);
