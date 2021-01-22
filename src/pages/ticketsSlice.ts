import { createSlice } from '@reduxjs/toolkit';
import { AccordianObjectInterface } from '../app/interface';

export interface TicketInterface extends AccordianObjectInterface {
    id: string;
    status: "open" | "closed";
}

export interface StateInterface {
    items: TicketInterface[]
};

interface ActionInterface {
    type: string;
    payload: TicketInterface;
}

const initialState:StateInterface = {
    items: [
        {
            id: '908123asjkdas213',
            title: 'Ticket #1',
            tags: ['In Progress', 'Hardware', 'Software', 'Electronic'],
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            status: 'open'
        },
        {
            id: '9081223asj123123kdas213',
            title: 'Ticket #2',
            tags: ['In Progress', 'Hardware', 'Software', 'Electronic'],
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            status: 'open'
        },
        {
            id: '90813342as213',
            title: 'Ticket #3',
            tags: ['In Progress', 'Hardware', 'Software', 'Electronic'],
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            status: 'open'
        },
        {
            id: '908121231s2999913',
            title: 'Ticket #4',
            tags: ['Closed', 'Hardware', 'Software', 'Electronic'],
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            status: 'closed'
        },
        {
            id: '9081119988das213',
            title: 'Ticket #5',
            tags: ['Closed', 'Hardware', 'Software', 'Electronic'],
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            status: 'closed'
        }
    ]
    
}
const tickets = createSlice({
    name: 'tickets',
    initialState,
    reducers: {
        addTicket: (state, action) => {state.items.push(action.payload)},
        closeTicket: (state, action) => {
            const item = state.items.find(ticket => action.payload.id === ticket.id);
            if (item) {
                item.status = 'closed';
                item.tags.unshift('Closed');
                item.tags = item.tags.filter(element => element !== "In Progress");
            }
        }
    }
})

export const { addTicket, closeTicket } = tickets.actions;
export default tickets.reducer;