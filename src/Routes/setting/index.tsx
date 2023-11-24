import styled from "styled-components";
import BottomTab from "../../components/bottom-tab";
import Eeho from "../../images/icons/eeho_green.png";
import Profile from "./profile";
import { useState } from "react";
import { Zoom, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { tellClearHistory } from "../../utils/eeho-api/bridge-handler";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 33px;
`;
const Header = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 24px;
`;
const Logo = styled.img`
    width: 77px;
    height: 50px;
`;
const Partition = styled.div`
    height: 1px;
    background-color: #bfd4b8;
    width: 100%;
    margin-top: 30px;
    margin-bottom: 50px;
`;
const Menu = styled.div`
    width: 100%;
    margin-left: 36px;
`;
const Tab = styled.div`
    color: #462d2d;
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 47px;
`;

const Backdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* 어두운 배경 색상 및 투명도 조절 */
    z-index: 1; /* 모달 위로 배치 */
`;
const ModalContainer = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    width: 300px;
    height: 208px;
    transform: translate(-50%, -50%);
    background-color: #cad5c3;
    padding: 20px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    z-index: 2;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 24px;
    color: rgba(0, 0, 0, 0.7);
    text-align: center;

    font-size: 15px;
    font-weight: 600;
`;

const ModalContent = styled.div``;

const ModalButtonCon = styled.div`
    display: flex;
    margin-top: 20px;
`;
const ModalButton = styled.button`
    margin-right: 10px;
    height: 38px;
    background-color: #627d50;
    border-radius: 7px;
    padding: 0 12px;
    color: black;
`;
const NoButton = styled(ModalButton)`
    background-color: gray;
`;

const Setting = () => {
    const navigate = useNavigate();
    const [openModal, setOpenModal] = useState(false);
    const openSignOutModal = () => {
        setOpenModal(true);
    };

    const closeSignOutModal = () => {
        setOpenModal(false);
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const stopPropagation = (e: any) => {
        e.stopPropagation();
    };

    const reqDeleteAccount = () => {
        fetch(process.env.REACT_APP_SERVER_URI + "/member/account/delete", {
            headers: {
                token: localStorage.getItem("jwt") as string,
            },
        })
            .then((r) => r.json())
            .then((data) => {
                if (data.ok) {
                    tellClearHistory();
                    localStorage.removeItem("jwt");
                    toast("계정이 성공적으로 삭제 되었습니다.", {
                        position: "bottom-center",
                        transition: Zoom,
                        className: "otl_tostify",
                        autoClose: 1000,
                        hideProgressBar: true,
                    });
                    navigate("/onboarding");
                }
            });
    };
    return (
        <Container>
            <Header>
                <Logo src={Eeho} />
            </Header>
            <Profile />
            <Partition />
            <Menu>
                <Tab onClick={() => navigate("./copy_link")}>초대링크</Tab>
                <Tab onClick={() => navigate("/service-content")}>서비스 이용 약관</Tab>
                <Tab onClick={() => navigate("/privacy")}>개인정보 처리방침</Tab>
                <Tab onClick={() => openSignOutModal()}>회원 탈퇴</Tab>
            </Menu>
            {/* <Members /> */}
            <BottomTab />
            {openModal && (
                <>
                    <Backdrop onClick={closeSignOutModal} />
                    <ModalContainer onClick={(e) => stopPropagation(e)}>
                        <ModalContent>
                            정말로 탈퇴하시겠습니까?
                            <br /> 가족들과 추억이 사라집니다!
                        </ModalContent>
                        <ModalButtonCon>
                            <ModalButton onClick={() => reqDeleteAccount()}>삭제</ModalButton>
                            <NoButton onClick={closeSignOutModal}>아니오</NoButton>
                        </ModalButtonCon>
                    </ModalContainer>
                </>
            )}
        </Container>
    );
};
export default Setting;
