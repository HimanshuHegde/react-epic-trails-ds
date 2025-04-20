import type { Meta, StoryObj } from "@storybook/react";
import { TypeDoc } from "@/components/Button";

const meta = {
    title: "Components/TypeDoc",
    component: TypeDoc,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
    argTypes: {
        icon: { control: "radio", options: ["left", "right"] },
        size: {
            control: "radio",
            options: ["fit", "small", "medium", "large"],
        },
        state: {
            control: "radio",
            options: ["default", "pressed", "hover", "disabled", "loading"],
        },
        background: { control: "color" },
        disabled: { control: "boolean" },
        buttonLabel: { control: "text" },
        label: { control: "text" },
    },
} satisfies Meta<typeof TypeDoc>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        buttonLabel: "Submit",
        label: "Agree to terms and condition",
        icon: "left",
        size: "medium",
        state: "default",
    },
};

export const Disabled: Story = {
    args: {
        buttonLabel: "Disabled",
        disabled: true,
        state: "disabled",
    },
};
