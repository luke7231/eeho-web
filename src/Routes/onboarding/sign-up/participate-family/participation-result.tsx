import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../../../contexts/auth-provider";
import Button from "../../../../components/onboarding/button";

const ParticipationResult = () => {
    const { login } = useAuth();
    const navigate = useNavigate();
    const {
        state: { familyName },
    } = useLocation();
    console.log(familyName);

    const onClickButton = () => {
        // localStorage.setItem("jwt", token);
        login();
        navigate("/");
    };
    return (
        <>
            <div>가족 이름: {familyName}</div>
            <Button text="에호 시작하기" onClick={onClickButton} />
        </>
    );
};

export default ParticipationResult;
