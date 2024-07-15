import React from "react";
import { Container } from "react-bootstrap";
import UserCard from "../components/UserCard";

const Home = () => {
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh", width: "100vw" }}
    >
      <UserCard/>
    </Container>
  );
};

export default Home;
