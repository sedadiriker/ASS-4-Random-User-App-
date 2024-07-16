export const getButtonStyle = (hover) => ({
    background: hover ? "#FEC861" : "#9D4C8C",
    color: hover ? "black" : "white",
    textTransform: "uppercase",
    border: "none",
    margin: "24px 96px 0 96px",
    padding: "6px 25px",
    transition: "background 0.3s",
  });

export const tableHeaderStyle = ({
    background:"#FEC861",
    color:"#9E4C8D",
    whiteSpace:"nowrap",
    padding:"6px 50px",
    fontWeight:"bold",
  })