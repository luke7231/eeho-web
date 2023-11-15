type color = "green" | "beige";
interface Props {
    width: number;
    height: number;
    color: color;
    style?: React.CSSProperties;
}
const Eeho = ({ width, height, color, style }: Props) => {
    const TextColor = color == "green" ? "#5E7154" : "#FDE8D5";
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={String(width)}
            height={String(height)}
            viewBox="0 0 129 83"
            fill="none"
            style={style}
        >
            <g clip-path="url(#clip0_24_45)">
                <path
                    d="M15.9233 82.9856C7.14416 82.9856 0 75.7661 0 66.8943C0 58.0224 7.14416 50.8029 15.9233 50.8029C24.7024 50.8029 31.8466 58.0224 31.8466 66.8943C31.8466 68.2089 30.7945 69.272 29.4936 69.272H4.9547C6.04232 74.3868 10.5421 78.2301 15.9233 78.2301C19.0582 78.2301 21.9656 76.9586 24.1053 74.6454C24.9939 73.69 26.4867 73.6397 27.4321 74.5377C28.3776 75.4356 28.4273 76.9442 27.5388 77.8996C24.546 81.1323 20.3093 82.9856 15.9233 82.9856ZM4.9547 64.5165H26.8919C25.8043 59.4017 21.3045 55.5584 15.9233 55.5584C10.5421 55.5584 6.04232 59.4017 4.9547 64.5165Z"
                    fill={TextColor}
                />
                <path
                    d="M48.8717 82.9856C40.0926 82.9856 32.9484 75.7661 32.9484 66.8943C32.9484 58.0224 40.0926 50.8029 48.8717 50.8029C57.6509 50.8029 64.795 58.0224 64.795 66.8943C64.795 68.2089 63.7429 69.272 62.4421 69.272H37.9031C38.9907 74.3868 43.4905 78.2301 48.8717 78.2301C52.0066 78.2301 54.914 76.9586 57.0537 74.6454C57.9423 73.69 59.4351 73.6397 60.3806 74.5377C61.326 75.4356 61.3758 76.9442 60.4872 77.8996C57.4874 81.1323 53.2577 82.9856 48.8717 82.9856ZM37.9031 64.5165H59.8403C58.7527 59.4017 54.2529 55.5584 48.8717 55.5584C43.4905 55.5584 38.9907 59.4017 37.9031 64.5165Z"
                    fill={TextColor}
                />
                <path
                    d="M92.6608 83C91.3599 83 90.3078 81.9368 90.3078 80.6222V63.719L80.8747 54.1863L71.4416 63.719V80.6222C71.4416 81.9368 70.3895 83 69.0886 83C67.7877 83 66.7357 81.9368 66.7357 80.6222V6.5012C66.7357 5.18659 67.7877 4.12341 69.0886 4.12341C70.3895 4.12341 71.4416 5.18659 71.4416 6.5012V56.988L78.9696 49.3805C79.261 48.9854 79.6662 48.6908 80.1354 48.54C80.3629 48.4681 80.6046 48.425 80.8534 48.425H80.8605H80.8676C81.159 48.425 81.4363 48.4825 81.6922 48.5759C82.076 48.7196 82.4244 48.9638 82.6874 49.2871L94.3313 61.0539C94.772 61.4993 95.0208 62.1027 95.0208 62.7349V80.6222C95.0137 81.9368 93.9616 83 92.6608 83Z"
                    fill={TextColor}
                />
                <path
                    d="M113.077 82.9856C104.298 82.9856 97.1534 75.7661 97.1534 66.8943C97.1534 58.0224 104.298 50.8029 113.077 50.8029C121.856 50.8029 129 58.0224 129 66.8943C129 75.7661 121.863 82.9856 113.077 82.9856ZM113.077 55.5584C106.892 55.5584 101.859 60.6445 101.859 66.8943C101.859 73.144 106.892 78.2301 113.077 78.2301C119.261 78.2301 124.294 73.144 124.294 66.8943C124.294 60.6445 119.261 55.5584 113.077 55.5584Z"
                    fill={TextColor}
                />
                <path
                    d="M68.5626 42.2112C62.1079 42.2112 55.2908 36.7301 54.9993 27.4272C54.6723 16.8457 66.3944 1.56604 66.892 0.919508C67.3399 0.337632 68.0223 0 68.7474 0H69.117C69.8421 0 70.5245 0.337632 70.9724 0.912325C71.47 1.55885 83.1992 16.8385 82.8651 27.42C82.5736 36.7229 75.7565 42.204 69.2663 42.204C69.2094 42.204 69.1526 42.204 69.0957 42.204H68.7474C68.6834 42.2112 68.6265 42.2112 68.5626 42.2112ZM69.117 37.4484C69.1668 37.4484 69.2094 37.4484 69.2592 37.4484C72.8562 37.4484 77.9388 34.3235 78.1592 27.2692C78.3582 20.9978 72.5718 11.3358 68.9322 6.12766C65.2926 11.343 59.5062 21.0122 59.7052 27.2692C59.9256 34.3882 65.1007 37.5274 68.7118 37.4484H69.117Z"
                    fill={TextColor}
                />
                <path
                    d="M69.0815 32.1972C68.4559 32.1972 67.8588 31.9457 67.4181 31.5004L58.4115 22.3987C57.4944 21.472 57.4944 19.9634 58.4115 19.0367C59.3285 18.11 60.8213 18.11 61.7383 19.0367L69.0815 26.4574L77.2422 18.2106C78.1592 17.2839 79.652 17.2839 80.569 18.2106C81.486 19.1373 81.486 20.6458 80.569 21.5725L70.7449 31.5004C70.3042 31.9457 69.707 32.1972 69.0815 32.1972Z"
                    fill={TextColor}
                />
            </g>
            <defs>
                <clipPath id="clip0_24_45">
                    <rect width={String(width)} height={String(height)} fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
};

export default Eeho;