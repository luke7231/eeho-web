import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../../../../components/onboarding/button";
import styled from "styled-components";
import { tellClearHistory } from "../../../../utils/eeho-api/bridge-handler";
import FlashLoading from "../../../../components/common/flash-loading";
import { Zoom, toast } from "react-toastify";
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
const Select = styled.select`
    background-color: #bcd6ab;
    height: 36px;
    border: 0;
    width: 100%;
    // text-align: center;
    padding: 0 10px;
    font-size: 20px;
    color: #000;
    max-width: 320px;
    margin-bottom: 48px;
    border-radius: 10px;
`;

const SetProfile = () => {
    const navigate = useNavigate();
    const {
        state: { familyCode },
    } = useLocation();
    const [nickName, setNickName] = useState("");
    const [role, setRole] = useState("아빠");
    const [loading, setLoading] = useState(false);

    const onClickButton = async () => {
        setLoading(true);
        const data = {
            code: familyCode,
            userName: nickName,
            role,
            pushToken: localStorage.getItem("expo_push_token") || "",
        };
        fetch(process.env.REACT_APP_SERVER_URI + "/family/participate", {
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
                    tellClearHistory();
                    navigate("/sign-up/participate/result", {
                        state: {
                            // img 받아야함.
                            id: data.id,
                            profileImg: data.profileImg,
                            familyName: data.familyName,
                            userName: nickName,
                            token: data.token,
                        },
                    });
                } else {
                    setLoading(false);
                    if (data.message === "duplicate") {
                        toast("가족 내에 동일한 이름이 존재합니다.", {
                            position: "bottom-center",
                            transition: Zoom,
                            className: "otl_tostify_error",
                            autoClose: 1000,
                            hideProgressBar: true,
                        });
                    }
                }
            })
            .catch((error) => {
                console.error("데이터를 받아오는 중 오류가 발생했습니다:", error);
            });
    };

    return (
        <Contanier>
            <InputContainer>
                <Text>닉네임</Text>
                <Input value={nickName} onChange={(v) => setNickName(v.target.value)} />

                <Text>역할</Text>
                <Select name="languages" id="lang" onChange={(v) => setRole(v.target.value)}>
                    <option value="아빠">아빠</option>
                    <option value="엄마">엄마</option>
                    <option value="첫째 아들">첫째 아들</option>
                    <option value="둘째 아들">둘째 아들</option>
                    <option value="셋째 아들">셋째 아들</option>
                    <option value="첫째 딸">첫째 딸</option>
                    <option value="둘째 딸">둘째 딸</option>
                    <option value="셋째 딸">셋째 딸</option>
                </Select>
            </InputContainer>
            {loading && <FlashLoading style={{ position: "fixed", bottom: 0 }} />}
            {nickName.trim() !== "" ? (
                <Button
                    text="다 음"
                    onClick={() => {
                        if (!loading) onClickButton();
                    }}
                />
            ) : (
                <Button text="닉네임을 입력해주세요!" />
            )}
        </Contanier>
    );
};

export default SetProfile;
