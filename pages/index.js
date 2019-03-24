import React from "react";
import Router from "next/router";

import { prefixHref } from "../utils/prefixHref";
import Layout from "../components/Layout";
import Nav from "../components/navigation/Nav";

export default function Index() {
  return (
    <Layout>
      <Nav />
    </Layout>
  );
}
