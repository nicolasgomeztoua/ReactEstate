import React, { useState } from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import GlobalStyle from "../globalStyles";
import Header from "./header";
import Dropdown from "./Dropdown";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <GlobalStyle></GlobalStyle>
      <Header
        isOpen={isOpen}
        toggle={toggle}
        siteTitle={data.site.siteMetadata?.title || `Title`}
      ></Header>
      <Dropdown isOpen={isOpen} toggle={toggle}></Dropdown>
      <main className="data-scroll-container">{children}</main>
      <Footer></Footer>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
