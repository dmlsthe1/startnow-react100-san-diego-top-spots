import React from "react";

export default props => (
    <div onMouseEnter={props.handleMouseOver} onMouseLeave={props.handleMouseOut} id={props.index} className="well jumbotron p-3">
        <h4>{props.name}</h4>
        <p style={{display: props.id ? props.id: "none"}}>{props.description}</p>
        <div className="container">
            <div className="row">
                <a href={`https://maps.google.com/?q=${props.location[0]},${props.location[1]}`}>
                    <button className="btn btn-primary col" type="button">
                        <strong>Google Maps Link </strong>{/*(Distance: {future feature: googe distance matrix})*/}
                    </button>
                </a>
                <p className="col">{}</p>
            </div>
        </div>
    </div>
);