import { RectButton } from "../Button";
import { ChevronDown } from "../icons";
import { ButtonGroupProps } from "./ButtonGroup.type";
export function ButtonGroup({
    icon = <ChevronDown />,
    buttonContent = "Busdfsdfsfsfdftton",
    iconPosition = "left",
    className = "",
    contentButtonSize = "medium",
    iconButtonSize = "fit",
    contentButtonFunction,
    iconButtonFunction,
    ...prop
}: ButtonGroupProps) {
    return (
        <div
            className={`flex ${
                iconPosition === "right" ? "flex-row-reverse" : ""
            } ${className} gap-[1px] w-fit`}
        >
            <RectButton
                onClick={iconButtonFunction}
                size={`${contentButtonSize}`}
            >
                {buttonContent}
            </RectButton>
            <RectButton
                size={`${iconButtonSize}`}
                onClick={contentButtonFunction}
            >
                {icon}
            </RectButton>
        </div>
    );
}
