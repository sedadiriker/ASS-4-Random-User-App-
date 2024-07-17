import React, { useEffect, useState } from "react";
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
import { toastErrorNotify, toastSuccessNotify } from "../helper/Toastify";

const UserCard = () => {
  const [user, setuser] = useState(false);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [ıconTıtle, setIconTıtle] = useState("My name is");
  const [text, setText] = useState(user[0]?.name?.first);

  console.log(user);

  const icons = [
    {
      icon: user[0]?.gender === "male" ? man : woman,
      text: "My name is",
      value: user[0]?.name?.first,
    },
    { icon: mail, text: "My email is", value: user[0]?.email },
    {
      icon: user[0]?.gender === "male" ? growingMan : growingWomen,
      text: "My age is",
      value: user[0]?.dob.age,
    },
    { icon: map, text: "My street is", value: user[0]?.location.street?.name },
    { icon: phone, text: "My phone is", value:user[0]?.phone },
    { icon: lock, text: "My password is", value:user[0]?.login.password },
  ];

  const fetchData = async () => {
    const data = await getUser();
    setuser(data);
  };

  const clickNewUser = () => {
    fetchData();
  };

  const addUser = () => {
    if (selectedUsers.includes(user[0])) {
      toastErrorNotify("Bu kullanıcı zaten listede var !!");
    } else {
      setSelectedUsers([...selectedUsers, user[0]]);
      toastSuccessNotify("Kullanıcı başarıyla eklendi.");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Card style={{ width: "50rem", textAlign: "center", margin: "1rem" }}>
      <Card.Header className=" position-relative" style={{ height: "7rem" }}>
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
            {ıconTıtle}
          </p>
        </Card.Title>
        <Card.Text className=" fs-2">{text}</Card.Text>
        <Container className="d-flex justify-content-center gap-5">
          {icons.map((item, index) => (
            <div
              key={index}
              onMouseOver={() => {
                setIconTıtle(item.text);
                setText(item.value);
              }}
              style={{cursor:"pointer"}} 
            >
              <SvgIcons icon={item.icon} />
            </div>
          ))}
        </Container>
        <Container className=" d-flex justify-content-center">
          <Btn onClick={clickNewUser} btnName={"New User"} />
          <Btn onClick={addUser} btnName={"Add User"} />
        </Container>
        <Container>
          <AddUserTable selectedUsers={selectedUsers} />
        </Container>
      </Card.Body>
    </Card>
  );
};

export default UserCard;
