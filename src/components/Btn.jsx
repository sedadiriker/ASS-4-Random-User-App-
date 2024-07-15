import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { getButtonStyle } from "../styles/globalStyles";

const Btn = ({ btnName }) => {
  const [hover, sethover] = useState(false);

  return (
    <Button
      style={getButtonStyle(hover)}
      onMouseEnter={() => sethover(true)}
      onMouseLeave={() => sethover(false)}
    >
      {btnName}
    </Button>
  );
};

export default Btn;
