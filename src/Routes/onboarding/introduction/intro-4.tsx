import styled from "styled-components";
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
    width: 229px;
    margin-top: 40px;
`;
const Intro3 = () => {
    const navigate = useNavigate();

    const onClickButton = () => {
        navigate("/onboarding5");
    };
    return (
        <Contanier>
            <BackButton />
            <FadeInWrapper>
                <Image src={"https://feople-eeho.com/image/onboarding3-img.png"} />
            </FadeInWrapper>
            <Title style={{ marginTop: 16 }}>
                <GreenText>에호 답장 </GreenText>
                보내기
            </Title>
            <Text style={{ marginTop: 28 }}>
                나에게 에호를 요청한 사람은
                <br />
                노란색으로 보여요.
                <br />
                노란색 원을 눌러 답장해 보세요.
            </Text>
            <Button text="다 음" onClick={onClickButton} />
        </Contanier>
    );
};

export default Intro3;
