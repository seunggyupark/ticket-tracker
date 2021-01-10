import React from 'react';
import './Home.scss';

import Accordian from '../components/UI/Accordian/Accordian';

const faq = {
    title: 'This is a funny joke',
    tags: [],
    content: 'Please laugh at my joke, it is really funny!'
}

const Home: React.FC = () => {
    return (
        <div className="home">
            <div className="home-container">
                <div className="home-button-container">
                    <Accordian title={faq.title} tags={faq.tags} content={faq.content}/>
                    <Accordian title={faq.title} tags={faq.tags} content={faq.content}/>
                    <Accordian title={faq.title} tags={faq.tags} content={faq.content}/>
                    <Accordian title={faq.title} tags={faq.tags} content={faq.content}/>
                </div>
            </div>
        </div>
    );
}

export default Home;