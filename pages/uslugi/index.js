import { useState } from 'react';

import Layout from "../../components/layout/Layout";
import Nav from "../../components/navigation/Nav";
import { Slide } from "../../components/Slide";
import NavServices from "./components/NavSevices";
import { Container } from "../../components/layout/Container";

export default () => {
  const [firstSlide, setFirstSlide] = useState(true)
  return (

  <Layout>
    <Nav />
    <Slide shouldSlide={firstSlide}>
      <NavServices />
    </Slide>
    <Container>Works</Container>
  </Layout>
)};

