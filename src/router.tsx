import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./Routes/home";
import Onboarding from "./Routes/onboarding";
import { useAuth } from "./contexts/auth-provider";
import Agree from "./Routes/onboarding/agree";
import KakaoRedirection from "./Routes/onboarding/kakao-redirection";
import Notification from "./Routes/notification";
import Settings from "./Routes/settings";
import Intro1 from "./Routes/onboarding/introduction/intro-1";
import Intro2 from "./Routes/onboarding/introduction/intro-2";
import Intro3 from "./Routes/onboarding/introduction/intro-3";
import Intro4 from "./Routes/onboarding/introduction/intro-4";
import Intro5 from "./Routes/onboarding/introduction/intro-5";

const Router = () => {
    const { isLoggedIn } = useAuth();
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={isLoggedIn ? <Home /> : <Navigate to="/onboarding" />} />

                <Route path="/onboarding" element={<Intro1 />} />
                <Route path="/onboarding2" element={<Intro2 />} />
                <Route path="/onboarding3" element={<Intro3 />} />
                <Route path="/onboarding4" element={<Intro4 />} />
                <Route path="/onboarding5" element={<Intro5 />} />
                <Route path="/auth" element={<KakaoRedirection />} />
                <Route path="/onboarding/agree" element={<Agree />} />
                <Route path="/notification" element={<Notification />} />
                <Route path="/settings" element={<Settings />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
