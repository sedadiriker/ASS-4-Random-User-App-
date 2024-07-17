import React from "react";
import { Container, Table } from "react-bootstrap";
import { tableHeaderStyle } from "../styles/globalStyles";

const AddUserTable = ({ selectedUsers }) => {
  const headerNames = ["FirstName", "Email", "Phone", "Age"];
  console.log(selectedUsers);
  return (
      <Table striped bordered hover style={{width:"100%", marginTop:"1rem"}} >
        <thead>
          <tr>
            {headerNames.map((headerName, index) => (
              <th key={index} style={tableHeaderStyle}>{headerName}</th>
            ))}
          </tr>
        </thead>
        <tbody className="w-100">
          {selectedUsers.map((user,index) => (
            <tr style={{fontSize: "14px"}}>
              <td>{user.name.first}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.dob.age}</td>
            </tr>
          ))}
        </tbody>
      </Table>
  );
};

export default AddUserTable;
