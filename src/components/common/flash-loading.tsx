import React from "react";

import { BeatLoader } from "react-spinners";
import styled from "styled-components";

const Container = styled.div<{ marginTop?: number }>`
    width: 100wh;
    height: 100%;
    display: flex;
    justify-content: center;
    ${({ marginTop }) => marginTop && `margin-top:${marginTop}px;`}
`;

const BarWrap = styled.div`
    margin: auto;
`;

const FlashLoading = ({
    marginTop = 20,
    color = "#111",
    style,
}: {
    marginTop?: number;
    color?: string;
    style?: React.CSSProperties;
}) => (
    <Container style={style} className="flash-loading" marginTop={marginTop}>
        <BarWrap>
            <BeatLoader size={10} color={color} loading={true} />
        </BarWrap>
    </Container>
);

export default FlashLoading;
