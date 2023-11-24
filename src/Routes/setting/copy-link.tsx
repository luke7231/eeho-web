import styled from "styled-components";
import EehoLogo from "../../images/icons/EEHO.png";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Zoom, toast } from "react-toastify";
import { useEffect, useState } from "react";
import BottomTab from "../../components/bottom-tab";
import BackButton from "../../components/onboarding/back-button";

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
    margin-bottom: 20px;
`;
const CopyTextBox = styled.div`
    background-color: #bcd6ab;
    border: 0;
    width: 100%;
    text-align: center;
    font-size: 24px;
    margin-bottom: 48px;
    border-radius: 10px;
    padding: 12px 0;
`;
// const Margin = styled.div`
//     margin-bottom: 40px;
// `;
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
const CopyLink = () => {
    const [code, setCode] = useState("");

    useEffect(() => {
        fetch(process.env.REACT_APP_SERVER_URI + "/main/get/token", {
            headers: {
                token: localStorage.getItem("jwt") as string,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.ok) {
                    setCode(data.data);
                }
            });
    });

    const copyText = `${code}`;

    return (
        <Contanier>
            <BackButton />
            <Logo src={EehoLogo} />
            <Title>가족 초대 링크</Title>
            <Text>
                함께 에호하고싶은
                <br /> 가족 구성원에게 공유해보세요.
            </Text>
            <CopyTextBox>코드: {code}</CopyTextBox>
            <CopyToClipboard
                text={copyText}
                onCopy={() =>
                    toast("복사가 완료되었습니다!", {
                        position: "bottom-center",
                        transition: Zoom,
                        className: "otl_tostify",
                        autoClose: 1000,
                        hideProgressBar: true,
                    })
                }
            >
                <CheckButton>복사</CheckButton>
            </CopyToClipboard>

            <BottomTab />
        </Contanier>
    );
};

export default CopyLink;
