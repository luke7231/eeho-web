import styled from "styled-components";
import Logo from "../../../images/icons/h.png";
import Title, { GreenText } from "../../../components/onboarding/title";
import Text from "../../../components/onboarding/text";
import { useNavigate } from "react-router-dom";
import { FadeInWrapper } from "../../../components/onboarding/fade-in-wrapper";
const Contanier = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const Image = styled.img`
    width: 100px;
    margin-top: 114px;
    margin-right: 20px;
`;
const ButtonContainer = styled.div`
    position: absolute;
    bottom: 0;
    display: flex;
    width: 100%;
    padding: 0 29px;
    gap: 17px;
`;
const Button = styled.div`
    width: 100%;
    height: 78px;
    background-color: #89aa78cc;
    border-radius: 11px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 24px;
    font-weight: 600;
`;
const SignUp = () => {
    const navigate = useNavigate();

    const onClickButton = () => {
        navigate("/sign-up");
    };
    return (
        <Contanier>
            <FadeInWrapper>
                <Image src={Logo} />
            </FadeInWrapper>
            <Title style={{ marginTop: 32 }}>
                소중한 사람들과의
                <GreenText> 연결</GreenText>
            </Title>
            <Text style={{ marginTop: 48 }}>
                새로운 가족 그룹을 생성하거나, <br />
                이미 만들어진 가족 그룹이 있다면 참가해 보세요.
            </Text>
            <ButtonContainer>
                <Button>생성</Button>
                <Button>참여</Button>
            </ButtonContainer>
        </Contanier>
    );
};

export default SignUp;
