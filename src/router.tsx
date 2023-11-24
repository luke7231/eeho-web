import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./Routes/home";
import { useAuth } from "./contexts/auth-provider";
import Agree from "./Routes/onboarding/agree";
import KakaoRedirection from "./Routes/onboarding/kakao-redirection";
import Posts from "./Routes/posts";
import Intro1 from "./Routes/onboarding/introduction/intro-1";
import Intro2 from "./Routes/onboarding/introduction/intro-2";
import Intro3 from "./Routes/onboarding/introduction/intro-3";
import Intro4 from "./Routes/onboarding/introduction/intro-4";
import Intro5 from "./Routes/onboarding/introduction/intro-5";
import SignUp from "./Routes/onboarding/sign-up";
import CreateFamily from "./Routes/onboarding/sign-up/create-family/create-family";
import SetProfile from "./Routes/onboarding/sign-up/create-family/set-profile";
import SetProfileAtParti from "./Routes/onboarding/sign-up/participate-family/set-profile";
import CreationResult from "./Routes/onboarding/sign-up/create-family/creation-result";
import ParticipateFamily from "./Routes/onboarding/sign-up/participate-family/participate-family";
import ParticipationResult from "./Routes/onboarding/sign-up/participate-family/participation-result";
import Send from "./Routes/send";
import Setting from "./Routes/setting";
import UpdateProfile from "./Routes/setting/updata-profile";
import CopyLink from "./Routes/setting/copy-link";
import ServiceContent from "./Routes/setting/service-content";
import Privacy from "./Routes/setting/privacy";
import Login from "./Routes/onboarding/login/login";
import Report from "./Routes/setting/report";

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

                <Route path="/login" element={<Login />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/sign-up/create" element={<CreateFamily />} />
                <Route path="/sign-up/create/set-profile" element={<SetProfile />} />
                <Route path="/sign-up/create/result" element={<CreationResult />} />

                <Route path="/sign-up/participate" element={<ParticipateFamily />} />
                <Route path="/sign-up/participate/set-profile" element={<SetProfileAtParti />} />
                <Route path="/sign-up/participate/result" element={<ParticipationResult />} />

                <Route path="/auth" element={<KakaoRedirection />} />
                <Route path="/onboarding/agree" element={<Agree />} />
                <Route path="/posts" element={<Posts />} />
                <Route path="/send" element={<Send />} />
                <Route path="/setting" element={<Setting />} />
                <Route path="/setting/update_profile" element={<UpdateProfile />} />
                <Route path="/setting/copy_link" element={<CopyLink />} />
                <Route path="/setting/report" element={<Report />} />

                <Route path="/agree" element={<Agree />} />
                <Route path="/service-content" element={<ServiceContent />} />
                <Route path="/privacy" element={<Privacy />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
