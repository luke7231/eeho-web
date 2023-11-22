import styled from "styled-components";
import Eeho from "../images/icons/eeho_green.png";
import Menu from "../images/icons/burger.png";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
    position: relative;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px;
`;
const Logo = styled.img`
    width: 60px;
    height: 40px;
`;
const MenuBox = styled.div`
    width: 30px;
    display: flex;
    justify-content: center;
`;
const MenuButton = styled.img`
    width: 20px;
    height: 21px;
`;
const Header = () => {
    const navigate = useNavigate();
    return (
        <Container>
            <MenuBox />
            <Logo src={Eeho} />
            <MenuBox>
                <MenuButton src={Menu} onClick={() => navigate("/setting")} />
            </MenuBox>
        </Container>
    );
};

export default Header;
