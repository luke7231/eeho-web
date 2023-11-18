import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../../../contexts/auth-provider";
import Button from "../../../../components/onboarding/button";

const CreationResult = () => {
    const { login } = useAuth();
    const navigate = useNavigate();
    const {
        state: { familyCode, token },
    } = useLocation();

    const onClickButton = () => {
        localStorage.setItem("jwt", token);
        login();
        navigate("/");
    };
    return (
        <>
            <div style={{ margin: 100 }}>가족 code: {familyCode}</div>
            <Button text="에호 시작하기" onClick={onClickButton} />
        </>
    );
};

export default CreationResult;
