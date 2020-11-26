import React, { useState } from "react";
import { Redirect } from "react-router-dom";

const NewColorForm = ({updateColors}) => {
    const [submitted, setSubmitted] = useState(false);
    const [newColor, setNewColor] = useState();
    const handleChange = (e) => {
        e.preventDefault();
        setNewColor(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        updateColors(newColor);
        setSubmitted(true);
    }
    return (submitted ? <Redirect to={`/colors`}/> :
        <form>
            <input type="text" onChange={handleChange} name="newColor"></input>
            <button onClick={handleSubmit}>Add</button>
        </form>
    )
};

export default NewColorForm;