"use client";
import React, {
    createContext,
    useContext,
    useState,
    useRef,
    useEffect,
    ReactNode,
    HTMLAttributes,
} from "react";
import { ChevronDown } from "../icons";

interface SelectContextProps {
    selectedValue: string | null;
    selectedLabel: string | null;
    setSelected: (val: string, label: string) => void;
    placeholder: string;
    setPlaceholder: (val: string) => void;
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
}

const SelectContext = createContext<SelectContextProps | null>(null);

export const Select = ({ children }: { children: ReactNode }) => {
    const [selectedValue, setSelectedValue] = useState<string | null>(null);
    const [selectedLabel, setSelectedLabel] = useState<string | null>(null);
    const [placeholder, setPlaceholder] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    const setSelected = (val: string, label: string) => {
        setSelectedValue(val);
        setSelectedLabel(label);
    };

    return (
        <SelectContext.Provider
            value={{
                selectedValue,
                selectedLabel,
                setSelected,
                placeholder,
                setPlaceholder,
                isOpen,
                setIsOpen,
            }}
        >
            <div className="relative w-fit">{children}</div>
        </SelectContext.Provider>
    );
};

export const SelectTrigger = ({
    children,
    className,
    ...rest
}: HTMLAttributes<HTMLButtonElement>) => {
    const ctx = useContext(SelectContext);
    if (!ctx) throw new Error("SelectTrigger must be used within Select");

    return (
        <button
            onClick={() => ctx.setIsOpen(!ctx.isOpen)}
            className={`flex items-center justify-between border border-zinc-700 bg-zinc-900 text-white px-3 py-2 rounded-md shadow-sm focus:outline-none ${className} mt-2`}
            {...rest}
        >
            {children}
            <ChevronDown className="w-4 h-4 ml-2 text-zinc-400" />
        </button>
    );
};

export const SelectValue = ({ placeholder }: { placeholder?: string }) => {
    const ctx = useContext(SelectContext);
    if (!ctx) throw new Error("SelectValue must be used within Select");

    useEffect(() => {
        if (placeholder) ctx.setPlaceholder(placeholder);
    }, [placeholder]);

    return (
        <span className="truncate">{ctx.selectedLabel || ctx.placeholder}</span>
    );
};

export const SelectContent = ({
    children,
    className = "",
}: {
    children: ReactNode;
    className?: string;
}) => {
    const ctx = useContext(SelectContext);
    const contentRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLElement | null>(null);
    const [placement, setPlacement] = useState<"bottom" | "top">("bottom");

    // 🧠 Positioning logic
    useEffect(() => {
        const triggerEl =
            contentRef.current?.parentElement?.querySelector("button");
        if (triggerEl) {
            triggerRef.current = triggerEl;
            const rect = triggerEl.getBoundingClientRect();
            const spaceBelow = window.innerHeight - rect.bottom;
            const estimatedHeight = 200; // You can make this dynamic if needed

            setPlacement(spaceBelow < estimatedHeight ? "top" : "bottom");
        }
    }, [ctx?.isOpen]);

    // 🧠 Click outside to close
    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (
                contentRef.current &&
                !contentRef.current.contains(e.target as Node) &&
                !triggerRef.current?.contains(e.target as Node)
            ) {
                ctx?.setIsOpen(false);
            }
        }

        if (ctx?.isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ctx?.isOpen]);

    if (!ctx?.isOpen) return null;

    return (
        <div
            ref={contentRef}
            className={`absolute z-50 w-full max-h-52 overflow-auto rounded-md bg-zinc-900 border border-zinc-700 text-white shadow-lg transition-all duration-150
        ${placement === "bottom" ? "top-full mt-1" : "bottom-full mb-1"}
        ${className}
      `}
        >
            {children}
        </div>
    );
};

export const SelectGroup = ({ children }: { children: ReactNode }) => {
    return <div className="p-1">{children}</div>;
};

export const SelectLabel = ({ children }: { children: ReactNode }) => {
    return (
        <div className="px-2 py-1 text-xs uppercase tracking-wide text-zinc-400">
            {children}
        </div>
    );
};

export const SelectItem = ({
    value,
    children,
}: {
    value: string;
    children: ReactNode;
}) => {
    const ctx = useContext(SelectContext);
    if (!ctx) throw new Error("SelectItem must be used within Select");

    const handleSelect = () => {
        const label = typeof children === "string" ? children : "";
        ctx.setSelected(value, label);
        ctx.setIsOpen(false);
    };

    const isSelected = ctx.selectedValue === value;

    return (
        <div
            onClick={handleSelect}
            className={`cursor-pointer px-3 py-2 rounded-md hover:bg-zinc-700 transition-colors ${
                isSelected ? "bg-zinc-700" : ""
            }`}
        >
            {children}
        </div>
    );
};
