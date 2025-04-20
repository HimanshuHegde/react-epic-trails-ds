import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Truncate } from "@/components/Truncate";

const meta: Meta<typeof Truncate> = {
    title: "Components/Truncate",
    component: Truncate,
    tags: ["autodocs"],
    argTypes: {
        maxWidth: {
            control: "text",
            description: "CSS max-width value (e.g., '200px', '20rem')",
            defaultValue: "200px",
        },
        className: {
            control: "text",
            description: "Custom className",
        },
        children: {
            control: "text",
            defaultValue:
                "This is a long text that will be truncated when it exceeds the maximum width.",
        },
    },
};

export default meta;
type Story = StoryObj<typeof Truncate>;

export const Default: Story = {
    args: {
        maxWidth: "200px",
        className: "bg-gray-100 p-2",
        children:
            "This is a long text that will be truncated when it exceeds the maximum width.",
    },
    render: (args) => (
        <Truncate maxWidth={args.maxWidth} className={args.className}>
            {args.children}
        </Truncate>
    ),
};
