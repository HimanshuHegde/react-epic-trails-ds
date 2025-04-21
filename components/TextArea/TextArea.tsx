import { TextareaHTMLAttributes } from "react";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    className?: string;
}

export function TextArea({ className = "", ...props }: TextAreaProps) {
    return (
        <textarea
            className={`w-full h-40 bg-gray-50 rounded-md p-3 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black resize-none transition-all duration-300 ${className}`}
            {...props}
        />
    );
}
