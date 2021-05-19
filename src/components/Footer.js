import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { FooterData } from "../data/FooterData";
const Container = styled.div`
  background-color: #cd863f;
  padding: 4rem 0;
`;
const FooterBody = styled.div`
  width: 80vw;
  overflow-y: hidden;
  height: 40vh;
  background-color: #cd863f;
  color: #fff;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 auto;
  @media screen and (max-width: 1150px) {
    height: auto;
  }
  @media screen and (max-width: 820px) {
    padding-top: 2rem;
  }
`;
const FooterHeading = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 4rem;
`;
const FooterTitle = styled.h2`
  margin-bottom: 2rem;
  margin-top: 2rem;
`;

const ALink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  &:hover {
    color: #000d1a;
    transition: 0.3s ease-out;
  }
`;
const FooterForm = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-self: flex-start;
  @media screen and (max-width: 720px) {
    margin-top: 2rem;
  }
`;
const NewsLetter = styled.h2`
  margin-top: 2rem;
  margin-bottom: 2rem;
  text-align: center;
`;
const Input = styled.input`
  width: 250px;
  height: 40px;
  border-radius: 4px;
  outline: none;
  border: none;
  padding-left: 0.5rem;
  font-size: 1rem;
  margin-bottom: 1rem;

  &::placeholder {
    color: #b1b1b1;
  }
`;
const Button = styled.input`
  display: flex;
  align-self: center;
  width: 100px;
  height: 40px;
  border-radius: 4px;
  background-color: #f9423d;
  outline: none;
  border: none;
  color: #fff;
  font-size: 1rem;
  &:hover {
    cursor: pointer;
    background-color: #337af1;
    transition: all 0.4s ease-out;
  }
`;
const Footer = () => {
  return (
    <Container>
      <FooterBody>
        {FooterData.map((section, index) => (
          <FooterHeading id={section.id}>
            <FooterTitle>{section.title}</FooterTitle>
            <ALink to={`/${section.link1}`}>{section.link1}</ALink>
            <ALink to={`/${section.link2}`}>{section.link2}</ALink>
            <ALink to={`/${section.link3}`}>{section.link3}</ALink>
            <ALink to={`/${section.link4}`}>{section.link4}</ALink>
            <ALink to={`/${section.link5}`}>
              {section.link5 ? section.link5 : null}
            </ALink>
          </FooterHeading>
        ))}

        <FooterForm>
          <NewsLetter>Join Our NewsLetter</NewsLetter>
          <Input type="email" placeholder="Enter your email address"></Input>
          <Button type="submit" value="Sign Up"></Button>
        </FooterForm>
      </FooterBody>
    </Container>
  );
};

export default Footer;
