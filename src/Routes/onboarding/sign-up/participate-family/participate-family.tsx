import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../../components/onboarding/button";

const ParticipateFamily = () => {
    const navigate = useNavigate();
    const [familyCode, setFamilyCode] = useState("");
    const [canGoNext, setCanGoNext] = useState(false);
    const onClickButton = () => {
        navigate("/sign-up/participate/set-profile", {
            state: {
                familyCode,
            },
        });
    };
    const onClickCheck = () => {
        const data = {
            code: familyCode,
        };
        fetch("http://172.16.230.168:8080/family/code/isExisted", {
            method: "POST",
            headers: {
                "Content-Type": "application/json", // 만약 JSON 형태로 데이터를 보내는 경우
                // 다른 필요한 헤더가 있다면 추가해주세요
            },
            body: JSON.stringify(data), // 데이터를 JSON 문자열로 변환하여 body에 넣기
        })
            .then((response) => response.json()) // 응답을 JSON으로 파싱
            .then((data) => {
                console.log("성공적으로 데이터를 받아왔습니다:", data);
                if (data.ok) {
                    setCanGoNext(true);
                }
            })
            .catch((error) => {
                console.error("데이터를 받아오는 중 오류가 발생했습니다:", error);
            });
    };
    return (
        <div>
            <div>공유받은 가족 코드를 입력해주세요~</div>
            <input value={familyCode} onChange={(v) => setFamilyCode(v.target.value)} />
            <button onClick={onClickCheck} style={{ backgroundColor: "gray" }}>
                확인
            </button>
            {canGoNext ? <Button text="다 음" onClick={onClickButton} /> : <Button text="코드를 먼저 입력해주세요!" />}
        </div>
    );
};

export default ParticipateFamily;
