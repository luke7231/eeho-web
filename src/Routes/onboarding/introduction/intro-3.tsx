import styled from "styled-components";
import Intro3Img from "../../../images/icons/onboarding3-img.png";
import Title, { GreenText } from "../../../components/onboarding/title";
import Text from "../../../components/onboarding/text";
import Button from "../../../components/onboarding/button";
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
    width: 229px;
    margin-top: 40px;
`;
const Intro3 = () => {
    const navigate = useNavigate();

    const onClickButton = () => {
        navigate("/onboarding4");
    };
    return (
        <Contanier>
            <FadeInWrapper>
                <Image src={Intro3Img} />
            </FadeInWrapper>
            <Title style={{ marginTop: 16 }}>
                <GreenText>에호 </GreenText>
                보내기
            </Title>
            <Text style={{ marginTop: 28 }}>
                에호를 보내고 싶은 가족 구성원을
                <br /> 선택한 뒤, 에호 버튼을 눌러보세요.
            </Text>
            <Button text="다 음" onClick={onClickButton} />
        </Contanier>
    );
};

export default Intro3;
