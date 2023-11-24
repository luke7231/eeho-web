import styled from "styled-components";
import Title from "../../components/onboarding/title";
import BackButton from "../../components/onboarding/back-button";

const Contanier = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 0 32px;
    margin-top: 32px;
`;
const InputContainer = styled.div`
    margin-top: 45px;
`;
const MessageWrap = styled.div`
    margin-top: 12px;
`;
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
    padding: 10px;
    margin-top: 20px;
`;

const Block = () => {
    return (
        <Contanier>
            <BackButton />
            <InputContainer>
                <Title style={{ fontSize: 30 }}>차단 문의</Title>
                <MessageWrap>
                    <Bold>안내 메시지</Bold>
                    <Text>
                        친애하는 '에호' 사용자 여러분, 가족은 소중하고 특별한 곳에서 함께하는 소중한 순간들을 담아내는
                        곳입니다. '에호'은 가족 간 소통을 강화하고 소중한 순간을 함께 나누는 것을 목표로 하는
                        서비스입니다.
                    </Text>
                    <Bold>우리 서비스의 방향:</Bold>
                    <Text>
                        '에호'은 가족 간에 연결되고 소통하는 것을 중시합니다. 우리는 단순히 사진을 공유하는 것 이상의
                        의미를 부여하려 합니다. 서로의 삶을 더욱 가깝게 만들고, 소중한 순간을 함께 나누며 가족 간의
                        유대감을 강화하는 것이 우리의 목표입니다.
                    </Text>
                    <Bold>신중을 요구:</Bold>
                    <Text>
                        가족은 서로 다른 개성과 생각을 가진 다양한 사람들로 이뤄져 있습니다. 때로는 의견이 충돌하거나
                        서로 다른 관점이 있을 수 있습니다. '에호'은 이러한 다양성을 존중하고 가족 간에 원활한 소통을
                        돕기 위해 노력합니다. 따라서 우리는 사용자 간의 원활한 관계 유지를 위해 어떤 이유에서든 가족
                        멤버를 차단하기 전에 신중을 요구합니다.
                    </Text>
                    <Bold style={{ marginTop: 40 }}>[차단 요청]</Bold>
                    <Text style={{ fontWeight: 700 }}>
                        그럼에도 차단을 원하시는 분은{" "}
                        <div style={{ marginTop: 20 }}>- 차단을 원하는 가족 구성원의 이름</div>
                        <div style={{ marginBottom: 20 }}> - 가족코드(메뉴에서 확인 가능)</div>를 포함하여 아래 연락처로
                        문의 바랍니다. 24시간 이내 팀원들과 공유 후 조치 및 연락을 취하겠습니다.
                    </Text>
                    <Text>
                        가족 간의 소통을 높이고 더 나은 관계를 구축하는 데에 '에호'이 도움이 되기를 기대합니다. 소중한
                        가족과 함께 '에호'을 통해 특별한 순간들을 공유하세요. 감사합니다. '에호' 팀 드림
                    </Text>
                </MessageWrap>
                <CopyTextBox>tmddnjs7231@gmail.com</CopyTextBox>
            </InputContainer>
        </Contanier>
    );
};

export default Block;
