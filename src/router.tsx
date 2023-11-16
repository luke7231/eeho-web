import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./Routes/home";
import Onboarding from "./Routes/onboarding";
import { useAuth } from "./contexts/auth-provider";
import Agree from "./Routes/onboarding/agree";
import KakaoRedirection from "./Routes/onboarding/kakao-redirection";

const Router = () => {
    const { isLoggedIn } = useAuth();
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={isLoggedIn ? <Home /> : <Navigate to="/onboarding" />} />

                <Route path="/onboarding" element={<Onboarding />} />
                <Route path="/auth" element={<KakaoRedirection />} />
                <Route path="/onboarding/agree" element={<Agree />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
