import React, { useRef } from 'react';
import './NewTicket.scss';

const tags = ['Foo', 'Fee', 'Fi'];

const NewTicket: React.FC = () => {

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
    };

    return (
        <form className="newTicket" onSubmit={submitHandler}>
            <label htmlFor="product">Product</label>
            <select defaultValue="Ghost 4" id="product">
                    <option value="Ghost 4">Ghost 4</option>
                    <option value="Sentry Tower">Sentry Tower</option>
                    <option value="Anvil">Anvil</option>
            </select>
            <label htmlFor="tags">Tags</label>
            <div className="tags">
                {tags.map((ele, index) => (
                    <input type="button" value={ele} key={index} id="tags"/>
                ))}
            </div>
            <label htmlFor="description">Description</label>
            <textarea id="description" rows={10} cols={100} placeholder="Please describe your issue in detail."/>
            <button type="submit">Send Ticket</button>
        </form>
    );
}

export default NewTicket;