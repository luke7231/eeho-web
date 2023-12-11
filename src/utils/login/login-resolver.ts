import * as yup from "yup";

export const schema = yup.object().shape({
    id: yup.string().required("아이디는 필수 항목입니다."),
    password: yup
        .string()
        .matches(
            /^(?=.*[a-zA-Z])(?=.*[!@#$%^&*(),.?":{}|<>~])(?=.*[0-9]).{8,15}$/,
            "비밀번호는 최소 8자에서 15자까지, 영문, 숫자, 특수문자를 포함해야 합니다.",
        )
        .required("비밀번호는 필수 항목입니다."),
    confirmPassword: yup.string().oneOf([yup.ref("password")], "비밀번호가 일치하지 않습니다."),
    phoneNumber: yup
        .string()
        .matches(/^[0-9]{10,11}$/, "올바른 휴대폰 번호 형식이 아닙니다.")
        .required("휴대폰 번호는 필수 항목입니다."),
    verificationCode: yup.string().required("인증번호는 필수 항목입니다."),
});
