import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../../../../components/onboarding/button";
import styled from "styled-components";
import BasicProfile from "../../../../images/icons/basic-profile-img.png";
import PlusImg from "../../../../images/icons/plus-button.png";
const Contanier = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 48px;
`;
const Profile = styled.div`
    position: relative;
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
const SetProfile = () => {
    const navigate = useNavigate();
    const {
        state: { familyCode },
    } = useLocation();
    // const familyCode = "84675f1c";
    // const familyCode = "81436bdb";
    const [nickName, setNickName] = useState("");
    const [role, setRole] = useState("아빠");
    const onClickButton = async () => {
        const data = {
            code: familyCode,
            userName: nickName,
            familyRole: role,
            // token 추가해줘야함.
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
                // familyname, token, 알림메시지
                if (data.ok) {
                    navigate("/sign-up/participate/result", {
                        state: {
                            familyName: data.familyName,
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
            <input value={nickName} onChange={(v) => setNickName(v.target.value)} />
            <select name="languages" id="lang" onChange={(v) => setRole(v.target.value)}>
                <option value="아빠">아빠</option>
                <option value="엄마">엄마</option>
                <option value="아들">아들</option>
                <option value="둘째 아들">둘째 아들</option>
                <option value="딸">딸</option>
                <option value="둘째 딸">둘째 딸</option>
            </select>
            <Button text="다 음" onClick={onClickButton} />
        </Contanier>
    );
};

export default SetProfile;
