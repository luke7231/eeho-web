import { useEffect, useState } from "react";
import styled from "styled-components";
import { fetchReqEeho } from "../../utils/eeho-api/eeho-req";

interface FamilyMember {
    userName: string;
    userId: string;
    role: string;
    profileImage: string;
    pushToken?: string;
}

const Container = styled.div`
    display: flex;
    gap: 20px;
    flex-direction: column;
    justify-content: center;
`;
const Circle = styled.div<{ isSelected: boolean }>`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: ${({ isSelected }) => (isSelected ? "orange" : "skyBlue")};
`;
const FamilyList = () => {
    const [selectedMembers, setSelectedMembers] = useState<FamilyMember[]>([]);
    const [family, setFamily] = useState<FamilyMember[]>([]);
    const handleMemberClick = (member: FamilyMember) => {
        const isMemberSelected = selectedMembers.includes(member);

        setSelectedMembers((prevSelectedMembers) =>
            isMemberSelected
                ? prevSelectedMembers.filter((selectedMember) => selectedMember !== member)
                : [...prevSelectedMembers, member],
        );
    };
    const onClickEeho = () => {
        const payload = {
            type: "camera_open",
            payload: { token: localStorage.getItem("jwt"), userIds: selectedMembers.map((m) => m.userId) },
        };
        window.ReactNativeWebView.postMessage(JSON.stringify(payload));
    };
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
        })
            .then((response) => response.json()) // 응답을 JSON으로 파싱
            .then((data) => {
                console.log(data, "노란원");
            })
            .catch((e) => console.log(e));
    }, []);
    if (!family) return null;
    // const onClickEeho = async () => {
    //     const usernames = selectedMembers.map((m) => m.userId);
    //     const token = localStorage.getItem("jwt");
    //     if (token) {
    //         const res = await fetchReqEeho(usernames, token);
    //         console.log(res);
    //     }
    // };

    return (
        <Container>
            {family.map((member) => (
                <div key={member.userId} onClick={() => handleMemberClick(member)}>
                    <Circle isSelected={selectedMembers.includes(member)} />
                    <div>{member.userName}</div>
                </div>
            ))}
            <button style={{ width: 100, height: 100, backgroundColor: "gray" }} onClick={onClickEeho}>
                EEHOasdasd
            </button>
        </Container>
    );
};
export default FamilyList;
