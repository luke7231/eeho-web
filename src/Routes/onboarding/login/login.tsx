import { useState } from "react";
import styled from "styled-components";
import FlashLoading from "../../../components/common/flash-loading";
import Button from "../../../components/onboarding/button";
import BackButton from "../../../components/onboarding/back-button";
import { tellClearHistory } from "../../../utils/eeho-api/bridge-handler";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../contexts/auth-provider";
import { Zoom, toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { schema } from "../../../utils/login/login-resolver";
import { yupResolver } from "@hookform/resolvers/yup";
const Contanier = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 64px;
`;
const InputContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    // justify-content: flex-start;
    // align-items: flex-start;
`;
const Text = styled.div`
    display: flex;
    height: 28px;
    margin: 0 0 0 4px;
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
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors }, // 버전 6라면 errors라고 작성함.
    } = useForm({
        resolver: yupResolver(schema),
        mode: "onChange",
    });
    const onSubmit = ({ id, password, phoneNumber }: { id: string; password: string; phoneNumber: string }) => {
        console.log(id, password, phoneNumber);
    };
    const onClickButton = () => {
        setLoading(true);
        const data = {
            // userName: nickName,
            // code: familyCode,
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
                    // window.ReactNativeWebView.postMessage(JSON.stringify(payload));
                    // 뒤로 못 돌아가게 해라.
                    // tellClearHistory();
                    login();
                    // 홈으로 보낸다.
                    navigate("/");
                } else {
                    setLoading(false);
                    toast("저장된 정보와 일치하지 않습니다.", {
                        position: "bottom-center",
                        transition: Zoom,
                        className: "otl_tostify_error",
                        autoClose: 1000,
                        hideProgressBar: true,
                    });
                }
            })
            .catch((error) => {
                console.error("데이터를 받아오는 중 오류가 발생했습니다:", error);
            });
    };
    // function checkId(id: string) {

    // }
    // function sendAuth(phoneNumber: string) {

    // }
    // function checkAuth(authNumber: string) {

    // }
    return (
        <Contanier>
            <BackButton />
            <form onSubmit={handleSubmit(onSubmit)}>
                <InputContainer>
                    <Text>아이디</Text>
                    <Input {...register("id")} type="text" name="id" />
                    <Text>비밀번호</Text>
                    <Input {...register("password")} type="password" name="password" />
                    <Text>비밀번호 확인</Text>
                    <Input {...register("confirmPassword")} type="password" name="confirmPassword" />
                    <Text>휴대폰 번호</Text>
                    <Input {...register("phoneNumber")} type="number" name="phoneNumber" />
                    <Text>인증 번호</Text>
                    <Input {...register("verificationCode")} type="number" name="verificationCode" />
                </InputContainer>
                <button type="submit">submit</button>
            </form>
            {loading && <FlashLoading style={{ position: "fixed", bottom: 0 }} />}
            {/* {nickName.trim() === "" || familyCode.trim() == "" ? (
                <Button text="입력을 완료해주세요!" />
            ) : (
                <Button
                    text="로그인"
                    onClick={() => {
                        if (!loading) onClickButton();
                    }}
                />
            )} */}
        </Contanier>
    );
};
export default Login;
