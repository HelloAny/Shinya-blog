import React from "react";
import { gsap } from "gsap";
import { domotion } from "react-loading-transition";
import "./404.scss";

const Error = () => {
  React.useEffect(() => {
    domotion(false);
    gsap.from(".nf-text", {
      duration: 0.5,
      y: -50,
      ease: "power1.out",
      delay: 0.3,
      opacity: 0,
    });
    gsap.from(".nf-summary", {
      duration: 0.5,
      y: -50,
      ease: "power1.out",
      delay: 0.5,
      opacity: 0,
    });
  }, []);
  return (
    <main className="nf">
      <section className="nf-text">404 NOT FOUND</section>
      <section className="nf-summary">
        这都被你发现了! 奖励 ---{" "}
        <a
          className="nf-summary-link"
          href="https://www.izhaoo.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          一枚傻*
        </a>
      </section>
    </main>
  );
};

export default Error;
