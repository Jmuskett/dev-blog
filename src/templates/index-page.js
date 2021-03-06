import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import BlogRoll from "../components/BlogRoll";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { Astronaught } from "../components/Astronaught";
import { RocketShip } from "../components/RocketShip";
import { Moon } from "../components/Moon";
import bgImage from "../img/bg.jpeg";
import { useSpring } from "react-spring";

// eslint-disable-next-line
export const IndexPageTemplate = ({ image }) => {
  const heroImage = getImage(image) || image;
  const [key, setKey] = useState(1);

  const scrolling = useSpring({
    from: { transform: "translate(100%,0)" },
    to: { transform: "translate(0%,0)" },
    config: { duration: 5000 },
    reset: true,
    reverse: key % 2 == 0,
    onRest: () => {
      setKey(key + 1);
    },
  });

  return (
    <>
      <div
        style={{ backgroundImage: `url(${bgImage})` }}
        className=" text-4xl py-11 px-11    bg-violet-800 font-extrabold bg-fixed bg-no-repeat bg-cover px-11 min-h-screen min-w-full"
      >
        <div className="invisible md:visible transition-opacity ease-in  duration-75 container text-center flex  flex-initial justify-center flex-col  md:flex-row md:justify-between  ">
          <div className="flex justify-center   ">
            <Link to="/" className="cursor-pointer">
              <p className=" text-white flex bg-clip-text md:text-transparent md:bg-gradient-to-r md:from-lime-100 md:to-lime-400 tracking-widest animate-pulse		">
                John Muskett
              </p>
            </Link>
          </div>
        </div>
      </div>

      <Parallax pages={6} style={{ top: "0", left: "0" }}>
        <ParallaxLayer offset={0} speed={2.5}>
          <div className="pt-24">
            <Astronaught />
          </div>

          <div className="visible py-24 md:invisible  duration-75 container text-center flex  flex-initial justify-center flex-col  md:flex-row md:justify-between     ">
            <div className="flex justify-center   ">
              <Link to="/" className="cursor-pointer">
                <p>
                  <span className="flex text-lime-400 tracking-widest animate-pulse		">
                    John Muskett
                  </span>
                </p>
              </Link>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          className=" flex flex-grow min-h-full md:min-h-[20%] bg-red-500 align-center justify-center "
          offset={1.4}
        >
          <div className="flex flex-wrap   flex-col ">
            <BlogRoll />
          </div>
        </ParallaxLayer>

        <div className="min-h-max flex justify-center">
          <ParallaxLayer offset={3} speed={1.5}>
            <div className="md:py-24">
              <RocketShip />
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={5} speed={1.5}>
            <div className="z-10 py-48 bg-white min-h-screen">
              <div className="flex justify-center align">
                <p className="text-7xl font-bold animate-bounce">
                  <a href="mailto:j.muskett@me.com">Email me</a>
                </p>
              </div>
              <div key={key}>
                <Moon />
              </div>
            </div>
          </ParallaxLayer>
        </div>
      </Parallax>
    </>
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
