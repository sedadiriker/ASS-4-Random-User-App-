import React from "react";
import { Container } from "react-bootstrap";
import { tableHeaderStyle } from "../styles/globalStyles";

const AddUserTable = () => {
  const headerNames = ["FirstName", "Email", "Phone", "Age"];
 
  return (
    <Container className=" d-flex justify-content-center gap-2 mt-3">
      {headerNames.map((headerName) => (
        <p style={tableHeaderStyle}>{headerName}</p>
      ))}
    </Container>
  );
};

export default AddUserTable;
