import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import Features from "../components/Features";
import BlogRoll from "../components/BlogRoll";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import spaceman from "../img/spaceman.svg";
import { Astronaught } from "../components/Astronaught";

// eslint-disable-next-line
export const IndexPageTemplate = ({ image }) => {
  const heroImage = getImage(image) || image;

  return (
    <Parallax pages={2} style={{ top: "0", left: "0" }}>
      <ParallaxLayer offset={0}>
        <div className="py-24">
          <Astronaught />
        </div>

        <div className="visible md:invisible  duration-75 container text-center flex  flex-initial justify-center flex-col  md:flex-row md:justify-between     ">
          <div className="flex justify-center   ">
            <Link to="/" className="cursor-pointer">
              <p>
                <span className="flex bg-clip-text text-transparent bg-gradient-to-r from-lime-100 to-lime-400 tracking-widest animate-pulse		">
                  John Muskett
                </span>
              </p>
            </Link>
          </div>
          <div className=" md:invibile">
            <p className="text-white  ">About</p>
            <p className="text-white  ">Contact</p>
          </div>
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={1}>
        <div className="bg-contain bg-no-repeat bg-center min-w-screen bg-clip-content bg-origin-border min-h-screen bg-red-500">
          <BlogRoll />
        </div>
      </ParallaxLayer>
    </Parallax>
  );
};

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                gatsbyImageData(width: 240, quality: 64, layout: CONSTRAINED)
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`;
