import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";

const NotFoundPage = () => (
  <div style={{ backgroundColor: "#9999" }}>
    <Layout>
      <Seo title="404: Not found" />
      <div style={{ margin: "25vh" }}>
        {" "}
        <h1>Page not found</h1>
        <p>
          <Link to="/">Head home</Link>
        </p>
      </div>
    </Layout>
  </div>
);

export default NotFoundPage;
