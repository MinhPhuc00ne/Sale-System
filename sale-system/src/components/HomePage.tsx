import "../css/homepage.css";

import cleanCodeImg from "../assets/cleancode.jpg";
import javaImg from "../assets/java.jpg";
import reactImg from "../assets/react.jpg";

type Book = {
  id: number;
  title: string;
  price: number;
  image: string;
};

const books: Book[] = [
  {
    id: 1,
    title: "Clean Code",
    price: 150000,
    image: cleanCodeImg,
  },
  {
    id: 2,
    title: "JavaScript Cơ Bản",
    price: 120000,
    image: javaImg,
  },
  {
    id: 3,
    title: "React Thực Chiến",
    price: 180000,
    image: reactImg,
  },
];

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="banner">
        <h1>Sách hay mỗi ngày 📖</h1>
        <p>Giảm giá đến 30% cho sinh viên</p>
      </div>

      <h2 className="section-title">Sách nổi bật</h2>

      <div className="book-list">
        {books.map((book) => (
          <div className="book-card" key={book.id}>
            <img src={book.image} alt={book.title} />
            <h3>{book.title}</h3>
            <p>{book.price.toLocaleString()} VNĐ</p>
            <button>Mua ngay</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homepage;
