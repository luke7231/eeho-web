import { useEffect, useState } from "react";
import { FamilyMember } from "../../components/home/family-list";
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
const NoContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 60px;
    line-height: 22px;
    font-size: 16px;
    font-weight: 600;
    text-align: center;
`;
const Members = () => {
    const [selectedMembers, setSelectedMembers] = useState<FamilyMember[]>([]);
    const [family, setFamily] = useState<FamilyMember[]>([]);
    const [isNoContent, setIsNoContent] = useState(false);
    useEffect(() => {
        const token = localStorage.getItem("jwt") as string;
        fetch(process.env.REACT_APP_SERVER_URI + "/main/members?exceptMe=true", {
            headers: {
                "Content-Type": "application/json",
                token: token,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.members?.length === 0) {
                    setIsNoContent(true);
                } else {
                    setFamily(data.members);
                }
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

    const onClickButton = () => {
        const payload = {
            type: "camera_open",
            payload: { token: localStorage.getItem("jwt"), userIds: selectedMembers.map((member) => member.userId) },
        };
        window.ReactNativeWebView.postMessage(JSON.stringify(payload));
    };
    return (
        <>
            {isNoContent && (
                <NoContent>
                    이 곳은 사진을 보낼
                    <br /> 가족을 선택하는 페이지 입니다. <br /> 가족을 초대하여 사진을 공유해봐요!
                </NoContent>
            )}
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
            {selectedMembers.length !== 0 ? (
                <ButtonCon>
                    <Btn onClick={() => onClickButton()}>사진 보내기</Btn>
                </ButtonCon>
            ) : (
                <ButtonCon>
                    <Btn>가족을 선택해주세요!</Btn>
                </ButtonCon>
            )}
        </>
    );
};

export default Members;
