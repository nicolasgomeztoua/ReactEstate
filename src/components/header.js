import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import styled, { css } from "styled-components";
import { menuData } from "../data/MenuData";
import { Button } from "./Button";
import { FaBars } from "react-icons/fa";
const Nav = styled.nav`
  height: 60px;

  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index: 1000;
  position: fixed;

  width: 100%;
`;
const NavLink = css`
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  cursor: pointer;
  text-decoration: none;
`;
const Logo = styled(Link)`
  ${NavLink}
  color: #fff;
  font-style: Italic;
`;
const MenuBars = styled(FaBars)`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    height: 25px;
    width: 25px;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 75%);
  }
`;
const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const NavMenuLinks = styled(Link)`
  ${NavLink}
`;

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
  color: white;
`;

const Header = ({ siteTitle, toggle, isOpen }) => {
  const [displayBars, setDisplayBars] = useState("");

  return (
    <Nav>
      <Logo>{siteTitle}</Logo>
      <MenuBars onClick={toggle} />
      <NavMenu>
        {menuData.map((page, index) => {
          return <NavMenuLinks to={page.link}>{page.title}</NavMenuLinks>;
        })}
      </NavMenu>
      <NavBtn>
        <Button to="contact" primary={true}>
          Contact Us
        </Button>
      </NavBtn>
    </Nav>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
