import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./Routes/home";
import Onboarding from "./Routes/onboarding";
import { useAuth } from "./contexts/auth-provider";
import Agree from "./Routes/onboarding/agree";
import KakaoRedirection from "./Routes/onboarding/kakao-redirection";
import Notification from "./Routes/notification";
import Settings from "./Routes/settings";

const Router = () => {
    const { isLoggedIn } = useAuth();
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={isLoggedIn ? <Home /> : <Navigate to="/onboarding" />} />

                <Route path="/onboarding" element={<Onboarding />} />
                <Route path="/auth" element={<KakaoRedirection />} />
                <Route path="/onboarding/agree" element={<Agree />} />
                <Route path="/notification" element={<Notification />} />
                <Route path="/settings" element={<Settings />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
