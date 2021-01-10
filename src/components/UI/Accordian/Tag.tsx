import React from 'react'
import './Tag.scss';


interface TagProps {
    tag: string;
}

const Tag: React.FC<TagProps> = (props) => {
    return (
        <div className="tag">{props.tag}</div>
    );
}

export default Tag;