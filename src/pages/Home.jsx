import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import UserCard from "../components/UserCard";
import Loading from "../components/Loading";

const Home = () => {
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setloading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh", width: "100vw" }}
    >
      {loading ? <Loading /> : <UserCard />}
    </Container>
  );
};

export default Home;
