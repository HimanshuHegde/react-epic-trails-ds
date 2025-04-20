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
    variant
}: ButtonGroupProps) {
    return (
        <div
            className={`flex ${
                iconPosition === "right" ? "flex-row" : "flex-row-reverse"
            } ${className} gap-[1px] w-fit`}
        >
            <RectButton
                onClick={iconButtonFunction}
                size={`${contentButtonSize}`}
                variant={variant}
                >
                {buttonContent}
            </RectButton>
            <RectButton
                size={`${iconButtonSize}`}
                onClick={contentButtonFunction}
                variant={variant}
            >
                {icon}
            </RectButton>
        </div>
    );
}
