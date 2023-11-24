import { useState } from "react";
import styled from "styled-components";
import FlashLoading from "../../../components/common/flash-loading";
import Button from "../../../components/onboarding/button";
import BackButton from "../../../components/onboarding/back-button";

const Contanier = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 64px;
`;
const InputContainer = styled.div``;
const Text = styled.div`
    display: flex;
    height: 28px;
    margin: 0 0 10px 4px;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    color: #462d2d;
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`;
const Input = styled.input`
    background-color: #bcd6ab;
    height: 36px;
    border: 0;
    width: 100%;
    // text-align: center;
    padding: 0 10px;
    font-size: 20px;
    max-width: 320px;
    margin-bottom: 38px;
    border-radius: 10px;
`;

const Login = () => {
    const [loading, setLoading] = useState(false);
    const [familyCode, setFamilyCode] = useState("");
    const [nickName, setNickName] = useState("");

    const onClickButton = () => {
        setLoading(true);
        console.log(familyCode);
        console.log(nickName);
    };
    return (
        <Contanier>
            <BackButton />
            <InputContainer>
                <Text>가족코드</Text>
                <Input value={familyCode} onChange={(v) => setFamilyCode(v.target.value)} />

                <Text>닉네임</Text>
                <Input value={nickName} onChange={(v) => setNickName(v.target.value)} />
            </InputContainer>
            {loading && <FlashLoading style={{ position: "fixed", bottom: 0 }} />}
            {nickName.trim() === "" || familyCode.trim() == "" ? (
                <Button text="입력을 완료해주세요!" />
            ) : (
                <Button
                    text="로그인"
                    onClick={() => {
                        if (!loading) onClickButton();
                    }}
                />
            )}
        </Contanier>
    );
};
export default Login;
