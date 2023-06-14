import React from "react";
import App from "next/app";
import { SSRProvider } from "@react-aria/ssr";
import AOS from "aos";
import { addBackToTop } from "vanilla-back-to-top";
import "aos/dist/aos.css";

// CSS Libraries
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

// Custom Components
import PageLayout from "components/PageLayout";

// Custom Styles
import "scss/app.scss";

export default class MyApp extends App {
  static async getStaticProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getStaticProps) {
      pageProps = await Component.getStaticProps(ctx);
    }

    return { pageProps };
  }

  componentDidMount() {
    AOS.init();
    addBackToTop({
      diameter: 56,
      backgroundColor: "rgb(128, 0, 0)",
      textColor: "#fff",
    });
    window.scrollTo(0, 0);
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <React.Fragment>
        <SSRProvider>
          <PageLayout>
            <Component {...pageProps} />
          </PageLayout>
        </SSRProvider>
      </React.Fragment>
    );
  }
}