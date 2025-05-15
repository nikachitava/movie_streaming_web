import type { ICustomButton } from "../types/ICustomButton";

const CustomButton: React.FC<ICustomButton> = ({
    title,
    onClick,
    className,
}) => {
    return (
        <button onClick={onClick} className={className}>
            {title}
        </button>
    );
};

export default CustomButton;
