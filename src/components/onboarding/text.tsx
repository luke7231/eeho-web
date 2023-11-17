import React from "react";
import styled from "styled-components";

const TextContainer = styled.span`
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: center;
`;

interface Props {
    children: React.ReactNode;
    style?: React.CSSProperties;
}
const Text = ({ children, style }: Props) => {
    return <TextContainer style={style}>{children}</TextContainer>;
};
export default Text;
