import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../../../../components/onboarding/button";
import styled from "styled-components";
import BasicProfile from "../../../../images/icons/basic-profile-img.png";
import PlusImg from "../../../../images/icons/plus-button.png";
import { tellClearHistory } from "../../../../utils/eeho-api/bridge-handler";

const Contanier = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 64px;
`;
const Profile = styled.div`
    position: relative;
    margin-bottom: 48px;
`;
const ProfileImage = styled.img`
    width: 155px;
    height: 155px;
    border-radius: 50%;
    border: 9px solid #95b485;
`;
const PlusButton = styled.img`
    width: 46px;
    height: 46px;
    border-radius: 50%;
    bottom: 0;
    right: 0;
    position: absolute;
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
        state: { familyName },
    } = useLocation();
    const [nickName, setNickName] = useState("");
    const [role, setRole] = useState("아빠");

    const onClickButton = async () => {
        const data = {
            familyName,
            userName: nickName,
            role,
            pushToken: localStorage.getItem("expo_push_token") || "",
        };
        fetch(process.env.REACT_APP_SERVER_URI + "/family/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.ok) {
                    tellClearHistory();
                    navigate("/sign-up/create/result", {
                        state: {
                            id: data.id,
                            familyCode: data.code,
                            token: data.token,
                        },
                    });
                }
            })
            .catch((error) => {
                console.error("데이터를 받아오는 중 오류가 발생했습니다:", error);
            });
    };

    return (
        <Contanier>
            <Profile>
                <ProfileImage src={BasicProfile} />
                <PlusButton src={PlusImg} />
            </Profile>
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
            <Button text="다 음" onClick={onClickButton} />
        </Contanier>
    );
};

export default SetProfile;
