import React from "react";
import gsap from "gsap";
import { HCLink } from "../../components";
import HeaderExtend from "./extend";
import Button from "../../components/button/index";
import Card from "../../components/card/index";
import { connect } from "react-redux";
import * as actions from "../../actions/header";
import "./header.scss";

const headerList = [
  { name: "首页", link: "/" },
  { name: "博文", link: "/blog" },
  { name: "归档", link: "/archive" },
];

@connect((state) => state.header, actions)
class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      hidden: false,
      extendState: false,
      load: true,
    };
  }
  componentDidMount() {
    const page = document.getElementById("anchor");
    const { dispatchTriggerHeader } = this.props;
    let lastScrollTop = 0;
    page.addEventListener(
      "scroll",
      (e) => {
        var st = page.scrollTop;
        if (st > lastScrollTop) {
          dispatchTriggerHeader(true);
          this.state.extendState &&
            this.domainExtendState(this.state.extendState);
        } else {
          dispatchTriggerHeader(false);
        }
        lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
      },
      false
    );
  }

  extend = () => {
    this.domainExtendState(this.state.extendState);
    this.setState({
      load: false,
    });
  };

  domainExtendState = (state) => {
    this.setState(
      {
        extendState: !state,
      },
      () => {
        const tl = gsap.timeline();
        gsap.to("#headersBar", {
          y: !state ? 0 : -600,
          duration: 1.2,
          ease: "power3.out",
        });
        tl.to("#rect1", {
          opacity: !state ? 0 : 1,
          x: !state ? -10 : 0,
          duration: 0.2,
        })
          .to("#rect3", {
            opacity: !state ? 0 : 1,
            x: !state ? 10 : 0,
            duration: 0.2,
          })
          .to("#rect2", {
            rotation: !state ? 45 : 0,
            duration: 0.2,
            transformOrigin: "50% 50%",
          })
          .to("#rectx", {
            rotation: !state ? -45 : 0,
            duration: 0.2,
            transformOrigin: "50% 50%",
          });
      }
    );
  };

  render() {
    const { hidden } = this.props;
    return (
      <header
        className="headers"
        style={{
          transform: hidden ? "translate(-50%,-100%)" : "translate(-50%,0)",
        }}
      >
        <section className="headers__container">
          <section className="headers__container-bar">
            <section className="headers__container-bar-ln">
              <Card>
                <section
                  onClick={this.extend.bind(this)}
                  className="headers__container-bar-ln-thum headers__container-bar-ln-ripple"
                >
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                    enableBackground="new 0 0 24 24"
                    xmlSpace="preserve"
                  >
                    <g>
                      <rect id="rect1" x="1" y="1" width="22" height="3"></rect>
                      <rect
                        id="rect2"
                        x="1"
                        y="10"
                        width="22"
                        height="3"
                      ></rect>
                      <rect
                        id="rectx"
                        x="1"
                        y="10"
                        width="22"
                        height="3"
                      ></rect>
                      <rect
                        id="rect3"
                        x="1"
                        y="19"
                        width="22"
                        height="3"
                      ></rect>
                    </g>
                  </svg>
                </section>
              </Card>
            </section>
            <section className="headers__container-bar-nav">
              <section className="headers__container-bar-nav-list">
                {headerList &&
                  headerList.map((item, index) => (
                    <span id="btn" key={index}>
                      <HCLink
                        to={item.link}
                        activeStyle={{
                          color: "#65beb4",
                        }}
                      >
                        <Button className="headers__container-bar-nav-list-item">
                          {item.name}
                        </Button>
                      </HCLink>
                    </span>
                  ))}
              </section>
            </section>
          </section>
          <section className="headers__container-extend" id="headersBar">
            <HeaderExtend />
          </section>
        </section>
      </header>
    );
  }
}

export default React.memo(Header);
