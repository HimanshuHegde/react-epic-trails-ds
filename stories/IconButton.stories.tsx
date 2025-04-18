import type { Meta, StoryObj } from "@storybook/react";
import { Icon } from "@/components/Button";

const meta = {
    title: "Components/IconButton",
    component: Icon,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
    argTypes: {
        variant: { control: "radio", options: ["primary", "secondary"] },
        state: {
            control: "radio",
            options: ["default", "pressed", "hover", "disabled", "loading"],
        },
        size: {
            control: "radio",
            options: ["fit", "small", "medium", "large"],
        },
        icon: { control: "radio", options: ["left", "right"] },
        background: { control: "color" },
        label: { control: "text" },
        disabled: { control: "boolean" },
        onClick: { action: "clicked" },
    },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        label: "Click Me",
        variant: "primary",
        size: "medium",
        state: "default",
        icon: "right",
    },
};

export const Secondary: Story = {
    args: {
        label: "Learn More",
        variant: "secondary",
        size: "large",
        state: "default",
        icon: "left",
    },
};

export const Disabled: Story = {
    args: {
        label: "Unavailable",
        variant: "primary",
        size: "medium",
        state: "disabled",
        disabled: true,
    },
};

export const Loading: Story = {
    args: {
        label: "Loading...",
        variant: "secondary",
        size: "medium",
        state: "loading",
    },
};

export const CustomBackground: Story = {
    args: {
        label: "Colored",
        background: "#ff9f1c",
        size: "medium",
        variant: "primary",
        icon: "left",
    },
};
