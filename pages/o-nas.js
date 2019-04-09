import Layout from "../components/layout/Layout";
import Nav from "../components/navigation/Nav";
import { Container } from "../components/layout/Container";
import { Header } from "../components/typography/Header";
import { Paragraph } from "../components/typography/Paragraph";

export default () => (
  <Layout>
    <Nav />
    <Container>
      <Header size={"xl"}>O nas</Header>
      <Paragraph>
        Firma istnieje od 1994 roku. Właścicielka firmy Alfreda Sobierajska
        została w 1999 roku wpisana przez Krajową Izbę Doradców Podatkowych na
        listę doradców o numerze 09046.
      </Paragraph>
      <Paragraph>
        Posiadając ubezpieczenie od odpowiedzialności cywilnej, zapewniamy
        naszym klientom poczucie całkowitego bezpieczeństwa i komfortu.
      </Paragraph>
      <Paragraph>
        Pragniemy, aby wszyscy nasi Klienci czuli się spokojni o finanse swoich
        firm. Pomagają nam w tym: najnowsze, licencjonowane programy księgowe,
        wieloletnie doświadczenie i znajomość przepisów prawnych. Korzystamy z
        nowoczesnych systemów, dostosowanych do zmieniających się wymogów
        prawno-gospodarczych.
      </Paragraph>
      <Paragraph>
        Pracujemy wyłącznie na legalnych i certyfikowanych programach
        księgowych, zgodnych z przepisami ustawy o rachunkowości.{" "}
      </Paragraph>
      <Paragraph>
        Zadowolenie naszych dotychczasowych klientów jest najlepszym świadectwem
        wysokiej jakości naszych usług.
      </Paragraph>
      <Paragraph>
        {" "}
        Sposób prowadzenia księgowości obsługiwanych przez nas firm zapewnia
        maksymalne zabezpieczenie spraw finansowo-prawnych. Nasze biuro
        rachunkowe gwarantuje obsługę księgową na najwyższym poziomie!
      </Paragraph>
      <Header size={"l"}>Zapraszamy do współpracy</Header>
    </Container>
  </Layout>
);
