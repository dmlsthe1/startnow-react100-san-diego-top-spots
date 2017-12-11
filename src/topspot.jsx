import React from "react";

export default props => (
    <div className="well border border-dark bg-white p-3">
        <h4>{props.name}</h4>
        <p>{props.description}</p>
        <a href={`https://maps.google.com/?q=${props.location[0]},${props.location[1]}`}><button type="button">Link</button></a>
    </div>
);