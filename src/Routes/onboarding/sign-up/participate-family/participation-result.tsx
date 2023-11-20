import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../../../contexts/auth-provider";
import Button from "../../../../components/onboarding/button";
import EehoLogo from "../../../../images/icons/EEHO.png";
import styled from "styled-components";
import BasicProfile from "../../../../images/icons/basic-profile-img.png";
const Contanier = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 64px;
`;
const Logo = styled.img`
    width: 95px;
    height: 61px;
    margin-bottom: 34px;
`;
const FamilyName = styled.div`
    background-color: #bcd6ab;
    height: 57px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 36px;
    border-radius: 10px;
    color: #000;
    font-size: 24px;
    font-weight: 800;
    margin-bottom: 50px;
`;
const Profile = styled.div`
    position: relative;
    margin-bottom: 58px;
`;
const ProfileImage = styled.img`
    width: 155px;
    height: 155px;
    border-radius: 50%;
    border: 9px solid #95b485;
`;
const Text = styled.div`
    height: 75px;
    display: flex;
    align-items: center;
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: center;
    margin-bottom: 20px;
`;

const ParticipationResult = () => {
    const { login } = useAuth();
    const navigate = useNavigate();
    const {
        state: { familyName, token, userName },
    } = useLocation();
    console.log(familyName);

    const onClickButton = () => {
        localStorage.setItem("jwt", token);
        login();
        navigate("/");
    };
    return (
        <Contanier>
            <Logo src={EehoLogo} />
            <FamilyName>{familyName}</FamilyName>
            <Profile>
                <ProfileImage src={BasicProfile} />
            </Profile>
            <Text>
                ` {userName} `님은
                <br />` {familyName} `의 구성원이 되었습니다!
            </Text>

            <Button text="에호 시작하기" onClick={onClickButton} />
        </Contanier>
    );
};

export default ParticipationResult;
