import { useState } from "react";
import Button from "../../../../components/onboarding/button";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import EehoLogo from "../../../../images/icons/EEHO.png";

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
    margin-bottom: 42px;
`;
const CodeInput = styled.input`
    background-color: #bcd6ab;
    height: 57px;
    border: 0;
    width: 100%;
    text-align: center;
    font-size: 24px;
    margin-bottom: 100px;
    border-radius: 10px;
`;

const CreateFamily = () => {
    const navigate = useNavigate();
    const [familyName, setFamilyName] = useState("");
    const onClickButton = () => {
        navigate("/sign-up/create/set-profile", {
            state: {
                familyName,
            },
        });
    };
    return (
        <Contanier>
            <Logo src={EehoLogo} />
            <Title>가족 이름 설정</Title>
            <Text>우리 가족의 이름을 설정해 주세요. 가족구성원 모두에게 표시됩니다.</Text>
            <CodeInput value={familyName} onChange={(v) => setFamilyName(v.target.value)} />

            {familyName !== "" ? (
                <Button text="다 음" onClick={onClickButton} />
            ) : (
                <Button text="가족 이름 입력해주세요!" />
            )}
        </Contanier>
    );
};

export default CreateFamily;
