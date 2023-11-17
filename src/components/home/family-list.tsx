import { useState } from "react";
import styled from "styled-components";

interface FamilyMember {
    name: string;
    id: number;
}

const family: FamilyMember[] = [
    {
        id: 1,
        name: "홍갑철",
    },
    {
        id: 2,
        name: "김복자",
    },
    {
        id: 3,
        name: "홍길동",
    },
    {
        id: 4,
        name: "홍세현",
    },
];
const Container = styled.div`
    display: flex;
    gap: 20px;
`;
const Circle = styled.div<{ isSelected: boolean }>`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: ${({ isSelected }) => (isSelected ? "orange" : "skyBlue")};
`;
const FamilyList = () => {
    const [selectedMembers, setSelectedMembers] = useState<FamilyMember[]>([]);

    const handleMemberClick = (member: FamilyMember) => {
        // Check if the member is already selected
        const isMemberSelected = selectedMembers.includes(member);

        // Update the selectedMembers array based on the current state
        setSelectedMembers((prevSelectedMembers) =>
            isMemberSelected
                ? prevSelectedMembers.filter((selectedMember) => selectedMember !== member)
                : [...prevSelectedMembers, member],
        );
    };
    const onClickEeho = () => {
        window.ReactNativeWebView.postMessage("camera");
    };
    return (
        <Container>
            {family.map((member) => (
                <div key={member.id} onClick={() => handleMemberClick(member)}>
                    <Circle isSelected={selectedMembers.includes(member)} />
                    <div>{member.name}</div>
                </div>
            ))}
            <button onClick={onClickEeho}>EEHO</button>
        </Container>
    );
};
export default FamilyList;
