import { useEffect, useState } from "react";
import { Zoom, toast } from "react-toastify";
import styled from "styled-components";
interface Photo {
    _id: string;
    isMine: boolean;
    img: string;
}
interface Post {
    userId: string;
    userName: string;
    profileImg: string;
    photo: Photo[];
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
    margin-bottom: 24px;
`;
const MemberInfo = styled.div`
    display: flex;
    align-items: center;
    margin-left: 6px;
    margin-bottom: 20px;
    padding-left: 24px;
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
    padding-left: 24px;
    overflow-x: auto;
    ::-webkit-scrollbar {
        display: none;
    }
`;
const PostWrap = styled.div`
    position: relative;
    margin-right: 0px;
    padding: 10px;
`;
const PostImg = styled.img`
    width: 120px;
    height: 156px;
    object-fit: cover;
    border-radius: 12px;
`;
const DeleteButton = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: #627d50;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
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
    const onClickDelete = (id: string) => {
        fetch(process.env.REACT_APP_SERVER_URI + `/album/image/delete/${id}`, {
            headers: {
                token: localStorage.getItem("jwt") as string,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.ok) {
                    toast("사진이 성공적으로 삭제 되었습니다.", {
                        position: "bottom-center",
                        transition: Zoom,
                        className: "otl_tostify",
                        autoClose: 1000,
                        hideProgressBar: true,
                    });
                    window.location.reload();
                } else {
                    toast("네트워크에 문제가 발생했습니다.", {
                        position: "bottom-center",
                        transition: Zoom,
                        className: "otl_tostify_error",
                        autoClose: 1000,
                        hideProgressBar: true,
                    });
                }
            });
    };
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
                                    <PostImg src={p.img} />
                                    {p.isMine && <DeleteButton onClick={() => onClickDelete(p._id)}>x</DeleteButton>}
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
