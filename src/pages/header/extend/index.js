import React from "react";
import "./index.scss";

class HeaderExtend extends React.Component {
  render() {
    return (
      <main className="extend">
        <section className="extend__container">
          <section className="extend__container-main">
            <section className="extend__container-main-shinya">
              <section className="extend__container-main-shinya-title">
                ABOUT SHINYA
              </section>
              <section className="extend__container-main-shinya-content">
                Shinya是一个基于React搭建的个人博客
              </section>
            </section>
            <section className="extend__container-main-amikara">
              <section className="extend__container-main-amikara-title">
                ABOUT ME
              </section>
              <section className="extend__container-main-amikara-content">
                我是一名来自杭州的辣鸡带学生。
              </section>
              <section className="extend__container-main-amikara-content">
                邮箱：ayn1914420862@gmail.com
              </section>
            </section>
          </section>
        </section>
      </main>
    );
  }
}

export default HeaderExtend;
