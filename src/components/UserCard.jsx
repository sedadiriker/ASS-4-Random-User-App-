import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { getUser } from "../services/api";

const UserCard = () => {
  const [user, setuser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUser();
      setuser(data);
    };
    fetchData();
  }, []);
  return (
    <Card style={{ width: "50%",height:"60%" }}>
      <Card.Header style={{ height: "30%" }}>
        
      </Card.Header>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default UserCard;
