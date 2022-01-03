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
        {posts &&
          posts.map(({ node: post }, idx) => {
            return (
              <div>
                <Link
                  className="text-4xl text-white hover:text-white py-11 hover:inset"
                  to={post.fields.slug}
                >
                  <article className="flex flex-col max-w-sm flex-wrap items-stretch min-h-full flex-1 text-center mx-11 px-11 py-11 my-11 border-solid  rounded-3xl shadow-xl hover:shadow-md  hover:cursor-pointer md:mx-6   ">
                    <header>
                      {post.frontmatter.featuredimage ? (
                        <div>
                          <GatsbyImage
                            className="my-6 flex-1 items-stretch  rounded-lg  hover:ring hover:ring-white hover:ring-offset-4 hover:ring-offset-red-500 "
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
                  </article>
                </Link>
              </div>
            );
          })}
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
