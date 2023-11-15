import React from "react";
import { useAuth } from "../../contexts/auth-provider";
import styled from "styled-components";
import Eeho from "../../components/logo/eeho";
import { useNavigate } from "react-router-dom";
const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 49px;
    padding: 0 48px;
`;
const Text = styled.div`
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    margin-bottom: 49px;
`;
const KakaoLoginButton = styled.div`
    width: 100%;
    height: 48px;
    background-color: #fae100;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 24px;
    font-size: 13px;
`;

const Onboarding = () => {
    const { login } = useAuth();
    const navigate = useNavigate();
    const onClick = () => {
        login();
        navigate("agree");
    };
    return (
        <Container>
            <Eeho color="green" width={129} height={83} style={{ marginBottom: 49 }} />
            <Text>간편하게 로그인하고 에호해보세요.</Text>
            <KakaoLoginButton onClick={onClick}>KAKAO LOGIN</KakaoLoginButton>
        </Container>
    );
};
export default Onboarding;
