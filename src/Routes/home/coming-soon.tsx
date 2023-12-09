import styled from "styled-components";
import EehoLogo from "../../images/icons/EEHO.png";

const Contanier = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 48px;
`;
const Logo = styled.img`
    width: 95px;
    height: 61px;
    margin-bottom: 24px;
`;
const Title = styled.div`
    height: 70px;
    display: flex;
    align-items: center;
    font-size: 24px;
    font-weight: 800;
    line-height: 29px;
    letter-spacing: 0em;
    text-align: center;
`;
const Text = styled.div`
    height: 75px;
    display: flex;
    align-items: center;
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: center;
    margin-bottom: 20px;
`;
const ComingSoon = () => {
    return (
        <Contanier>
            <Logo src={EehoLogo} />
            <Title>Coming Soon</Title>
            <Text>
                여러분께 더 좋은 모습을
                <br />
                보여드리기 위해 에호를 재정비 중입니다
                <br />
                <br />더 나은 모습으로 찾아뵙겠습니다!
            </Text>
        </Contanier>
    );
};

export default ComingSoon;
