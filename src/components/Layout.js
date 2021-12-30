import * as React from "react";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./all.sass";
import useSiteMetadata from "./SiteMetadata";
import { withPrefix } from "gatsby";
import bgImage from "../img/bg.jpeg";
import { Link } from "gatsby";

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix("/")}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix("/")}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix("/")}img/og-image.jpg`}
        />
      </Helmet>
      {/* <Navbar /> */}
      <div
        style={{ backgroundImage: `url(${bgImage})` }}
        className="text-left text-4xl  bg-violet-800 font-extrabold bg-fixed py-11 px-11"
      >
        <div className="flex flex-initial flex-row justify-between">
          <div>
            <Link to="/" className="cursor-pointer">
              <p>
                <span className="flex bg-clip-text text-transparent bg-gradient-to-r from-lime-100 to-lime-400 tracking-widest animate-pulse		">
                  John Muskett
                </span>
              </p>
            </Link>
          </div>
          <div className="flex flex-initial">
            <p className="text-white pr-11">About</p>
            <p className="text-white pr-11">Contact</p>
          </div>
        </div>
      </div>
      <div>{children}</div>
      {/* <Footer /> */}
    </div>
  );
};

export default TemplateWrapper;
