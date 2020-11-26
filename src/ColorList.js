import React from "react";
import { Link } from "react-router-dom";
import {v4 as uuid} from "uuid";

const ColorList = ({colors}) => {
    return (
        <div className="ColorList">
            <h4>Choose a color!</h4>
            {colors.map(c => <Link to={`/colors/${c}`} key={uuid()}><p>{c}</p></Link>)}
        </div>
    )
};

export default ColorList;