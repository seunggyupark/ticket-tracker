import React from 'react'
import './Tag.scss';


interface TagProps {
    tag: string;
    color: string;
}

const Tag: React.FC<TagProps> = (props) => {
    return (
        <div className="tag" style={{backgroundColor: props.color}}>{props.tag}</div>
    );
}

export default Tag;