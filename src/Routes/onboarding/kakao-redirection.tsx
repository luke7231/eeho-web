import { useEffect } from "react";

const KakaoRedirection = () => {
    useEffect(() => {
        const code = new URL(window.location.href).searchParams.get("code");
        if (code) {
            fetch(`http://14.32.240.151:8080/api/kakao/code?code=${code}`)
                .then((res) => res.json())
                .then((res) => {
                    if (res) {
                        console.log(res);
                    }
                });
        }
    }, []);
    return <div>잠시만 기다려주세요..</div>;
};

export default KakaoRedirection;
