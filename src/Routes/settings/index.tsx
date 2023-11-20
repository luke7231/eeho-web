import { useEffect, useState } from "react";
interface Photo {
    img: string;
}
const Settings = () => {
    const [list, setList] = useState<Photo[] | undefined>();
    useEffect(() => {
        fetch(process.env.REACT_APP_SERVER_URI + "/album/image/index", {
            headers: {
                token: localStorage.getItem("jwt") as string,
            },
        })
            .then((res) => res.json())
            .then((data) => setList(data.photos));
    }, []);
    console.log(list);
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            {list?.map((photo) => <img src={photo.img} style={{ height: 300, width: 300, objectFit: "cover" }} />)}
        </div>
    );
};

export default Settings;
