export const fetchReqEeho = async (usernames: string[], token: string) => {
    const data = {
        member: usernames,
    };
    return await fetch(`${process.env.REACT_APP_SERVER_URI}/eeho/request`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            token,
        },
        body: JSON.stringify(data),
    });
};
