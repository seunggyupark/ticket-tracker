import React from 'react';
import './ViewTickets.scss'

import AccordianContainer from '../components/UI/AccordianContainer/AccordianContainer';

const ViewTickets: React.FC = props => {

    return (
        <div className="viewTickets">
            <div className="viewTickets__container">
                <AccordianContainer />
                <AccordianContainer />
            </div>
        </div>
    );
}

export default ViewTickets;