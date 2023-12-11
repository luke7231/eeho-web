import { useEffect, useState } from "react";
import { Zoom, toast } from "react-toastify";
import styled from "styled-components";
import XCloseButtonImg from "../../images/icons/x_close.png";
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
interface FullScreenProp {
    isOpen: boolean;
    img?: string | null;
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
const FullScreenContainer = styled.div`
    position: fixed;
    width: 100%;
    padding: 20px;
    z-index: 2;

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
const FullScreenBackDrop = styled(Backdrop)``;
const FullScreenImg = styled.img`
    width: 88%;
    border-radius: 12px;
`;
const CloseButton = styled.img`
    color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    margin: 24px 24px 0 24px;
    z-index: 3;
    font-weight: 700;
    width: 24px;
    height: 24px;
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
const NoContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 60px;
    line-height: 20px;
    font-size: 16px;
    font-weight: 600;
    text-align: center;
`;
const PostListContainer = styled.div`
    width: 100%;
    height: 56px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 28px 13px;
    align-items: center;
    padding: 0 11px;
`;
const Post = styled.div``;

const Img = styled.img`
    width: 100%;
    aspect-ratio: 1 / 2;
    object-fit: cover;
`;
const postLists = [
    "https://source.unsplash.com/random/300×300",
    "https://source.unsplash.com/random/300×400",
    "https://source.unsplash.com/random/300×500",
    "https://source.unsplash.com/random/300×300",
    "https://source.unsplash.com/random/300×300",
    "https://source.unsplash.com/random/300×300",
];
const PostList = () => {
    const [list, setList] = useState<Post[]>([]);
    const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
    const [selectedImageId, setSelectedImageId] = useState("");
    const [isNoContent, setIsNoContent] = useState(false);
    const [isOpenFullScreen, setIsOpenFullScreen] = useState<FullScreenProp>({ isOpen: false, img: "" });
    const openFullScreen = (img: string) => {
        setIsOpenFullScreen({ isOpen: true, img });
    };
    const closeFullScreen = () => {
        setIsOpenFullScreen({ isOpen: false, img: "" });
    };
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
                if (data.data?.length === 0) {
                    setIsNoContent(true);
                } else {
                    setList(data.data);
                }
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
    // if (!list) return null;

    return (
        <Container>
            {isNoContent && (
                <NoContent>
                    이 곳은 갤러리 페이지 입니다. <br /> 그룹 인원을 초대하여 사진을 공유해봐요!
                </NoContent>
            )}
            {/* {list.length !== 0 &&
                list?.map((member) => {
                    return (
                        <Posts>
                            <MemberInfo>
                                <ProfileImg src={member.profileImg} />
                                <Name>{member.userName}</Name>
                            </MemberInfo>
                            <PostContainer>
                                {member.photo.map((p) => (
                                    <PostWrap>
                                        <PostImg src={p.img} onClick={() => openFullScreen(p.img)} />
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
                })} */}
            <PostListContainer>
                {postLists.map((p) => {
                    return (
                        <Post>
                            <Img src={p} />
                        </Post>
                    );
                })}
            </PostListContainer>
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

            {isOpenFullScreen.isOpen && (
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        position: "absolute",
                        left: 0,
                        top: 0,
                        width: "100%",
                        height: "100%",
                    }}
                >
                    <FullScreenBackDrop onClick={closeFullScreen} />
                    <CloseButton src={XCloseButtonImg} onClick={closeFullScreen} />
                    <FullScreenContainer onClick={(e) => stopPropagation(e)}>
                        <FullScreenImg src={isOpenFullScreen.img as string} />
                    </FullScreenContainer>
                </div>
            )}
        </Container>
    );
};

export default PostList;
