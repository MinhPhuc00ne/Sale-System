import "../css/contact.css";
import C1 from "../assets/C1.jpg";
import C2 from "../assets/C2.jpg";
import C3 from "../assets/C3.jpg";
import C4 from "../assets/C4.jpg";

const PEOPLE = [
  {
    img: C1,
    name: "Alexandre Duval",
    role: "Founder & CEO",
    quote: "A fragrance is memory made visible.",
  },
  {
    img: C2,
    name: "Élise Moreau",
    role: "Master Perfumer",
    quote: "Each note must breathe like skin.",
  },
  {
    img: C3,
    name: "Julien Laurent",
    role: "Brand & Creative Director",
    quote: "Luxury is silence, not noise.",
  },
  {
    img: C4,
    name: "Camille Rousseau",
    role: "Head of Client Experience",
    quote: "Service is an invisible perfume.",
  },
];

const Contact = () => {
  return (
    <div className="contact-page">

      {/* HERO ESSAY */}
      <section className="contact-essay">
        <span className="essay-label">CONTACT</span>
        <h1>
          Fragrance is an intimate language.
        </h1>
        <p>
          It speaks before words, and remains long after silence.
          <br />
          Every message you send is read by the people behind the scent.
        </p>
      </section>

      {/* PEOPLE */}
      <section className="contact-people">
        <h2>OUR PEOPLE</h2>
        <div className="people-grid">
          {PEOPLE.map((p, i) => (
            <div className="people-card" key={i}>
              <img src={p.img} alt={p.name} />
              <div className="people-overlay">
                <h3>{p.name}</h3>
                <span>{p.role}</span>
                <p>{p.quote}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FORM + MAP */}
      <section className="contact-main">
        <div className="contact-form">
          <h3>Write to the House</h3>
          <input type="text" placeholder="Your name" />
          <input type="email" placeholder="Email address" />
          <select>
            <option>Fragrance Consultation</option>
            <option>Private Appointment</option>
            <option>Partnership</option>
          </select>
          <textarea placeholder="Your message" />
          <button>Send Message</button>
        </div>

        <div className="contact-map">
          {/* GẮN MAP CỦA BẠN Ở ĐÂY */}
        </div>
      </section>

      {/* INFO */}
      <section className="contact-info">
        <div>
          <h4>BOUTIQUE</h4>
          <p>District 1, Ho Chi Minh City</p>
        </div>
        <div>
          <h4>OPENING HOURS</h4>
          <p>Mon – Sun: 10:00 – 21:00</p>
        </div>
        <div>
          <h4>CONTACT</h4>
          <p>care@delixfragrance.com</p>
        </div>
      </section>

    </div>
  );
};

export default Contact;
