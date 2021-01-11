import React, { useState, useRef } from 'react';
import './Accordian.scss'

import Tag from './Tag';

interface AccordianProps {
    title: string;
    content: string;
    tags: string[];
    addHeightToParent: (num:number) => void;
}

const Accordian: React.FC<AccordianProps> = (props) => {
    const [maxHeight, setMaxHeight] = useState<string>('0px');
    const [active, setActive] = useState<boolean>(false);
    const content = useRef<HTMLDivElement>(null);

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
                    <p>{props.title}</p>
                    <div className="accordian__tags">
                        {props.tags.map((element, index) => <Tag key={index} tag={element}/>)}
                    </div>
                </div>
                <i className={`fas fa-chevron-right ${active && 'rotate'}`}></i>
            </button>
            <div className="accordian__content" ref={content} style={{maxHeight: `${maxHeight}`}} >
                <div className="accordian__text">{props.content}</div>
            </div>
        </div>
    );
}

export default Accordian;