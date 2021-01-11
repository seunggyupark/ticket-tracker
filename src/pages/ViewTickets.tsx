import React from 'react';
import './ViewTickets.scss'

import AccordianContainer from '../components/UI/AccordianContainer/AccordianContainer';

const openTickets = {
    title: 'Open',
    amount: 2,
    tickets: [
        {
            title: 'Ticket #1',
            tags: ['Hardware', 'Software', 'Electronic'],
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            title: 'Ticket #2',
            tags: ['Hardware', 'Software', 'Electronic'],
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }
    ]
};

const closedTickets = {
    title: 'Closed',
    amount: 1,
    tickets: [
        {
            title: 'Ticket #1',
            tags: ['Hardware', 'Software', 'Electronic'],
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }
    ]
};

const ViewTickets: React.FC = props => {

    return (
        <div className="viewTickets__tickets">
            <AccordianContainer info={openTickets}/>
            <AccordianContainer info={closedTickets}/>
        </div>
    );
}

export default ViewTickets;