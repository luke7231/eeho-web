import styled from "styled-components";

const TextContainer = styled.span`
    font-size: 22px;
    font-weight: 600;
    line-height: 27px;
    letter-spacing: 0em;
    text-align: center;
`;

const Green = styled(TextContainer)`
    color: #284b0c;
`;

interface Props {
    children: React.ReactNode;
    style?: React.CSSProperties;
}

export const GreenText = ({ children }: Props) => {
    return <Green>{children}</Green>;
};

const Title = ({ children, style }: Props) => {
    return <TextContainer style={style}>{children}</TextContainer>;
};
export default Title;
