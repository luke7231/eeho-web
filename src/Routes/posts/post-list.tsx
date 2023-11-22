import { useEffect, useState } from "react";
import styled from "styled-components";

interface Post {
    userId: string;
    userName: string;
    profileImg: string;
    photo: string[];
}

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    margin-top: 16px;
    margin-bottom: 64px;
`;
const Posts = styled.div`
    padding-left: 24px;
    margin-bottom: 24px;
`;
const MemberInfo = styled.div`
    display: flex;
    align-items: center;
    margin-left: 8px;
    margin-bottom: 20px;
`;
const ProfileImg = styled.img`
    width: 52px;
    height: 52px;
    border-radius: 50%;
    border: 1px solid #000;
`;
const Name = styled.div`
    font-size: 20px;
    font-weight: 800;
    line-height: 24px;
    margin-left: 8px;
`;
const PostContainer = styled.div`
    display: flex;
    overflow-x: auto;
    ::-webkit-scrollbar {
        display: none;
    }
`;
const PostWrap = styled.div`
    position: relative;
    margin-right: 10px;
`;
const PostImg = styled.img`
    width: 120px;
    height: 156px;
    object-fit: cover;
`;
const PostList = () => {
    const [list, setList] = useState<Post[]>([]);
    useEffect(() => {
        fetch(process.env.REACT_APP_SERVER_URI + "/album/image/index/user", {
            headers: {
                token: localStorage.getItem("jwt") as string,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setList(data.data);
            });
    }, []);
    if (list.length === 0) return null;
    if (!list) return null;

    return (
        <Container>
            {list?.map((member) => {
                return (
                    <Posts>
                        <MemberInfo>
                            <ProfileImg src={member.profileImg} />
                            <Name>{member.userName}</Name>
                        </MemberInfo>
                        <PostContainer>
                            {member.photo.map((p) => (
                                <PostWrap>
                                    <PostImg src={p} />
                                </PostWrap>
                            ))}
                        </PostContainer>
                    </Posts>
                );
            })}
        </Container>
    );
};

export default PostList;
