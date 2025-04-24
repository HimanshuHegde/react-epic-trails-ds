import { TextareaHTMLAttributes } from "react";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    className?: string;
    Label?: string;
}

export function TextArea({
    className = "",
    Label = "",
    ...props
}: TextAreaProps) {
    const id = props.id || "TA-" + Math.random();
    return (
        <>
            <label htmlFor={id}>{Label}</label>
            <textarea
                className={`w-full h-40 bg-gray-50 rounded-md p-3 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black resize-none transition-all duration-300 ${className}`}
                id={id}
                {...props}
            />
        </>
    );
}
