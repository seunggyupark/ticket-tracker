import React from 'react';
import './Button.scss';

interface ButtonProps  {
    link: string;
}

const Button: React.FC<ButtonProps> = props => {
    return (
        <button className="button">
            <a href={props.link}>{props.children}</a>
        </button>
    );
}

export default Button;