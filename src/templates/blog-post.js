import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import bgImage from "../img/bg.jpeg";

// eslint-disable-next-line
export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content;

  return (
    <>
      <div
        style={{ backgroundImage: `url(${bgImage})` }}
        className="invisible md:visible text-4xl z-20  bg-violet-800 font-extrabold bg-fixed py-11 px-11 min-h-full min-w-full"
      >
        <div className="invisible md:visible transition-opacity ease-in  duration-75 container text-center flex  flex-initial justify-center flex-col  md:flex-row md:justify-between  ">
          <div className="flex justify-center   ">
            <Link to="/" className="cursor-pointer">
              <p className=" text-white flex bg-clip-text md:text-transparent md:bg-gradient-to-r md:from-lime-100 md:to-lime-400 tracking-widest animate-pulse		">
                John Muskett
              </p>
            </Link>
          </div>

          <div className="   md:flex  md:right-0 ">
            <p className="text-white md:pr-11 ">About</p>
            <p className="text-white md:pr-11 ">Contact</p>
          </div>
        </div>
      </div>

      <div className="visible md:invisible  duration-75 container flex justify-center flex-col  md:flex-row md:justify-between     ">
        <div className="flex justify-start  container   ">
          <Link to="/" className="cursor-pointer">
            <p>
              <span className="flex text-lime-400 tracking-widest animate-pulse		">
                John Muskett
              </span>
            </p>
          </Link>
        </div>
      </div>

      <section className="section">
        {helmet || ""}

        <div className="container content">
          <div className="columns">
            <div className="column is-10 is-offset-1 text-white">
              <p className="text-white  text-2xl font-extrabold">{title}</p>
              <p>{description}</p>
              <PostContent content={content} />
              {tags && tags.length ? (
                <div style={{ marginTop: `4rem` }}>
                  <p className="text-white font-bold">Tags</p>
                  <ul className="taglist">
                    {tags.map((tag) => (
                      <li key={tag + `tag`}>
                        <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
};

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`;
