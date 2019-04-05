import Layout from "../components/layout/Layout";
import Nav from "../components/navigation/Nav";

export default () => (
  <Layout>
    <Nav />
    <div className="fadeIn-wrapper">
      <div className="fadeIn">
        <Nav />
      </div>
    </div>
    <style jsx>
      {`
        @keyframes fadeIn {
          0% {
            transform: translateY(-250%);
          }

          100% {
            transform: translateY(0);
          }
        }

        .fadeIn-wrapper {
          overflow: hidden;
          position: relative;
        }

        .fadeIn {
          position: relative;
          animation: fadeIn 1s;
        }
      `}
    </style>
  </Layout>
);
