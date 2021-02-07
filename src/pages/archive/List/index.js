import React from "react";
import { gsap } from "gsap";
import { HCLink } from "../../../components";
import { GMTToArr } from "../../../utils/utils";
import "./index.scss";
let yearMemo, monthMemo;
const ListItem = (props) => {
  const { item } = props;
  let SY, SM;

  const [year, month, date] = GMTToArr(item.attributes.ct);

  if (yearMemo !== year) {
    yearMemo = year;
    SY = (
      <section className="archive-list__item">
        <span className="archive-list__item__year"># {yearMemo} 年</span>
      </section>
    );
  }
  if (monthMemo !== month) {
    monthMemo = month;
    SM = (
      <section className="archive-list__item">
        <span className="archive-list__item__month">{monthMemo} 月</span>
      </section>
    );
  }
  return (
    <>
      {SY}
      {SM}
      <section className="archive-list__item">
        <span className="archive-list__item__date">{`${month} / ${date}  `}</span>
        <span className="archive-list__item__title">
          <HCLink to={`/article/${item.id}`}>{item.attributes.title}</HCLink>
        </span>
      </section>
    </>
  );
};

export default function List(props) {
  const { list } = props;
  React.useEffect(() => {
    gsap.fromTo(
      ".archive-list__item",
      {
        y: 50,
        opacity: 0,
        duration: 0.8,
      },
      {
        y: 0,
        opacity: 1,
        stagger: {
          amount: 1.5,
          grid: "auto",
          from: "start",
        },
      }
    );
  }, [list]);
  return (
    <main className="archive-list">
      <section className="archive-list-container">
        {list
          ? list.map((item, index) => {
              return <ListItem item={item} />;
            })
          : null}
      </section>
    </main>
  );
}
