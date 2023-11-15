import React from "react";
import { useAuth } from "../../contexts/auth-provider";

const Onboarding = () => {
    const { login } = useAuth();
    const onClick = () => {
        login();
    };
    return (
        <div>
            <h2>Onboarding Page</h2>
            <p>Welcome to the onboarding page!</p>

            <button onClick={onClick}>LOGIN</button>
        </div>
    );
};
export default Onboarding;
