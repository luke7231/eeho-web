import styled from "styled-components";

const Container = styled.div`
    position: fixed;
    bottom: 0;
    padding: 0 34px;
    width: 100%;
`;
const Btn = styled.div`
    width: 100%;
    height: 45px;
    background-color: #89aa78;
    border-radius: 11px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 24px;
    font-weight: 600;
    text-align: center;
`;

interface Props {
    text: string;
    onClick?: () => void;
}
const Button = ({ text, onClick }: Props) => {
    return (
        <Container onClick={onClick}>
            <Btn>{text}</Btn>
        </Container>
    );
};
export default Button;
