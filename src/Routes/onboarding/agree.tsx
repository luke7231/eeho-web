import styled from "styled-components";
import HLogo from "../../components/logo/h-logo";
import VMark from "../../images/icons/v_mark.png";
import VMarkGreen from "../../images/icons/v_mark_green.png";
const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
`;
const TitleSection = styled.div`
    margin-left: 35px;
    margin-top: 45px;
`;
const Title = styled.div`
    color: #462d2d;
    font-size: 24px;
    font-style: normal;
    font-weight: 800;
    margin-top: 8px;
`;
const AgreeContainer = styled.div`
    margin-top: 38px;
    margin-left: 48px;
`;
const CheckWrap = styled.div`
    display: flex;
    align-items: center;
`;
const CheckBoxContainer = styled.div<{ checked: boolean }>`
    width: 30px;
    height: 30px;
    background: ${(props) => (props.checked ? "#A7B387" : "#fff")};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 13px;
`;
const CheckIcon = styled.img`
    width: 19px;
    height: 12px;
`;
const CheckBoxText = styled.div`
    color: #462d2d;
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
`;
const ButtonContainer = styled.div``;

const CheckBox = ({ checked, text }: { checked: boolean; text: string }) => {
    return (
        <CheckWrap>
            <CheckBoxContainer checked={checked}>
                <CheckIcon src={checked ? VMark : VMarkGreen} />
            </CheckBoxContainer>
            <CheckBoxText>{text}</CheckBoxText>
        </CheckWrap>
    );
};
const Agree = () => {
    return (
        <Container>
            <TitleSection>
                <HLogo color="brown" width={43} height={88} />
                <Title>에호 약관동의</Title>
            </TitleSection>
            <AgreeContainer>
                <CheckBox checked={true} text="약관동의1" />
                <CheckBox checked={false} text="약관동의2" />
            </AgreeContainer>
            <ButtonContainer></ButtonContainer>
        </Container>
    );
};

export default Agree;
