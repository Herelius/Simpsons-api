import React from 'react';

const Api = (props) => {
    return (
    <figure className="QuoteCard" >
        <img src={props.image} alt={props.alt} />
        <figcaption>
            <blockquote>{props.quote}</blockquote>
            <cite>{props.name}</cite>
        </figcaption>
    </figure>
    )
}

export default Api;
