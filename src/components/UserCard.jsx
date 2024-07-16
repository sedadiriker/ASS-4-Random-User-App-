import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { getUser } from "../services/api";
import SvgIcons from "./SvgIcons";
import man from "../assets/man.svg";
import woman from "../assets/woman.svg";
import mail from "../assets/mail.svg";
import growingMan from "../assets/growing-up-man.svg";
import growingWomen from "../assets/growing-up-woman.svg";
import map from "../assets/map.svg";
import phone from "../assets/phone.svg";
import lock from "../assets/padlock.svg";
import { Container, Image } from "react-bootstrap";
import Btn from "./Btn";
import AddUserTable from "./AddUserTable";
import axios from "axios";

const UserCard = () => {
  const [user, setuser] = useState(false);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await getUser();
  //     console.log(data[0]);
  //     setuser(data);
  //   };
  //   fetchData();
  // }, []);

  useEffect(() => {
    const getUser = async () => {
      const URL = "https://randomuser.me/api/";

      try {
        const { data } = await axios(URL);
        setuser(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, []);

  return (
    <Card style={{ width: "57%", height: "70%", textAlign: "center" }}>
      <Card.Header className=" position-relative" style={{ height: "25%" }}>
        <Image
          className=" position-absolute"
          src={user[0]?.picture.large}
          style={{
            outline: "1px solid gray",
            border: "5px solid white",
            top: "30%",
            left: "42%",
          }}
          roundedCircle
        />
      </Card.Header>
      <Card.Body>
        <Card.Title className=" mt-5">
          <p className="user-title" style={{ color: "gray" }}>
            My name is
          </p>
        </Card.Title>
        <Card.Text>{user && user[0].name.first}</Card.Text>
        <Container className="d-flex justify-content-center gap-5">
          {user[0]?.gender == "male" ? (
            <SvgIcons icon={man} />
          ) : (
            <SvgIcons icon={woman} />
          )}
          <SvgIcons icon={mail} />
          {user[0]?.gender == "male" ? (
            <SvgIcons icon={growingMan} />
          ) : (
            <SvgIcons icon={growingWomen} />
          )}
          <SvgIcons icon={map} />
          <SvgIcons icon={phone} />
          <SvgIcons icon={lock} />
        </Container>
        <Container className=" d-flex justify-content-center">
          <Btn btnName={"New User"} />
          <Btn btnName={"Add User"} />
        </Container>
        <Container>
          <AddUserTable />
        </Container>
      </Card.Body>
    </Card>
  );
};

export default UserCard;
