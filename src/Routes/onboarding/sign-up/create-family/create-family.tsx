import { useState } from "react";
import Button from "../../../../components/onboarding/button";
import { useNavigate } from "react-router-dom";

const CreateFamily = () => {
    const navigate = useNavigate();
    const [familyName, setFamilyName] = useState("");
    const onClickButton = () => {
        navigate("/sign-up/create/set-profile", {
            state: {
                familyName,
            },
        });
    };
    return (
        <div>
            <div style={{ margin: 100 }}>
                <div>가족 이름을 설정해주세요~~</div>
                <input value={familyName} onChange={(v) => setFamilyName(v.target.value)} />
            </div>
            <Button text="다 음" onClick={onClickButton} />
        </div>
    );
};

export default CreateFamily;
