export const getButtonStyle = (hover) => ({
    background: hover ? "#FEC861" : "#9D4C8C",
    color: hover ? "black" : "white",
    textTransform: "uppercase",
    border: "none",
    margin: "24px 96px 0 96px",
    padding: "6px 25px",
    transition: "background 0.3s",
  });