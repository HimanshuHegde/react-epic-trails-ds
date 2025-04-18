import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/Tooltip";

const meta: Meta<
    typeof Tooltip & typeof TooltipTrigger & typeof TooltipContent
> = {
    title: "Components/Tooltip",
    component: Tooltip,
    argTypes: {
        position: {
            control: "select",
            options: ["top", "bottom", "left", "right", "auto"],
        },
        arrow: {
            control: "boolean",
        },
        label: {
            control: "text",
        },
    } as any,
};

export default meta;
type Story = StoryObj<
    typeof Tooltip & typeof TooltipTrigger & typeof TooltipContent
>;

export const ConfigurableTooltip: Story = {
    name: "Interactive Tooltip (With Controls)",
    args: {
        position: "top",
        arrow: true,
        label: "Tooltip content",
    } as any,
    render: ({ position, arrow, label }: any) => (
        <Tooltip>
            <TooltipTrigger>
                <button className="bg-blue-600 text-white p-2 rounded-md">
                    Hover me
                </button>
            </TooltipTrigger>
            <TooltipContent position={position} arrow={arrow}>
                {label}
            </TooltipContent>
        </Tooltip>
    ),
};

// ✅ Your existing static stories remain unchanged below

export const DefaultTooltip: Story = {
    name: "Default Tooltip",
    render: () => (
        <Tooltip>
            <TooltipTrigger>
                <button className="bg-blue-500 text-white p-2 rounded-md">
                    Hover me
                </button>
            </TooltipTrigger>
            <TooltipContent arrow>This is a tooltip</TooltipContent>
        </Tooltip>
    ),
};

export const TooltipWithArrow: Story = {
    render: () => (
        <Tooltip>
            <TooltipTrigger>
                <button className="bg-green-500 text-white p-2 rounded-md">
                    Hover me
                </button>
            </TooltipTrigger>
            <TooltipContent position="bottom" arrow>
                Tooltip with an arrow
            </TooltipContent>
        </Tooltip>
    ),
};

export const TooltipWithoutArrow: Story = {
    render: () => (
        <Tooltip>
            <TooltipTrigger>
                <button className="bg-red-500 text-white p-2 rounded-md">
                    Hover me
                </button>
            </TooltipTrigger>
            <TooltipContent position="right" arrow={false}>
                Tooltip without an arrow
            </TooltipContent>
        </Tooltip>
    ),
};

export const TooltipPositionLeft: Story = {
    render: () => (
        <Tooltip>
            <TooltipTrigger>
                <button className="bg-purple-500 text-white p-2 rounded-md">
                    Hover me
                </button>
            </TooltipTrigger>
            <TooltipContent position="left" arrow>
                Tooltip positioned to the left
            </TooltipContent>
        </Tooltip>
    ),
};

export const TooltipPositionRight: Story = {
    render: () => (
        <Tooltip>
            <TooltipTrigger>
                <button className="bg-yellow-500 text-white p-2 rounded-md">
                    Hover me
                </button>
            </TooltipTrigger>
            <TooltipContent position="right" arrow>
                Tooltip positioned to the right
            </TooltipContent>
        </Tooltip>
    ),
};
