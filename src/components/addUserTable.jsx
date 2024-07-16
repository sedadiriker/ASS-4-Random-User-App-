import React from "react";
import { Container, Table } from "react-bootstrap";
import { tableHeaderStyle } from "../styles/globalStyles";

const AddUserTable = ({ selectedUsers }) => {
  const headerNames = ["FirstName", "Email", "Phone", "Age"];
  console.log(selectedUsers);
  return (
    <Container className="mt-3 ">
      <Table striped bordered hover style={{width:"100%",borderSpacing:"10px"}} >
        <thead>
          <tr>
            {headerNames.map((headerName, index) => (
              <th key={index} style={tableHeaderStyle}>{headerName}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {selectedUsers.map((user,index) => (
            <tr style={{fontSize: "14px", backgroundColor:"white"}}>
              <td>{user.name.first}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.dob.age}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default AddUserTable;
