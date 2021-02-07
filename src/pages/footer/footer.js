import React from "react";
import { ICP, Input } from "../../components";
import "./footer.scss";

export default class Footer extends React.Component {
  render() {
    return (
      <main className="footer">
        <section className="footer__head">
          <section className="footer__head-left">
            <section className="footer__head-left-summary">
              {" "}
              New Object <br /> Welcome Shinya{" "}
            </section>
            <section className="footer__head-left-link">
              <span>
                <a
                  href="https://amikara.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Blog{" "}
                </a>
              </span>
              <span>
                <a
                  href="https://github.com/HelloAny"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  GitHub{" "}
                </a>{" "}
              </span>
              <span>
                <a
                  href="https://twitter.com/AmiKara2"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Twitter{" "}
                </a>{" "}
              </span>
              <span>
                <a
                  href="https://www.zhihu.com/people/ai-yi-zhu-53"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  ZhiHu{" "}
                </a>{" "}
              </span>
              <span>
                <a
                  href="https://www.instagram.com/amikara_/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Instagram{" "}
                </a>{" "}
              </span>
              <span>
                <a
                  href="https://www.v2ex.com/member/AmiKara"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  V2EX{" "}
                </a>{" "}
              </span>
            </section>
          </section>
          <section className="footer__head-right">
            <span className="footer__head-right-title">NewsLetter</span>
            <span className="footer__head-right-subline">
              Subscribe to our newsletter and stay updated on the latest news
              and special offers!
            </span>
            <form
              action="https://gmail.us2.list-manage.com/subscribe/post?u=4e3f428e65caa7656af55e264&amp;id=5d657c5df3"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              target="_blank"
              noValidate
              className="footer__head-right-email"
            >
              <Input
                type="email"
                value=""
                name="EMAIL"
                id="mce-EMAIL"
                placeholder={"email"}
              />
              <input
                className="footer__head-right-email-btn"
                type="submit"
                value="SUBSCRIBE"
                name="subscribe"
                id="mc-embedded-subscribe"
              />
            </form>
          </section>
        </section>
        <section className="footer__foot">
          <ICP />
        </section>
      </main>
    );
  }
}
