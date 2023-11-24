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

const PostList = () => {
    const [list, setList] = useState<Post[]>([]);
    const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
    const [selectedImageId, setSelectedImageId] = useState("");

    const openModal = () => {
        setIsOpenDeleteModal(true);
    };
    const closeModal = () => {
        setIsOpenDeleteModal(false);
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const stopPropagation = (e: any) => {
        e.stopPropagation();
    };

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
    const reqDeleteImage = (id: string) => {
        fetch(process.env.REACT_APP_SERVER_URI + `/album/image/delete/${id}`, {
            headers: {
                token: localStorage.getItem("jwt") as string,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.ok) {
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
                                    {p.isMine && (
                                        <DeleteButton
                                            onClick={() => {
                                                setSelectedImageId(p._id);
                                                openModal();
                                            }}
                                        >
                                            x
                                        </DeleteButton>
                                    )}
                                </PostWrap>
                            ))}
                        </PostContainer>
                    </Posts>
                );
            })}
            {isOpenDeleteModal && (
                <>
                    <Backdrop onClick={closeModal} />
                    <ModalContainer onClick={(e) => stopPropagation(e)}>
                        <ModalContent>
                            사진을 삭제하시겠습니까?
                            <br /> 상대방도 볼 수 없게 됩니다.
                        </ModalContent>
                        <ModalButtonCon>
                            <ModalButton onClick={() => reqDeleteImage(selectedImageId)}>삭제</ModalButton>
                            <NoButton onClick={closeModal}>아니오</NoButton>
                        </ModalButtonCon>
                    </ModalContainer>
                </>
            )}
        </Container>
    );
};

export default PostList;
