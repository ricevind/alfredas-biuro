import { Container } from "../../components/layout/Container";
import Nav from "../../components/navigation/Nav";
import { Slide } from "../../components/Slide";
import NavServices from "./components/NavSevices";
import Layout from "../../components/layout/Layout";

export default () => (
  <Layout>
    <Nav />
    <Slide>
      <NavServices />
    </Slide>
    <Container>Works</Container>
  </Layout>
);
