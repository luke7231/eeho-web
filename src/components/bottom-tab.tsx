import styled from "styled-components";
import HomeImg from "../images/icons/home_icon.png";
import CameraImg from "../images/icons/camera_icon.png";
import GalaryImg from "../images/icons/galary_icon.png";
import { useNavigate } from "react-router-dom";
const Container = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 56px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 4px;
    align-items: center;
    padding: 4px;
`;
const TabWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
`;
const Home = styled.img`
    width: 36px;
    height: 35px;
`;
const Camera = styled.img`
    width: 36px;
    height: 27px;
`;
const Galary = styled.img`
    width: 26px;
    height: 32px;
`;

const BottomTab = () => {
    const navigate = useNavigate();
    return (
        <Container>
            <TabWrapper>
                <Camera src={CameraImg} />
            </TabWrapper>
            {/* <Partition /> */}
            <TabWrapper style={{ borderRight: "2px solid #CDD4BA", borderLeft: "2px solid #CDD4BA" }}>
                <Home src={HomeImg} onClick={() => navigate("/notification")} />
            </TabWrapper>
            {/* <Partition /> */}
            <TabWrapper>
                <Galary src={GalaryImg} onClick={() => navigate("/settings")} />
            </TabWrapper>
        </Container>
    );
};

export default BottomTab;
