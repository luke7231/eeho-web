import PostList from "./post-list";
import styled from "styled-components";
import Header from "../../components/header";
import BottomTab from "../../components/bottom-tab";

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Posts = () => {
    return (
        <Container>
            <Header />
            <PostList />
            <BottomTab />
        </Container>
    );
};

export default Posts;
