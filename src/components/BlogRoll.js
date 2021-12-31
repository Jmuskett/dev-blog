import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";
import PreviewCompatibleImage from "./PreviewCompatibleImage";
import { GatsbyImage } from "gatsby-plugin-image";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import scrollHorizontal from "../img/scroll-horizontal.jpg";
class BlogRollTemplate extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;
    const numberOfPosts = posts ? posts.length : 0;
    return (
      <div className="px-11 md:pt-48 flex align-middle  items-stretch justify-center">
        <Parallax horizontal pages={numberOfPosts}>
          {posts &&
            posts.map(({ node: post }, idx) => {
              return (
                <ParallaxLayer offset={idx} key={post.id}>
                  <div className="grow-0 shrink-0 ">
                    <Link
                      className="text-4xl text-white hover:text-white py-11"
                      to={post.fields.slug}
                    >
                      <article className="text-center mx-11 px-11 py-11 my-11 border-solid  rounded-3xl shadow-xl  hover:cursor-pointer md:mx-6   ">
                        <header>
                          {post.frontmatter.featuredimage ? (
                            <div>
                              <GatsbyImage
                                className="mb-6  rounded-lg  hover:ring hover:ring-white hover:ring-offset-4 hover:ring-offset-red-500 "
                                image={
                                  post.frontmatter.featuredimage.childImageSharp
                                    .gatsbyImageData
                                }
                              />
                            </div>
                          ) : null}
                          <p>{post.frontmatter.title}</p>
                        </header>
                        <div>
                          <span>{post.frontmatter.date}</span>
                        </div>

                        {/* <p>
                  {post.excerpt}
                  <br />
                  <br />
                </p> */}
                      </article>
                    </Link>
                  </div>
                </ParallaxLayer>
              );
            })}
        </Parallax>
        <div className="flex justify-center">
          <p className="text-white text-center font-extrabold p text-7xl animate-pulse fixed invisible md:visible md:bottom-40 ">
            {"<---->"}
          </p>
        </div>
      </div>
    );
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default function BlogRoll() {
  return (
    <StaticQuery
      query={graphql`
        query BlogRollQuery {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
          ) {
            edges {
              node {
                excerpt(pruneLength: 400)
                id
                fields {
                  slug
                }
                frontmatter {
                  title
                  templateKey
                  date(formatString: "MMMM DD, YYYY")
                  featuredpost
                  featuredimage {
                    childImageSharp {
                      gatsbyImageData(
                        width: 120
                        quality: 100
                        layout: CONSTRAINED
                      )
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={(data, count) => <BlogRollTemplate data={data} count={count} />}
    />
  );
}
