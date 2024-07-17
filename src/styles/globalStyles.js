export const getButtonStyle = (hover) => ({
    background: hover ? "#FEC861" : "#9D4C8C",
    color: hover ? "black" : "white",
    textTransform: "uppercase",
    border: "none",
    padding: "6px 2.5rem",
    transition: "background 0.3s",
    whiteSpace:"nowrap",
    marginTop:"2rem"
  });

export const tableHeaderStyle = ({
    background:"#FEC861",
    color:"#9E4C8D",
    whiteSpace:"nowrap",
    padding:"6px 1px",
    fontWeight:"bold",
    maxWidth:"5rem",
    fontSize:"12px"
  })