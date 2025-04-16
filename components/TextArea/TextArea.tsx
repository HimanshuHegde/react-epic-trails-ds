import { TextareaHTMLAttributes } from "react";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    className?: string;
}

export function TextArea({ className = "", ...props }: TextAreaProps) {
    return (
        <textarea
            className={`w-full h-40 bg-black border border-gray-700 rounded-md p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none transition-all duration-300 ${className}`}
            {...props}
        />
    );
}
