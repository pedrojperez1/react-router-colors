import React from "react";
import "./Color.css";

const Color = ({color}) => {
    const divStyle = {
        backgroundColor: color
    }
    return (
        <div className="Color" style={divStyle}>
            <h2>{color}</h2>
        </div>
    )
};

export default Color;