import React from 'react';
import './ViewTickets.scss'
import { useSelector } from 'react-redux';
import {RootState} from '../app/rootReducer';

import AccordianContainer from '../components/UI/AccordianContainer/AccordianContainer';

const ViewTickets: React.FC = props => {
    const { items } = useSelector((state: RootState) => state.tickets)
    const openTickets = items.filter(ticket => ticket.status === 'open');
    const closedTickets = items.filter(ticket => ticket.status === 'closed');

    return (
        <div className="viewTickets__tickets">
            <AccordianContainer title='Open' tickets={openTickets} addCloseButton={true} />
            <AccordianContainer title='Closed' tickets={closedTickets} addCloseButton={false} />
        </div>
    );
}

export default ViewTickets;