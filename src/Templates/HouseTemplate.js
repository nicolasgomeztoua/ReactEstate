import React from "react";
import Layout from "../components/layout";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { graphql } from "gatsby";
import styled from "styled-components";
export const query = graphql`
  query($slug: String!) {
    contentfulHouse(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do YYYY")
      body {
        json
      }
    }
  }
`;
const HouseTemplate = (props) => {
  const Wrap = styled.div`
    background: #9999;
  `;
  const Container = styled.div`
    margin: 20vh auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h1 {
      margin: 5px;
    }
    p {
      margin: 5px;
    }
  `;
  const Image = styled.img`
    width: clamp(200px, 500px, 50vw);
    margin: 10vh auto;
  `;
  const options = {
    renderNode: {
      "embedded-asset-block": (node) => {
        const alt = node.data.target.fields.title["en-US"];
        const url = node.data.target.fields.file["en-US"].url;
        return <Image src={url} alt={alt} />;
      },
    },
  };
  return (
    <Wrap>
      <Layout>
        <Container>
          <h1>{props.data.contentfulHouse.title}</h1>
          <p>{props.data.contentfulHouse.publishedDate}</p>
          {documentToReactComponents(
            props.data.contentfulHouse.body.json,
            options
          )}
        </Container>{" "}
      </Layout>
    </Wrap>
  );
};

export default HouseTemplate;
