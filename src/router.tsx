import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./Routes/home";
import Onboarding from "./Routes/onboarding";
import { useAuth } from "./contexts/auth-provider";

const Router = () => {
    const { isLoggedIn } = useAuth();
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={isLoggedIn ? <Home /> : <Navigate to="/onboarding" />} />
                <Route path="/onboarding" element={isLoggedIn ? <Navigate to="/" /> : <Onboarding />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
