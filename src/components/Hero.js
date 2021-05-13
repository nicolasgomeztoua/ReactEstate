import React, { useState, useRef, useEffect } from "react";

import styled, { css } from "styled-components";
import { SliderData } from "../data/SliderData";
import { Button } from "./Button";
import { IoMdArrowRoundForward } from "react-icons/io";
import { IoArrowForward, IoArrowBack } from "react-icons/io5";

const HeroSection = styled.section`
  height: 100vh;
  max-height: 1100px;
  position: relative;
  overflow: hidden;
`;

const HeroWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`;
const HeroSlide = styled.div`
  z-index: 1;
  width: 100%;
  height: 100%;
`;
const HeroSlider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: "";
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100vh;
    bottom: 0vh;
    left: 0;
    overflow: hidden;
    opacity: 0.4;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.2) 50%,
      rgba(0, 0, 0, 0.6) 100%
    );
  }
`;
const HeroImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const HeroContent = styled.div`
  position: relative;
  z-index: 10;
  flex-direction: column;
  max-width: 1600px;
  width: calc(100% - 100px);
  color: #fff;

  h2 {
    font-size: clamp(1rem, 8vw, 2rem);
    font-weight: 400;
    text-transform: uppercase;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
    text-align: left;
    margin-bottom: 0.8rem;
  }
  p {
    margin-bottom: 1.2rem;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
  }
`;
const Arrow = styled(IoMdArrowRoundForward)`
  margin-left: 0.5rem;
`;
const SliderButtons = styled.div`
  position: absolute;
  bottom: 50px;
  right: 50px;
  display: flex;
  z-index: 10;
`;
const arrowButtons = css`
  width: 50px;
  height: 50px;
  color: #fff;
  cursor: pointer;
  background: #000d1a;
  border-radius: 50px;
  padding: 10px;
  margin-right: 1rem;
  user-select: none;
  transition: 0.3s;
  &:hover {
    background: #cd853f;
    transform: scale(1.05);
  }
`;
const PrevArrow = styled(IoArrowBack)`
  ${arrowButtons}
`;
const NextArrow = styled(IoArrowForward)`
  ${arrowButtons}
`;
const Hero = () => {
  const [image, setImage] = useState(0);
  const length = SliderData.length;
  const timeout = useRef(null);

  const nextSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    setImage(image === length - 1 ? 0 : image + 1);
    console.log(image);
  };

  const prevSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    setImage(image === 0 ? length - 1 : image - 1);
    console.log(image);
  };
  useEffect(() => {
    const nextSlide = () => {
      setImage((image) => (image === length - 1 ? 0 : image + 1));
    };
    timeout.current = setTimeout(nextSlide, 3000);

    return function () {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [image, length]);
  if (!Array.isArray(SliderData)) {
    return null;
  }

  return (
    <HeroSection>
      <HeroWrapper>
        {SliderData.map((slide, index) => {
          return (
            <HeroSlide key={index}>
              {index === image && (
                <HeroSlider>
                  <HeroImage src={slide.image} alt={slide.alt} />
                  <HeroContent>
                    <h2>{slide.title}</h2>
                    <p>{slide.price}</p>
                    <Button
                      primary={true}
                      to={slide.path}
                      css={`
                        max-width: "160px";
                      `}
                    >
                      View Home<Arrow></Arrow>
                    </Button>{" "}
                  </HeroContent>{" "}
                </HeroSlider>
              )}
            </HeroSlide>
          );
        })}
        <SliderButtons>
          <PrevArrow onClick={prevSlide}></PrevArrow>
          <NextArrow onClick={nextSlide}></NextArrow>
        </SliderButtons>
      </HeroWrapper>
    </HeroSection>
  );
};

export default Hero;
