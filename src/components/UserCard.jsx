import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { getUser } from "../services/api";
import SvgIcons from "./SvgIcons";
import man from "../assets/man.svg"
import mail from "../assets/mail.svg"
import growingMan from "../assets/growing-up-man.svg"
import growingWomen from "../assets/growing-up-woman.svg"
import map from "../assets/map.svg"
import phone from "../assets/phone.svg"
import lock from "../assets/padlock.svg"
import { Container } from "react-bootstrap";
const UserCard = () => {
  const [user, setuser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUser();
      console.log(data[0]);
      setuser(data);
    };
    fetchData();
  }, []);


  return (
    <Card style={{ width: "57%", height: "60%", textAlign:"center" }}>
      <Card.Header style={{ height: "30%" }}></Card.Header>
      <Card.Body>
        <Card.Title>
          <p className="user-title" style={{color:"gray"}}>My name is</p>
        </Card.Title>
        <Card.Text>{user && user[0].name.first}</Card.Text>
        <Container className="d-flex justify-content-center gap-5">
        <SvgIcons icon={man}/>
        <SvgIcons icon={mail}/>
        <SvgIcons icon={growingMan}/>
        <SvgIcons icon={map}/>
        <SvgIcons icon={mail}/>
        <SvgIcons icon={phone}/>
        <SvgIcons icon={lock}/>
        </Container>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default UserCard;
