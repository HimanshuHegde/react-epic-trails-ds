import { Children, Fragment, useState } from "react";
import { Badge } from "../Badge";
import { ChevronDownOutline, ChevronUpOutline } from "../icons";

type CollapseProps = {
    badges?: string[];
    expanded?: boolean;
    defaultExpanded?: boolean;
    onChange?: (v: boolean) => any;
    actionFunction?: () => void;
    actionButtonLabel?: string;
    children: React.ReactNode;
    label?: React.ReactNode;
};

export default function Collapse({
    badges = [],
    label,
    expanded,
    defaultExpanded=false,
    actionFunction,
    actionButtonLabel = "",
    children,
    onChange,
}: CollapseProps) {
    const isControlled = expanded !== undefined;
    const [internalExpand, setInternalExpand] = useState(defaultExpanded);

    const isOpen = isControlled ? expanded : internalExpand;

    const toggleExpand = () => {
        if (isControlled) {
            onChange?.(!expanded);
        } else {
            setInternalExpand((prev) => {
                const newVal = !prev;
                onChange?.(newVal); // still call onChange even in uncontrolled
                return newVal;
            });
        }
    };

    const childrenArray = Children.toArray(children);

    return (
        <div className="w-full border-gray-400 border-b">
            <div className="flex bg-gray-50 text-black font-semibold items-center px-4 gap-8 py-4 justify-between">
                <div className="flex gap-4 items-center">
                    <span className="text-1xl">{label}</span>
                    {badges.map((e, idx) => (
                        <Badge key={idx} size="md" className="bg-gray-400 px-4">
                            {e}
                        </Badge>
                    ))}
                </div>
                <div className="text-black flex gap-6">
                    {actionButtonLabel && (
                        <button onClick={actionFunction}>
                            <u>{actionButtonLabel}</u>
                        </button>
                    )}
                    <button onClick={toggleExpand} className="flex items-center">
                        {isOpen ? (
                            <ChevronUpOutline  />
                        ) : (
                            <ChevronDownOutline  />
                        )}
                    </button>
                </div>
            </div>
            <div className="bg-gray-50 ">
                {isOpen &&
                    childrenArray.map((child, index) => (
                        <Fragment key={index}>
                            <div className="px-4 py-2 text-gray-800">{child}</div>
                        </Fragment>
                    ))}
            </div>
        </div>
    );
}
