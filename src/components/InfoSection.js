import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import styled from "styled-components";
import { Button } from "./Button";

const Section = styled.div`
  width: 100%;
  height: 100%;
  padding: 4rem 0rem;
`;

const Container = styled.div`
  padding: 3rem calc((100vw - 1300px) / 2);
  display: grid;
  overflow-y: hidden;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 800px;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  line-height: 1.4;
  padding: 1rem 2rem;
  order: ${({ reverse }) => (reverse ? "2" : "1")};
  h3 {
    margin-bottom: 1rem;
    font-size: clamp(1.5rem, 6vw, 2rem);
  }
  p {
    margin-bottom: 2rem;
  }
`;
const ColumnRight = styled.div`
  padding: 1rem 2rem;
  order: ${({ reverse }) => (reverse ? "1" : "2")};
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: hidden;
  @media screen and (max-width: 768px) {
    order: ${({ reverse }) => (reverse ? "2" : "1")};
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media screen and (max-width: 768px) {
      width: 90%;
      height: 90%;
    }
  }
`;

const InfoSection = ({
  heading,
  paragraphOne,
  paragraphTwo,
  buttonLabel,
  Image,
  reverse,
}) => {
  gsap.registerPlugin(ScrollTrigger);
  const divRef = useRef(null);

  useEffect(() => {
    const element = divRef.current;
    gsap.fromTo(
      element.querySelector(".left-col"),
      {
        opacity: 0,
        y: 200,
      },
      {
        opacity: 1,
        y: 0,
        duration: 3,
        ease: "in",

        scrollTrigger: {
          trigger: element.querySelector(".left-col"),
          start: "top center",
          end: "top 300px",
          scrub: 1,
        },
      }
    );
  }, []);
  useEffect(() => {
    const element = divRef.current;
    gsap.fromTo(
      element.querySelector(".img"),
      {
        opacity: 0,
        x: 200,
      },
      {
        opacity: 1,
        x: 0,
        duration: 3,
        ease: "in",

        scrollTrigger: {
          trigger: element.querySelector(".img"),
          start: "top center",
          end: "top 300px",

          scrub: 1,
        },
      }
    );
  }, []);

  return (
    <Section ref={divRef}>
      <Container>
        <ColumnLeft reverse={reverse} className="left-col">
          <h3>{heading}</h3>
          <p>{paragraphOne}</p>
          <p>{paragraphTwo}</p>
          <Button to="homes" primary={true}>
            {buttonLabel}
          </Button>
        </ColumnLeft>
        <ColumnRight reverse={reverse}>
          <img src={Image} alt="Info Section" className="img"></img>
        </ColumnRight>
      </Container>
    </Section>
  );
};

export default InfoSection;
