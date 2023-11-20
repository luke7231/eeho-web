import styled from "styled-components";
import BackButtonImg from "../../images/icons/back_arrow.png";
import { useNavigate } from "react-router-dom";
const Container = styled.div`
    position: absolute;
    top: 24px;
    left: 24px;
`;
const Image = styled.img`
    width: 28px;
`;
const BackButton = () => {
    const navigate = useNavigate();
    const onClickButton = () => {
        navigate(-1);
    };

    return (
        <Container>
            <Image src={BackButtonImg} onClick={onClickButton} />
        </Container>
    );
};
export default BackButton;
