import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { HorizontalScroll } from "@/components/HorizontalScroll";

const meta: Meta<typeof HorizontalScroll> = {
    title: "Components/HorizontalScroll",
    component: HorizontalScroll,
    tags: ["autodocs"],
    argTypes: {
        showArrows: { control: "boolean" },
        children: {
            control: false,
        },
    },
};

export default meta;
type Story = StoryObj<typeof HorizontalScroll>;

// Helper component for children
const ScrollItems = () => (
    <div className="flex gap-4">
        {Array.from({ length:  30}).map((_, i) => (
            <div
                key={i}
                className="!w-48 !h-48 bg-blue-500 text-white flex items-center justify-center "
            >
                Item {i + 1}
            </div>
        ))}
    </div>
);

export const Playground: Story = {
    args: {
        showArrows: true,
        children: <ScrollItems />,
    },
};

export const Default: Story = {
    render: () => (
        <div className="w-full max-w-3xl mx-auto">
            <HorizontalScroll showArrows>
                <ScrollItems />
            </HorizontalScroll>
        </div>
    ),
};

export const WithoutArrows: Story = {
    render: () => (
        <div className="w-full max-w-3xl mx-auto">
            <HorizontalScroll showArrows={false}>
                <ScrollItems />
            </HorizontalScroll>
        </div>
    ),
};
