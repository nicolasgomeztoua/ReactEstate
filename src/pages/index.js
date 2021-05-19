import * as React from "react";

import Hero from "../components/Hero";
import Layout from "../components/layout";
import Seo from "../components/seo";
import InfoSection from "../components/InfoSection";
import { InfoData, InfoDataTwo } from "../data/InfoData";

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero></Hero>
    <InfoSection {...InfoData}></InfoSection>
    <InfoSection {...InfoDataTwo}></InfoSection>
  </Layout>
);

export default IndexPage;
