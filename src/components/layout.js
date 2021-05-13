import React, { useState } from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import GlobalStyle from "../globalStyles";
import Header from "./header";
import Dropdown from "./Dropdown";

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
    <>
      <GlobalStyle></GlobalStyle>
      <Header
        toggle={toggle}
        siteTitle={data.site.siteMetadata?.title || `Title`}
      ></Header>
      <Dropdown isOpen={isOpen} toggle={toggle}></Dropdown>
      <main>{children}</main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
