import styled from "styled-components";
import Intro2Img from "../../../images/icons/onboarding2-img.png";
import Title, { GreenText } from "../../../components/onboarding/title";
import Text from "../../../components/onboarding/text";
import Button from "../../../components/onboarding/button";
import { useNavigate } from "react-router-dom";
import { FadeInWrapper } from "../../../components/onboarding/fade-in-wrapper";
import BackButton from "../../../components/onboarding/back-button";
const Contanier = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const Image = styled.img`
    height: 209px;
    margin-top: 130px;
    margin-left: 15px;
`;
const Intro2 = () => {
    const navigate = useNavigate();

    const onClickButton = () => {
        navigate("/onboarding3");
    };
    return (
        <Contanier>
            <BackButton />
            <FadeInWrapper>
                <Image src={Intro2Img} />
            </FadeInWrapper>
            <Title style={{ marginTop: 70 }}>
                가족에게 보내는
                <br /> 시그널,
                <GreenText> 에호</GreenText>
            </Title>
            <Text style={{ marginTop: 28 }}>
                에호 버튼을 눌러 가족에게 시그널을 <br />
                보내고, 사진 답장을 받아보세요.
            </Text>
            <Button text="다 음" onClick={onClickButton} />
        </Contanier>
    );
};

export default Intro2;
