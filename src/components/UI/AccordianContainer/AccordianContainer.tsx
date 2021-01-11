import React, { useState, useRef  } from 'react';
import './AccordianContainer.scss';

import Accordian from '../Accordian/Accordian';

const AccordianContainer: React.FC = props => {
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
    }

    const addHeightToParent = (num:number) => setMaxHeight(prevState => prevState + num);

    return (
            <div className="accordian">
                <button className={`accordian__button ${active && 'active'}`} onClick={toggleHandler}>
                    <p>{'Open Tickets'}</p>
                    <i className={`fas fa-chevron-right ${active && 'rotate'}`}></i>
                </button>
                <div className="accordian__content" ref={content} style={{maxHeight: `${maxHeight}px`}} >
                    <Accordian addHeightToParent={addHeightToParent} title="wow" tags={[]} content="111"/>
                    <Accordian addHeightToParent={addHeightToParent} title="wow" tags={[]} content="111"/>
                    <Accordian addHeightToParent={addHeightToParent} title="wow" tags={[]} content="111"/>
                    <Accordian addHeightToParent={addHeightToParent} title="wow" tags={[]} content="111"/>
                    <Accordian addHeightToParent={addHeightToParent} title="wow" tags={[]} content="111"/>
                </div>
            </div>
    );
}

export default AccordianContainer;