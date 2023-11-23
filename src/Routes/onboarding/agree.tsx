import styled from "styled-components";
import HLogo from "../../components/logo/h-logo";
import VMark from "../../images/icons/v_mark.png";
import VMarkGreen from "../../images/icons/v_mark_green.png";
const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 0 38px;
`;
const TitleSection = styled.div`
    margin-top: 50px;
`;
const Title = styled.div`
    color: #462d2d;
    font-size: 24px;
    font-style: normal;
    font-weight: 800;
    margin-top: 8px;
    display: flex;
    align-items: center;
    height: 43px;
`;
const AgreeContainer = styled.div`
    margin-top: 38px;
`;
const CheckWrap = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 22px;
`;
const CheckBoxContainer = styled.div<{ checked: boolean }>`
    width: 30px;
    height: 30px;
    margin-left: 10px;
    background: ${(props) => (props.checked ? "#A7B387" : "#eee")};
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
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
`;
const ButtonContainer = styled.div``;
const Partition = styled.div`
    height: 1px;
    background-color: #462d2d;
    width: 100%;
    margin-top: 30px;
    margin-bottom: 60px;
`;

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
                <HLogo color="green" width={43} height={88} />
                <Title>에호 약관동의</Title>
            </TitleSection>
            <AgreeContainer>
                <CheckBox checked={true} text="전체동의" />
                <Partition />
                <CheckBox checked={true} text="약관동의2" />
                <CheckBox checked={false} text="약관동의2" />
            </AgreeContainer>
            <ButtonContainer></ButtonContainer>
        </Container>
    );
};

export default Agree;
