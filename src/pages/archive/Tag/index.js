import React from "react";
import { gsap } from "gsap";
import "./index.scss";

export default function Tag(props) {
  const { tags, handleArchiveList } = props;

  React.useEffect(() => {
    gsap.from(".archive-tag__item", {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: {
        amount: 1.5,
        grid: "auto",
        from: "start",
      },
    });
  }, [tags]);

  const TagItem = () => {
    return (
      tags ? tags.map((item, index) => (
        <section className="archive-tag__item" key={index} onClick={handleArchiveList.bind(this,item)}>
          # {item}
        </section>
      )) : null
    );
  };

  return (
    <main className="archive-tag">
      <TagItem />
    </main>
  );
}
