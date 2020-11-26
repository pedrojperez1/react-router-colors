import React from "react";
import { Link } from "react-router-dom";
import ColorList from "./ColorList";

const Home = ({colors}) => {
    return (
        <div className="Home">
            <div className="welcome">
                <h1>Welcome to the Color Factory!</h1>
                <Link to="/colors/new"><h4>Create a new color</h4></Link>
            </div>
            <ColorList colors={colors} />
        </div>
    )
};

export default Home;