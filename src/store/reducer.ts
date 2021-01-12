import { AccordianObjectInterface } from '../typescript/interface';
import * as actionTypes from './actionTypes';


export interface TicketInterface extends AccordianObjectInterface {
    id: string;
    status: "open" | "closed";
}

export interface StateInterface {
    tickets: {
        items: TicketInterface[]
    };
};

interface ActionInterface {
    type: string;
    payload: TicketInterface;
}

const initialState:StateInterface = {
    tickets: {
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
}

const reducer = (state:StateInterface = initialState, action: ActionInterface) => {
    switch(action.type) {
        case actionTypes.ADD_TICKET: {
            // Need to immutable add the Tickets Array. ImmerJS?
            return { ...state, tickets: { ...state.tickets, items: [...state.tickets.items, action.payload] }}
        }
        case actionTypes.CLOSE_TICKET: {
            const targetIndex = state.tickets.items.findIndex(ticket => action.payload.id === ticket.id);
            const newItems = [...state.tickets.items];
            newItems[targetIndex].status = 'closed';
            let tempTags = [...newItems[targetIndex].tags];
            tempTags = ['Closed', ...tempTags];
            newItems[targetIndex].tags = tempTags.filter(element => element !== "In Progress");
            return { ...state, tickets: { ...state.tickets, items: newItems }}
        }
        default:
            return state;
    }
}

export default reducer;