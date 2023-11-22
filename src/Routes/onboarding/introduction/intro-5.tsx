import styled from "styled-components";
import Intro3Img from "../../../images/icons/onboarding4-img.png";
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
        navigate("/sign-up");
    };
    return (
        <Contanier>
            <BackButton />
            <FadeInWrapper>
                <Image src={Intro3Img} />
            </FadeInWrapper>
            <Title style={{ marginTop: 16 }}>
                <GreenText>사진 </GreenText>
                찍기
            </Title>
            <Text style={{ marginTop: 28 }}>
                사진으로 지금 내 모습과 내 일상을
                <br /> 보내줄 수 있어요. 전면 사진과
                <br /> 후면 사진, 총 2장을 찍어보세요.
            </Text>
            <Button text="가족과 에호하러 가기" onClick={onClickButton} />
        </Contanier>
    );
};

export default Intro3;
