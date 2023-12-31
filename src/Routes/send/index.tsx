import styled from "styled-components";
import BottomTab from "../../components/bottom-tab";
import Members from "./members";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 0 33px;
`;
const Title = styled.div`
    margin-top: 50px;
    display: flex;
    background-color: #89aa7833;
    border-radius: 6px;
    padding: 6px 0;
    width: 208px;
    flex-direction: column;
    justify-content: center;
    color: #1c3411;
    text-align: center;
    font-size: 24px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
`;
const Partition = styled.div`
    height: 1px;
    background-color: #bfd4b8;
    width: 100%;
    margin-top: 30px;
    margin-bottom: 50px;
`;

window.addEventListener("message", (event) => {
    if (typeof event.data === "string") {
        if (event.data.startsWith("go_to_main")) {
            // 홈으로 이동
            window.location.href = "/";
        } else if (event.data.startsWith("go_to_main_with_error")) {
            // 홈으로 이동
            window.location.href = "/";
        }
    }
});

const Send = () => {
    return (
        <Container>
            <Title>사진 받을 가족</Title>
            <Partition />
            <Members />
            <BottomTab />
        </Container>
    );
};
export default Send;
