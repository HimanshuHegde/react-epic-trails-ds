import { ReactNode } from "react";

interface TimelineStepProps {
    children: ReactNode;
    className?: string;
    completed?: boolean;
    current?: boolean;
}

export function TimelineStep({
    children,
    className = "",
    completed = false,
    current = false,
}: TimelineStepProps) {
    return (
        <div className={`flex flex-col items-center ${className}`}>
            <div
                className="w-6 h-6 rounded-full z-10 flex items-center justify-center border-2"
                style={{
                    backgroundColor: "white",
                    borderColor: "white",
                }}
            >
                {completed && (
                    <svg
                        className="w-4 h-4 text-green-black"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                        ></path>
                    </svg>
                )}
                {current && !completed && (
                    <div className="w-3 h-3 rounded-full bg-gray-800"></div>
                )}
            </div>

            <div className="mt-2 text-center text-gray-800">{children}</div>
        </div>
    );
}
