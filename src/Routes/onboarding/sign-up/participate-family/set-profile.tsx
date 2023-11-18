import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../../../../components/onboarding/button";

const SetProfile = () => {
    const navigate = useNavigate();
    const {
        state: { familyCode },
    } = useLocation();
    const [nickName, setNickName] = useState("");
    const [role, setRole] = useState("아빠");
    const onClickButton = async () => {
        // navigate("/sign-up/participate/result");
        console.log(familyCode + "\n" + nickName + "\n" + role);
        const data = {
            code: familyCode,
            userName: nickName,
            familyRole: role,
        };
        fetch("http://172.16.230.168:8080/family/participate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json", // 만약 JSON 형태로 데이터를 보내는 경우
                // 다른 필요한 헤더가 있다면 추가해주세요
            },
            body: JSON.stringify(data), // 데이터를 JSON 문자열로 변환하여 body에 넣기
        })
            .then((response) => response.json()) // 응답을 JSON으로 파싱
            .then((data) => {
                console.log("성공적으로 데이터를 받아왔습니다:", data); // familyname, token, 알림메시지
                if (data.ok) {
                    navigate("/sign-up/participate/result", {
                        state: {
                            familyName: data.familyName,
                        },
                    });
                }
            })
            .catch((error) => {
                console.error("데이터를 받아오는 중 오류가 발생했습니다:", error);
            });
    };

    return (
        <div>
            <div></div>
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
        </div>
    );
};

export default SetProfile;
