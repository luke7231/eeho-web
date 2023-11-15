import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home";
import Onboarding from "./onboarding";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/onboarding" element={<Onboarding />}></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
