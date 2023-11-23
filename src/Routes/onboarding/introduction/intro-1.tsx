import styled from "styled-components";
import Title, { GreenText } from "../../../components/onboarding/title";
import Text from "../../../components/onboarding/text";
import Button from "../../../components/onboarding/button";
import { useNavigate } from "react-router-dom";
const Contanier = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const Image = styled.img`
    width: 100%;
    height: 50%;
`;
const Intro1 = () => {
    const navigate = useNavigate();

    const onClickButton = () => {
        navigate("/onboarding2");
    };
    return (
        <Contanier>
            <Image src={"https://eeho-b890d.du.r.appspot.com/image/onboarding1-img.png"} />
            <Title style={{ marginTop: 40 }}>
                <GreenText>가족과의 연락</GreenText>, 어떻게 <br /> 하고 계신가요?
            </Title>
            <Text style={{ marginTop: 15 }}>
                매번 연락하는 것이 부담스럽고
                <br />
                불편할 때, 가족의 일상이 궁금할 때,
                <br />
                가족과 소통하고 싶을 때!
            </Text>
            <Button text="다 음" onClick={onClickButton} />
        </Contanier>
    );
};

export default Intro1;
