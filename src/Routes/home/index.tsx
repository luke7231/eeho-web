import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            THIS IS HOME
            <br />
            <Link to="/onboarding">onboarding</Link>
        </div>
    );
};
export default Home;
