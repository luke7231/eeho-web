import { useEffect, useState } from "react";
import { FamilyMember } from "../../components/home/family-list";
import basicImgUrl from "../../images/icons/basic-profile-img.png";
import styled from "styled-components";

const List = styled.div`
    width: 100%;
    padding: 0 24px;
    margin-bottom: 160px;
`;
const Mem = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 34px;
`;
const Name = styled.div`
    color: #462d2d;
    font-size: 20px;
    font-weight: 600;
`;
const CheckBox = styled.div<{ isSelected: boolean }>`
    width: 21px;
    height: 21px;
    border-radius: 50%;
    background-color: ${({ isSelected }) => (isSelected ? "#81a270" : "")};
    border: ${({ isSelected }) => (!isSelected ? "4px solid rgba(116, 152, 99, 0.7)" : "")};
`;

const ButtonCon = styled.div`
    position: fixed;
    bottom: 0;
    padding: 0 34px;
    width: 100%;
    margin-bottom: 72px;
`;
const Btn = styled.div`
    width: 100%;
    height: 45px;
    background-color: #89aa78;
    border-radius: 11px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 24px;
    font-weight: 600;
    text-align: center;
`;

const gaFamily = [
    {
        userName: "엄마",
        userId: "123",
        role: "엄마",
        profileImg: basicImgUrl,
        pushToken: "ExponentPushToken[czMRa_ITtkRtBgpixu8ByL]",
    },
    {
        userName: "아빠",
        userId: "1234",
        role: "아빠",
        profileImg: basicImgUrl,
        pushToken: "ExponentPushToken[czMRa_ITtkRtBgpixu8ByL]",
    },
    {
        userName: "딸",
        userId: "123",
        role: "딸",
        profileImg: basicImgUrl,
        pushToken: "ExponentPushToken[czMRa_ITtkRtBgpixu8ByL]",
    },
    {
        userName: "아들",
        userId: "123",
        role: "아들",
        profileImg: basicImgUrl,
        pushToken: "ExponentPushToken[czMRa_ITtkRtBgpixu8ByL]",
    },
];
const Members = () => {
    const [selectedMembers, setSelectedMembers] = useState<FamilyMember[]>([]);
    const [family, setFamily] = useState<FamilyMember[]>(gaFamily);

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
                // setFamily(data.data);
                console.log(data);
            });
    }, []);

    const handleMemberClick = (member: FamilyMember) => {
        const isMemberSelected = selectedMembers.includes(member);

        setSelectedMembers((prevSelectedMembers) =>
            isMemberSelected
                ? prevSelectedMembers.filter((selectedMember) => selectedMember !== member)
                : [...prevSelectedMembers, member],
        );
    };
    return (
        <>
            <List>
                {family?.map((member) => {
                    return (
                        <Mem onClick={() => handleMemberClick(member)}>
                            <Name>{member.userName}</Name>
                            <CheckBox isSelected={selectedMembers.includes(member)} />
                        </Mem>
                    );
                })}
            </List>
            <ButtonCon>
                <Btn onClick={() => console.log(selectedMembers)}>사진 보내기</Btn>
            </ButtonCon>
        </>
    );
};

export default Members;