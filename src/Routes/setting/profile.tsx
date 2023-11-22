import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
`;
const ProfileWrapper = styled.div`
    display: flex;
    align-items: center;
`;
const ProfileImg = styled.img`
    border: 1px solid #000;
    width: 72px;
    height: 72px;
    border-radius: 50%;
`;
const Name = styled.div`
    margin-top: 7px;
    color: #462d2d;
    font-size: 14px;
    font-weight: 800;
    margin-left: 12px;
`;
const ModifyButton = styled.div`
    width: 80px;
    height: 25px;
    background-color: #d0e5c9;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
`;
const ButtonText = styled.div`
    color: #515151;
    font-size: 12px;
    font-weight: 400;
    border-radius: 16px;
`;
const Profile = () => {
    const navigate = useNavigate();
    const [userName, setUserName] = useState("");
    const [img, setImg] = useState("");

    useEffect(() => {
        fetch(process.env.REACT_APP_SERVER_URI + "/member/profile", {
            headers: {
                token: localStorage.getItem("jwt") as string,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.ok) {
                    setUserName(data.data.userName);
                    setImg(data.data.profileImg);
                }
            });
    }, []);
    return (
        <Container>
            <ProfileWrapper>
                <ProfileImg src={img} />
                <Name>{userName}</Name>
            </ProfileWrapper>
            <ModifyButton>
                <ButtonText onClick={() => navigate("update_profile")}>프로필 관리</ButtonText>
            </ModifyButton>
        </Container>
    );
};

export default Profile;
