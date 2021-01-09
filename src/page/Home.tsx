import React from 'react';
import './Home.scss';

import Button from '../components/UI/Button';

const Home: React.FC = () => {
    return (
        <div className="home">
            <div className="home-container">
                <div className="home-button-container">
                    <Button link={'/'}>create new ticket</Button>
                    <Button link={'/'}>view past tickets</Button>
                </div>
            </div>
        </div>
    );
}

export default Home;