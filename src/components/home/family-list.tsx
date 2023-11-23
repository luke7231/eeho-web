import { useEffect, useState } from "react";
import styled from "styled-components";
import { fetchReqEeho } from "../../utils/eeho-api/eeho-req";
import PlusImg from "../../images/icons/plus-button.png";
import EehoButtonImg from "../../images/icons/EEHO_BUTTOn.png";
import { Zoom, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
export interface FamilyMember {
    userName: string;
    userId: string;
    role: string;
    profileImg: string;
    pushToken?: string;
}
interface Sender {
    familyId: string;
    isCompleted: boolean;
    senderId: string;
}
const Container = styled.div`
    display: flex;
    gap: 20px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 100%;
`;
const FamilyName = styled.div`
    display: flex;
    margin-top: 10px;
    padding: 10px 20px;
    border-radius: 5px;

    align-items: center;
    max-width: 208px;
    justify-content: center;
    background-color: #bfd4b8;
    height: 33px;
    color: #1c3411;

    font-size: 16px;
    font-weight: 800;
`;
const FamilyMembers = styled.div`
    margin-top: 36px;
    display: grid;
    // grid-template-columns: repeat(3, 1fr);
    // grid-gap: 20px;
    // align-items: center;
    grid-template-columns: repeat(3, minmax(72px, 1fr));
    grid-gap: 20px;
    grid-auto-flow: dense;
    align-items: center;
    justify-content: center;
`;
const Member = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
const PlusButton = styled.img`
    width: 36px;
    height: 36px;
    border-radius: 50%;
`;
const ProfileImg = styled.img<{ isSelected: boolean; isReceived: boolean }>`
    border: 1px solid #000;
    border: ${({ isSelected }) => (isSelected ? "4px solid #5A7439" : "")};
    border: ${({ isReceived }) => (isReceived ? "4px solid #FFD260" : "")};
    width: 72px;
    height: 72px;
    border-radius: 50%;
`;
const Name = styled.div`
    margin-top: 7px;
    color: #462d2d;
    font-size: 14px;

    font-weight: 800;
`;
const EehoButtonContainer = styled.div`
    margin-top: 71px;
`;
const EehoButton = styled.img`
    margin-top: 48px;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    border: 4px solid #5a7439;
`;
const FamilyList = () => {
    const navigate = useNavigate();
    const [selectedMembers, setSelectedMembers] = useState<FamilyMember[]>([]);
    const [commonUserIds, setCommonUserIds] = useState<string[]>([]);
    const [family, setFamily] = useState<FamilyMember[]>([]);

    //fetch
    useEffect(() => {
        const token = localStorage.getItem("jwt") as string;
        fetch(process.env.REACT_APP_SERVER_URI + "/main/members", {
            headers: {
                "Content-Type": "application/json", // 만약 JSON 형태로 데이터를 보내는 경우
                token: token,
                // 다른 필요한 헤더가 있다면 추가해주세요
            },
        })
            .then((response) => response.json()) // 응답을 JSON으로 파싱
            .then((data) => {
                setFamily(data.data);
                console.log(data);
            });

        fetch(process.env.REACT_APP_SERVER_URI + "/main/isCompleted", {
            headers: {
                "Content-Type": "application/json", // 만약 JSON 형태로 데이터를 보내는 경우
                token,
                // 다른 필요한 헤더가 있다면 추가해주세요
            },
            cache: "reload",
        })
            .then((response) => response.json()) // 응답을 JSON으로 파싱
            .then((data) => {
                console.log(data, "노란원");
                const commonIds = data.data
                    .map((aItem: Sender) => aItem.senderId)
                    .filter((senderId: string) => family.filter((bItem) => bItem.userId === senderId));
                setCommonUserIds(commonIds);
            })
            .catch((e) => console.log(e));
    }, []);

    const onClickReceivedEeho = (userIds: string[]) => {
        const payload = {
            type: "camera_open",
            payload: { token: localStorage.getItem("jwt"), userIds },
        };
        window.ReactNativeWebView.postMessage(JSON.stringify(payload));
    };

    const handleMemberClick = (member: FamilyMember) => {
        const isMemberSelected = selectedMembers.includes(member);
        const isReceived = commonUserIds.includes(member.userId);
        const myId = localStorage.getItem("id");
        if (myId == member.userId) {
            navigate("/setting");
        }
        if (isReceived) {
            onClickReceivedEeho([member.userId]);
        } else {
            setSelectedMembers((prevSelectedMembers) =>
                isMemberSelected
                    ? prevSelectedMembers.filter((selectedMember) => selectedMember !== member)
                    : [...prevSelectedMembers, member],
            );
        }
    };

    const onClickSendEeho = async () => {
        if (selectedMembers.length === 0) {
            toast("에호를 보낼 가족을 선택해주세요!", {
                position: "bottom-center",
                transition: Zoom,
                className: "otl_tostify_error",
                autoClose: 1000,
                hideProgressBar: true,
            });
        } else {
            const usernames = selectedMembers.map((m) => m.userId);
            const token = localStorage.getItem("jwt");
            if (token) {
                const res = await fetchReqEeho(usernames, token);
                console.log(res);
            }
            toast("에호가 전송되었습니다!", {
                position: "bottom-center",
                transition: Zoom,
                className: "otl_tostify",
                autoClose: 1000,
                hideProgressBar: true,
            });
            setSelectedMembers([]);
        }
    };

    const renderFamilyMember = (member: FamilyMember) => {
        return (
            <Member key={member.userId} onClick={() => handleMemberClick(member)}>
                <ProfileImg
                    src={member.profileImg}
                    isSelected={selectedMembers.includes(member)}
                    isReceived={commonUserIds.includes(member.userId)}
                />
                <Name>{member.userName}</Name>
            </Member>
        );
    };

    const renderEmptyMember = (index: number) => (
        <Member key={index}>
            <div style={{ width: "72px", height: "92px" }}></div>
        </Member>
    );

    if (!family) return null;

    return (
        <Container>
            <FamilyName>가족이름</FamilyName>
            <FamilyMembers>
                {family.map((member) => renderFamilyMember(member))}
                {Array.from({ length: Math.max(5 - family?.length, 0) }).map((_, index) => renderEmptyMember(index))}
                <Member>
                    {family.length < 5 ? (
                        <PlusButton src={PlusImg} onClick={() => navigate("/setting/copy_link")} />
                    ) : null}
                </Member>
            </FamilyMembers>

            <EehoButtonContainer onClick={onClickSendEeho}>
                <EehoButton src={EehoButtonImg} />
            </EehoButtonContainer>
        </Container>
    );
};
export default FamilyList;
