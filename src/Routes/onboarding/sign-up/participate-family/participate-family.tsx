import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../../components/onboarding/button";
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
    margin-bottom: 48px;
    border-radius: 10px;
`;
const CheckButton = styled.button`
    width: 95px;
    height: 44px;
    background-color: #627d50;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 20px;
    border-radius: 10px;
`;
const NoticebBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 327px;
    height: 240px;
    flex-shrink: 0;
    border-radius: 17px;
    border: 3px solid #a2c9a1;
    background: #fafff1;
`;
const ParticipateFamily = () => {
    const navigate = useNavigate();
    const [familyCode, setFamilyCode] = useState("");
    const [isAuthed, setIsAuthed] = useState(false);
    const [openModal, setOpenModal] = useState(false);
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
        fetch(process.env.REACT_APP_SERVER_URI + "/family/code/isExisted", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.ok) {
                    setIsAuthed(true);
                    setOpenModal(true);
                }
            })
            .catch((e) => console.log(e));
    };

    return (
        <Contanier>
            <Logo src={EehoLogo} />
            <Title>가족 초대 코드 입력</Title>

            {openModal ? (
                <NoticebBox>
                    <Title>인증되었습니다.</Title>
                    <CheckButton onClick={() => setOpenModal(false)}>닫기</CheckButton>
                </NoticebBox>
            ) : (
                <>
                    <Text>공유받은 가족 코드를 입력해주세요~</Text>
                    <CodeInput value={familyCode} onChange={(v) => setFamilyCode(v.target.value)} />
                    <CheckButton onClick={onClickCheck}>확인</CheckButton>
                </>
            )}
            {isAuthed ? <Button text="다 음" onClick={onClickButton} /> : <Button text="코드를 먼저 입력해주세요!" />}
        </Contanier>
    );
};

export default ParticipateFamily;
