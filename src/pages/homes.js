import React from "react";
import "../CSS/homes.css";
import Layout from "../components/layout";
import { SliderData } from "../data/SliderData";
import HomeCard from "../components/HomeCard";
import styled from "styled-components";
import { Link } from "gatsby";
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  row-gap: 20px;
  overflow-y: hidden;
  margin: 10vh auto;
  @media screen and (max-width: 1130px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
`;
const Container = styled.div`
  background: #9999;
`;
const homes = () => {
  return (
    <Container>
      <Layout>
        <Grid>
          {SliderData.map((card, index) => {
            return (
              <Link to={card.to} style={{ overflow: "hidden" }}>
                <HomeCard
                  title={card.title}
                  subtitle={card.price}
                  paragraph={card.paragraph}
                  img={card.image}
                  label={card.label}
                  to={card.to}
                ></HomeCard>
              </Link>
            );
          })}
        </Grid>
      </Layout>
    </Container>
  );
};

export default homes;
