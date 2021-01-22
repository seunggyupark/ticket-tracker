import React, { useState, useRef } from 'react';
import './Accordian.scss'
import { TicketInterface } from '../../../pages/ticketsSlice'; 
import { useDispatch } from 'react-redux';
import { closeTicket } from '../../../pages/ticketsSlice';

import Tag from './Tag';

interface AccordianProps {
    ticket: TicketInterface;
    addHeightToParent(num:number): void;
    addCloseButton: boolean;
}

const Accordian: React.FC<AccordianProps> = (props) => {
    const [maxHeight, setMaxHeight] = useState<string>('0px');
    const [active, setActive] = useState<boolean>(false);
    const content = useRef<HTMLDivElement>(null);

    const dispatch = useDispatch();
    const closeTicketHandler = () => dispatch(closeTicket(props.ticket));

    const toggleHandler = () => {
        if (!active && content.current) {
            setActive(true);
            setMaxHeight(`${content.current.scrollHeight}px`);
            props.addHeightToParent(content.current.scrollHeight);
        } else {
            setActive(false);
            setMaxHeight('0px');
            props.addHeightToParent(-content.current!.scrollHeight);
        }
    }

    return (
        <div className="accordian">
            <button className={`accordian__button accordian__button-child ${active && 'active'}`} onClick={toggleHandler}>
                <div className="accordian__title">
                    <p>{props.ticket.title}</p>
                    <div className="accordian__tags">
                        {props.ticket.tags.map((element, index) => <Tag key={index} tag={element} color={(element === "Closed") ? "#e62828" : (element === "In Progress") ? "#33cc33": "#209CEE"} />)}
                    </div>
                </div>
                <i className={`fas fa-chevron-right ${active && 'rotate'}`}></i>
            </button>
            <div className="accordian__content" ref={content} style={{maxHeight: `${maxHeight}`}} >
                <div className="accordian__text">{props.ticket.content}</div>
                {props.addCloseButton &&
                    <div className="accordian__content-buttons">
                        <div onClick={closeTicketHandler}><i className="far fa-times-circle"><div>&nbsp;Close Ticket</div></i></div>
                    </div>
                }
            </div>
        </div>
    );
}

export default Accordian;