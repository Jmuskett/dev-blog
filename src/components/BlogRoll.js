import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";
import PreviewCompatibleImage from "./PreviewCompatibleImage";
import { GatsbyImage } from "gatsby-plugin-image";

class BlogRollTemplate extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <div className="px-11 py-11 flex flex-initial  flex-col">
        {posts &&
          posts.map(({ node: post }) => {
            console.log(post.frontmatter.featuredimage);
            return (
              <div key={post.id}>
                <article className="text-center px-11 py-11 my-11 border-solid border-slate-400 rounded-3xl shadow-xl border-4 hover:border-4 hover:cursor-pointer hover:shadow-2xl  hover:border-lime-400 ">
                  <header>
                    {post.frontmatter.featuredimage ? (
                      <div>
                        <GatsbyImage
                          className="mb-6"
                          style={{ height: "500px", width: "100%" }}
                          image={
                            post.frontmatter.featuredimage.childImageSharp
                              .gatsbyImageData
                          }
                        />
                      </div>
                    ) : null}
                    <p>
                      <Link
                        className="text-4xl text-slate-600 my-6"
                        to={post.fields.slug}
                      >
                        {post.frontmatter.title}
                      </Link>
                    </p>
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
