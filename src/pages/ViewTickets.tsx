import React from 'react';
import './ViewTickets.scss'
import { useSelector } from 'react-redux';
import { StateInterface, TicketInterface } from '../store/reducer';

import AccordianContainer from '../components/UI/AccordianContainer/AccordianContainer';

const ViewTickets: React.FC = props => {
    const tickets = useSelector<StateInterface, TicketInterface[]>(state => state.tickets.items)
    const openTickets = tickets.filter(ticket => ticket.status === 'open');
    const closedTickets = tickets.filter(ticket => ticket.status === 'closed');

    return (
        <div className="viewTickets__tickets">
            <AccordianContainer title='Open' tickets={openTickets} addCloseButton={true} />
            <AccordianContainer title='Closed' tickets={closedTickets} addCloseButton={false} />
        </div>
    );
}

export default ViewTickets;