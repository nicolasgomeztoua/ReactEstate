import { Link } from "gatsby";
import React from "react";
import styled, { keyframes } from "styled-components";
import { Button } from "./Button";
import { FaTimes } from "react-icons/fa";
import { menuData } from "../data/MenuData";
const fade_in_show = keyframes`{
     0% {
       display:none;
          opacity: 0;
         transform: translateX(-100%)
     }

     100% {
       display: flex;
          opacity: 1;
          transform: translateX(0%)
     }
}`;
const DropdownContainer = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #cd853f;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  display: ${({ isOpen }) => (isOpen ? "grid" : "none")};
  animation: ${fade_in_show} 0.5s ease-in forwards;
  top: ${({ isOpen }) => (isOpen ? "0" : "-100")};
`;
const Icon = styled.div`
  position: absolute;
  bottom: 90%;
  left: 90%;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
  z-index: 1;
  cursor: pointer;
`;
const CloseIcon = styled(FaTimes)`
  color: #000d1a;
  cursor: pointer;
`;
const DropsdownWrapper = styled.div``;
const DropdownMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 80px);
  text-align: center;
  margin-bottom: 4rem;
  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(4, 60px);
  }
`;
const DropdownLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  color: #fff;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    color: #000d1a;
  }
`;
const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

const Dropdown = ({ toggle, isOpen }) => {
  return (
    <DropdownContainer isOpen={isOpen} onClick={toggle}>
      {" "}
      <Icon onClick={toggle}>
        <CloseIcon onClick={toggle} />
      </Icon>
      <DropsdownWrapper>
        {" "}
        <DropdownMenu>
          {" "}
          {menuData.map((item, index) => {
            return (
              <DropdownLink to={item.link} key={index}>
                {item.title}
              </DropdownLink>
            );
          })}
        </DropdownMenu>
        <BtnWrap>
          <Button primary={true} round={true} big={true} to="contact">
            Contact Us
          </Button>
        </BtnWrap>
      </DropsdownWrapper>
    </DropdownContainer>
  );
};

export default Dropdown;
