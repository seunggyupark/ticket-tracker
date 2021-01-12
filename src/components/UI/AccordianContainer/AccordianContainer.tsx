import React, { useState, useRef, useEffect, useCallback } from "react";

import { TicketInterface } from '../../../store/reducer'

import Accordian from "../Accordian/Accordian";
import "../Accordian/Accordian.scss";

interface AccordianContainerProps {
  title: string;
  tickets: TicketInterface[];
  addCloseButton: boolean;
}

const AccordianContainer: React.FC<AccordianContainerProps> = (props) => {
  const [maxHeight, setMaxHeight] = useState<number>(0);
  const [active, setActive] = useState<boolean>(false);
  const content = useRef<HTMLDivElement>(null);
  const {tickets, title, addCloseButton} = props;
  const [ticketCount, setTicketCount] = useState(tickets.length);

  const toggleHandler = useCallback(() => {
    if (!active && content.current) {
      setActive(true);
      setMaxHeight(content.current.scrollHeight);
    } else {
      setActive(false);
      setMaxHeight(0);
    }
  }, [active]);

  useEffect(() => {
    if (ticketCount !== tickets.length && active) {
      setActive(true);
      setMaxHeight(content.current!.scrollHeight);
      setTicketCount(tickets.length);
    }
  }, [active, tickets, ticketCount]);

  const addHeightToParent = (num: number) =>
    setMaxHeight((prevState) => prevState + num);

  return (
    <div className="accordian">
      <button
        className={`accordian__button accordian__button-parent ${active && "active"}`}
        onClick={toggleHandler}
      >
        <div className="accordian__title">
          <p>{title}</p>
          <p>({tickets.length})</p>
        </div>
        <i className={`fas fa-chevron-right ${active && "rotate"}`}></i>
      </button>
      <div
        className="accordian__content"
        ref={content}
        style={{ maxHeight: `${maxHeight}px` }}
      >
        {tickets.map((element) => (
          <Accordian
            key={element.id}
            addHeightToParent={addHeightToParent}
            ticket={element}
            addCloseButton={addCloseButton}
          />
        ))}
      </div>
    </div>
  );
};

export default AccordianContainer;
