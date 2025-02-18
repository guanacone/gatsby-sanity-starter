import React from 'react';
import { graphql } from 'gatsby';

const Home = ({ data }) => {
  console.log({ data });
  return (
    <>
      <h2>{data.allSanityCompany.nodes.map((company) => company.name)}</h2>
      <p>This is a test to see if content is pulled correctly from sanity.</p>
    </>
  );
};

export default Home;

export const query = graphql`
  query CompanyQuery {
    allSanityCompany {
      nodes {
        name
      }
    }
  }
`;
