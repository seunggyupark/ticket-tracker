import React, { useState, useRef } from 'react';
import './NewTicket.scss';
import { uuid } from 'uuidv4';
import { useDispatch } from 'react-redux';

import { addTicket } from './ticketsSlice'
import { TicketInterface } from './ticketsSlice';
import Modal from '../components/Modal';

const defaultTags = [
    {tag: 'In Progress', active: true},
    {tag: 'Hardware', active: false},
    {tag: 'Software', active: false},
    {tag: 'Electrical', active: false},
    {tag: 'Power', active: false},
    {tag: 'App', active: false}
];

const NewTicket: React.FC = () => {
    const [ tags, setTags ] = useState<{tag:string, active:boolean}[]>([...defaultTags]);
    const [ showModal, setShowModal ] = useState(false);
    const contentRef = useRef<HTMLTextAreaElement>(null);
    const productRef = useRef<HTMLSelectElement>(null);

    const dispatch = useDispatch();

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        if (productRef.current && contentRef.current && contentRef.current.value) {
            const day = new Date();
            const dayString = `${day.getMonth() + 1}-${day.getDate()}`;
            let title = `${dayString} ${productRef.current.value}`;
            const ticket: TicketInterface = {
                id: uuid(),
                status: 'open',
                content: contentRef.current.value,
                tags: tags.map(ele => ele.tag),
                title
            }
            dispatch(addTicket(ticket));
            setShowModal(true);
            setTags([...defaultTags]);
            contentRef.current.value = '';
            productRef.current.value='Ghost 4';
        }
    };

    const toggleTag = (tag: string) => {
        const targetIndex = tags.findIndex(ele => ele.tag === tag);
        const newTags = [...tags];
        newTags[targetIndex].active = !newTags[targetIndex].active;
        setTags(newTags)
    };

    const removeModal = () => setShowModal(false);

    return (
        <div className="form__container">
            <form className="newTicket" onSubmit={submitHandler}>
                <label htmlFor="product">Product</label>
                <select ref={productRef} defaultValue="Ghost 4" id="product">
                        <option value="Ghost 4">Ghost 4</option>
                        <option value="Sentry Tower">Sentry Tower</option>
                        <option value="Anvil">Anvil</option>
                </select>
                <label htmlFor="tags">Tags</label>
                <div className="tags">
                    {tags.map((ele, index) => (
                        index > 0 && <input onClick={() => toggleTag(ele.tag)} className={ele.active ? "active" : ""} type="button" value={ele.tag} key={index} id="tags"/>
                    ))}
                </div>
                <label htmlFor="description">Description</label>
                <textarea ref={contentRef} id="description" rows={10} cols={100} placeholder="Please describe your issue in detail."/>
                <button type="submit">Send Ticket</button>
            </form>
            <Modal show={showModal} removeModal={removeModal} />
        </div>
    );
}

export default NewTicket;