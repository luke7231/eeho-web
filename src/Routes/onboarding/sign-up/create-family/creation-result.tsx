import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../../../contexts/auth-provider";
import Button from "../../../../components/onboarding/button";
import styled from "styled-components";
import EehoLogo from "../../../../images/icons/EEHO.png";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Zoom, toast } from "react-toastify";

const Contanier = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 48px;
`;
const Logo = styled.img`
    width: 95px;
    height: 61px;
    margin-bottom: 24px;
`;
const Title = styled.div`
    height: 70px;
    display: flex;
    align-items: center;
    font-size: 24px;
    font-weight: 800;
    line-height: 29px;
    letter-spacing: 0em;
    text-align: center;
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
const CopyTextBox = styled.div`
    background-color: #bcd6ab;
    border: 0;
    width: 100%;
    text-align: center;
    font-size: 24px;
    margin-bottom: 48px;
    border-radius: 10px;
    padding: 6px 0;
`;
const Margin = styled.div`
    margin-bottom: 40px;
`;
const CheckButton = styled.button`
    width: 95px;
    height: 44px;
    background-color: #627d50;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 20px;
    border-radius: 10px;
`;
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
    const copyText = `www.google.com \n\n 코드: ${familyCode}`;
    return (
        <Contanier>
            <Logo src={EehoLogo} />
            <Title>가족 초대 링크</Title>
            <Text>
                함께 에호하고싶은
                <br /> 가족 구성원에게 공유해보세요.
            </Text>
            <CopyTextBox>
                www.google.com <Margin /> 코드: {familyCode}
            </CopyTextBox>
            <CopyToClipboard
                text={copyText}
                onCopy={() =>
                    toast("복사가 완료되었습니다!", {
                        position: "bottom-center",
                        transition: Zoom,
                        className: "otl_tostify",
                        autoClose: 1000,
                        hideProgressBar: true,
                    })
                }
            >
                <CheckButton>복사</CheckButton>
            </CopyToClipboard>

            <Button text="에호 시작하기" onClick={onClickButton} />
        </Contanier>
    );
};

export default CreationResult;
