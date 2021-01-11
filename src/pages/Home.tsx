import React from 'react';
import './Home.scss';

import Accordian from '../components/UI/Accordian/Accordian';


const faq = [
    {
        title: 'My device screen is frozen and unresponsive.',
        tags: [],
        content: 'Hold the power button for 10 seconds and then turn it back on. If that did not help, please contact support.'
    },
    {
        title: 'My device exploded! What do I do?',
        tags: [],
        content: 'Try holding the power button for 10 seconds and then turn it back on. If that did not help, please contact support.'
    },
    {
        title: 'I\'m having a hard time falling asleep at night, what should I do?',
        tags: [],
        content: 'Again, try holding the power button for 10 seconds and then turn it back on. If that did not help, please contact support.'
    },
    {
        title: 'My device will not turn off, it continues to stay powered on.',
        tags: [],
        content: 'I think if you hold the power button for 10 seconds and it will turn off. If that did not help, please contact support.'
    },
    {
        title: 'How do I use my device?',
        tags: [],
        content: 'Hold the power button for 10 seconds and then turn it back on. If that did not help, please contact support.'
    }
];

const Home: React.FC = () => {
    return (
        <div className="home">
            <div className="home-container">
                <div className="home__faqContainer">
                    <p className="home__faqContainer-FAQ">FAQ</p>
                    <div className="home__faqContainer-header"><p>If you cannot find a solution below, please&nbsp;</p><a href='/'> create a new ticket.</a></div>
                    {faq.map((element: {title:string; tags:string[]; content:string}, index: number) => {
                        return <Accordian addHeightToParent={() => {}} key={index} title={element.title} tags={element.tags} content={element.content}/>
                    })}
                </div>
            </div>
        </div>
    );
}

export default Home;