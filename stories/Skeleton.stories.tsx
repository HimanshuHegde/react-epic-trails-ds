import type { Meta, StoryObj } from "@storybook/react";
import { Skeleton } from "@/components/Skeleton";

const meta: Meta<typeof Skeleton> = {
    title: "Components/Skeleton",
    component: Skeleton,
    tags: ["autodocs"],
    argTypes: {
        className: { control: "text" },
        style: { control: "object" },
    },
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

// Default Skeleton Block
export const Default: Story = {
    args: {
        className: "w-32 h-6 rounded",
    },
};

// Circle Skeleton (e.g., avatar placeholder)
export const Circle: Story = {
    args: {
        className: "w-10 h-10 rounded-full",
    },
};

// Full Width Skeleton (like input field or button)
export const FullWidth: Story = {
    args: {
        className: "w-full h-10 rounded",
    },
    render: (args) => (
        <div className="w-64">
            <Skeleton {...args} />
        </div>
    ),
};

// Custom Styled Skeleton
export const Custom: Story = {
    args: {
        className: "rounded",
        style: { width: "120px", height: "20px", backgroundColor: "#4c4c4c" },
    },
};
