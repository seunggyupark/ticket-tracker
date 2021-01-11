import React, { useState, useRef } from "react";

import Accordian from "../Accordian/Accordian";
import "../Accordian/Accordian.scss";

interface AccordianContainerProps {
  info: {
    title: string;
    amount: number;
    tickets: {
      title: string;
      tags: string[];
      content: string;
    }[];
  };
}

const AccordianContainer: React.FC<AccordianContainerProps> = (props) => {
  const [maxHeight, setMaxHeight] = useState<number>(0);
  const [active, setActive] = useState<boolean>(false);
  const content = useRef<HTMLDivElement>(null);

  const toggleHandler = () => {
    if (!active && content.current) {
      setActive(true);
      setMaxHeight(content.current.scrollHeight);
    } else {
      setActive(false);
      setMaxHeight(0);
    }
  };

  const addHeightToParent = (num: number) =>
    setMaxHeight((prevState) => prevState + num);

  return (
    <div className="accordian">
      <button
        className={`accordian__button accordian__button-parent ${active && "active"}`}
        onClick={toggleHandler}
      >
        <div className="accordian__title">
          <p>{props.info.title}</p>
          <p>({props.info.amount})</p>
        </div>
        <i className={`fas fa-chevron-right ${active && "rotate"}`}></i>
      </button>
      <div
        className="accordian__content"
        ref={content}
        style={{ maxHeight: `${maxHeight}px` }}
      >
        {props.info.tickets.map((element, index) => (
          <Accordian
            addHeightToParent={addHeightToParent}
            title={element.title}
            tags={element.tags}
            content={element.content}
          />
        ))}
      </div>
    </div>
  );
};

export default AccordianContainer;
