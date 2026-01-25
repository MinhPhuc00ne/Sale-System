import { Phone, Facebook } from "lucide-react";

const FloatingContact = () => {
  return (
    <div
      style={{
        position: "fixed",
        right: "18px",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 99999,
        display: "flex",
        flexDirection: "column",
        gap: "18px",
      }}
    >
      {/* ZALO */}
      <a
        href="https://zalo.me/0123456789"
        target="_blank"
        rel="noreferrer"
        style={zaloStyle}
      >
        Zalo
      </a>

      {/* FACEBOOK */}
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noreferrer"
        style={icon("#1877f2")}
      >
        <Facebook size={34} />
      </a>

      {/* PHONE */}
      <a href="tel:0123456789" style={icon("#22c55e")}>
        <Phone size={34} />
      </a>
    </div>
  );
};

const SIZE = 76;

const icon = (bg: string): React.CSSProperties => ({
  width: SIZE,
  height: SIZE,
  borderRadius: "50%",
  background: bg,
  color: "#fff",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  boxShadow: "0 12px 28px rgba(0,0,0,0.35)",
  cursor: "pointer",
  textDecoration: "none",

  transition: "transform 0.2s ease",
});

const zaloStyle: React.CSSProperties = {
  width: SIZE,
  height: SIZE,
  borderRadius: "50%",
  background: "#fff",
  color: "#0068ff",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  fontWeight: 700,
  fontSize: "18px",

  border: "3px solid #0068ff",
  boxShadow: "0 12px 28px rgba(0,0,0,0.3)",
  textDecoration: "none",
  cursor: "pointer",
};

export default FloatingContact;
