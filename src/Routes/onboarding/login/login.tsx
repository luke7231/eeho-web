import { useState } from "react";
import styled from "styled-components";
import FlashLoading from "../../../components/common/flash-loading";
import Button from "../../../components/onboarding/button";
import BackButton from "../../../components/onboarding/back-button";
import { tellClearHistory } from "../../../utils/eeho-api/bridge-handler";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../contexts/auth-provider";

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
    padding: 0 10px;
    font-size: 20px;
    max-width: 320px;
    margin-bottom: 38px;
    border-radius: 10px;
`;

const Login = () => {
    const { login } = useAuth();
    const [loading, setLoading] = useState(false);
    const [familyCode, setFamilyCode] = useState("");
    const [nickName, setNickName] = useState("");

    const navigate = useNavigate();
    const onClickButton = () => {
        setLoading(true);
        const data = {
            userName: nickName,
            code: familyCode,
            pushToken: localStorage.getItem("expo_push_token") || "",
        };
        fetch(process.env.REACT_APP_SERVER_URI + "/family/member/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.ok) {
                    setLoading(false);
                    // 로그인 정보 (토큰, 아이디) 저장.
                    localStorage.setItem("jwt", data.token);
                    localStorage.setItem("id", data.id);
                    // 모바일에 저장해라.
                    const payload = {
                        type: "store_token",
                        payload: { token: data.token },
                    };
                    window.ReactNativeWebView.postMessage(JSON.stringify(payload));
                    // 뒤로 못 돌아가게 해라.
                    tellClearHistory();
                    login();
                    // 홈으로 보낸다.
                    navigate("/");
                }
            })
            .catch((error) => {
                console.error("데이터를 받아오는 중 오류가 발생했습니다:", error);
            });
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
