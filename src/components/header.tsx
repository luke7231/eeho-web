import styled from "styled-components";
import Noti from "../images/icons/notification.png";
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
const Notification = styled.img`
    width: 30px;
    height: 31px;
`;
const Logo = styled.img`
    width: 77px;
    height: 50px;
`;
const MenuBox = styled.div`
    width: 30px;
`;
const MenuButton = styled.img`
    width: 20px;
    height: 21px;
`;
const Header = () => {
    const navigate = useNavigate();
    return (
        <Container>
            <Notification src={Noti} onClick={() => navigate("/notification")} />
            <Logo src={Eeho} />
            <MenuBox>
                <MenuButton src={Menu} onClick={() => navigate("/settings")} />
            </MenuBox>
        </Container>
    );
};

export default Header;
