import { useState } from "react";
import styled from "styled-components";
import FlashLoading from "../../components/common/flash-loading";
import Button from "../../components/onboarding/button";
import Title from "../../components/onboarding/title";

const Contanier = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 32px;
`;
const InputContainer = styled.div``;
const Text = styled.div`
    display: flex;
    margin: 40px 0 10px 0;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`;
const Select = styled.select`
    background-color: #bcd6ab;
    height: 36px;
    border: 0;
    width: 100%;
    padding: 0 10px;
    font-size: 20px;
    color: #000;
    max-width: 320px;
    margin-top: 48px;
    margin-bottom: 120px;
    border-radius: 10px;
`;

const Report = () => {
    const [loading, setLoading] = useState(false);
    const [topic, setTopic] = useState("스팸 콘텐츠");

    const onClickButton = () => {
        setLoading(true);
        console.log(topic);
        // token 넣고 신고 디비 쌓기.
    };
    return (
        <Contanier>
            <InputContainer>
                <Title>
                    신고하는 이유를 <br />
                    선택해 주세요.
                </Title>
                <Text>
                    feople(에호 팀)팀 및 개발자는 신고해주시는 내용을 기반으로 신고 접수된 가족의 모든 콘텐츠를 점검한
                    후 서비스 이용 가이드의 위반 여부를 판단하여 적절한 조치를 취하도록 하겠습니다.{" "}
                </Text>

                <Select name="languages" id="lang" onChange={(v) => setTopic(v.target.value)}>
                    <option value="스팸 콘텐츠">스팸 콘텐츠</option>
                    <option value="도배 콘텐츠">도배 콘텐츠</option>
                    <option value="사기 또는 거짓">사기 또는 거짓</option>
                    <option value="폭력적 콘텐츠">폭력적 콘텐츠</option>
                    <option value="증오 또는 악의적 콘텐츠">증오 또는 악의적 콘텐츠</option>
                    <option value="위험을 조장하는 콘텐츠">위험을 조장하는 콘텐츠</option>
                    <option value="저작권 침해">저작권 침해</option>
                    <option value="성적 콘텐츠">성적 콘텐츠</option>
                </Select>
            </InputContainer>
            {loading && <FlashLoading style={{ position: "fixed", bottom: 0 }} />}

            <Button
                text="신고 접수하기"
                onClick={() => {
                    if (!loading) onClickButton();
                }}
            />
        </Contanier>
    );
};

export default Report;
