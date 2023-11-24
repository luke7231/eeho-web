import styled from "styled-components";
import Title from "../../components/onboarding/title";

const Contanier = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 0 24px;
    margin-top: 32px;
`;
const InputContainer = styled.div``;
const Bold = styled.div`
    margin-top: 20px;
    font-weight: 800;
    font-size: 18px;
`;
const Text = styled.div`
    display: flex;
    margin: 20px 0 10px 0;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`;
const CopyTextBox = styled.div`
    background-color: #bcd6ab;
    border: 0;
    width: 100%;
    text-align: center;
    font-size: 24px;
    margin-bottom: 48px;
    border-radius: 10px;
    padding: 12px;
    margin-top: 60px;
`;

const Question = () => {
    return (
        <Contanier>
            <InputContainer>
                <Title style={{ fontSize: 24 }}>
                    에호는 <br />
                    <br />
                    여러분들의
                    <br />
                    <br /> 모든 문의를 환영합니다!!
                </Title>

                <Bold style={{ marginTop: 40 }}>[문의 내역]</Bold>
                <Text style={{ fontWeight: 700 }}>
                    <div style={{ marginTop: 10 }}>- 피드백</div>
                    <div style={{ marginTop: 10 }}>- 칭찬</div>
                    <div style={{ marginTop: 10 }}> - 버그 발견</div>
                    <div style={{ marginTop: 10 }}> - 기능 추가 요청</div>
                    <div
                        style={{
                            marginTop: 10,
                            marginBottom: 20,
                        }}
                    >
                        {" "}
                        - 그 외 기타 건의 사항
                    </div>
                    여러분의 경험을 더욱 개선하고자 합니다. 좋은 피드백이나 발견하신 버그에 대한 신고를 기꺼이
                    받겠습니다. 어떤 작은 의견이라도, 또는 발견하신 문제가 있다면 공유해주시면 감사하겠습니다.
                </Text>
                <CopyTextBox>
                    문의 연락처: <br />
                    <br />
                    tmddnjs7231@gmail.com
                </CopyTextBox>
            </InputContainer>
        </Contanier>
    );
};

export default Question;
