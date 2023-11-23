import styled from "styled-components";
import HLogo from "../../components/logo/h-logo";
import VMark from "../../images/icons/v_mark.png";
import VMarkGreen from "../../images/icons/v_mark_green.png";
import Button from "../../components/onboarding/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
const ButtonContainer = styled.div`
    position: fixed;
    left: 0;
`;
const Partition = styled.div`
    height: 1px;
    background-color: #462d2d;
    width: 100%;
    margin-top: 30px;
    margin-bottom: 60px;
`;

const CheckBox = ({ onClick, checked, text }: { onClick: () => void; checked: boolean; text: string }) => {
    return (
        <CheckWrap onClick={onClick}>
            <CheckBoxContainer checked={checked}>
                <CheckIcon src={checked ? VMark : VMarkGreen} />
            </CheckBoxContainer>
            <CheckBoxText>{text}</CheckBoxText>
        </CheckWrap>
    );
};
const Agree = () => {
    const navigate = useNavigate();
    const [checkAll, setCheckAll] = useState(false);
    const [checkTerms, setCheckTerms] = useState(false);
    const [checkPrivacy, setCheckPrivacy] = useState(false);
    const [checkAge, setCheckAge] = useState(false);

    const handleCheckAll = () => {
        const newCheckAll = !checkAll;
        setCheckAll(newCheckAll);
        setCheckTerms(newCheckAll);
        setCheckPrivacy(newCheckAll);
        setCheckAge(newCheckAll);
    };

    const handleCheckTerms = () => {
        setCheckTerms(!checkTerms);
        if (!checkTerms && checkPrivacy && checkAge) {
            setCheckAll(true);
        } else {
            setCheckAll(false);
        }
    };

    const handleCheckPrivacy = () => {
        setCheckPrivacy(!checkPrivacy);
        if (checkTerms && !checkPrivacy && checkAge) {
            setCheckAll(true);
        } else {
            setCheckAll(false);
        }
    };

    const handleCheckAge = () => {
        setCheckAge(!checkAge);
        if (checkTerms && checkPrivacy && !checkAge) {
            setCheckAll(true);
        } else {
            setCheckAll(false);
        }
    };

    const onClickButton = () => {
        navigate("/sign-up");
    };
    return (
        <Container>
            <TitleSection>
                <HLogo color="green" width={43} height={88} />
                <Title>에호 약관동의</Title>
            </TitleSection>
            <AgreeContainer>
                <CheckBox onClick={handleCheckAll} checked={checkAll} text="전체동의" />
                <Partition />
                <CheckBox onClick={handleCheckTerms} checked={checkTerms} text="서비스 이용약관 동의 (필수)" />
                <CheckBox
                    onClick={handleCheckPrivacy}
                    checked={checkPrivacy}
                    text="개인정보 수집 및 이용 동의 (필수)"
                />
                <CheckBox onClick={handleCheckAge} checked={checkAge} text="만 14세 이상 서비스 이용(필수)" />
            </AgreeContainer>
            <ButtonContainer>
                {checkAll ? <Button text="다 음" onClick={onClickButton} /> : <Button text="모두 동의 해주세요" />}
            </ButtonContainer>
        </Container>
    );
};

export default Agree;
