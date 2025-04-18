import type { Meta, StoryObj } from "@storybook/react";
import ButtonGroup from "@/components/ButtonGroup/ButtonGroup"; // adjust path if necessary

const meta = {
    title: "Components/ButtonGroup",
    component: ButtonGroup,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
    argTypes: {
        buttonContent: { control: "text" },
        iconPosition: { control: "radio", options: ["left", "right"] },
        size: { control: "radio", options: ["small", "medium", "large"] },
        variant: { control: "radio", options: ["contained", "outlined"] },
        contentButtonSize: {
            control: "radio",
            options: ["fit", "small", "medium", "large"],
        },
        iconButtonSize: {
            control: "radio",
            options: ["fit", "small", "medium", "large"],
        },
        className: { control: "text" },
        contentButtonFunction: { action: "content button clicked" },
        iconButtonFunction: { action: "icon button clicked" },
    },
} satisfies Meta<typeof ButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ContainedWithLeftIcon: Story = {
    args: {
        buttonContent: "Submit",
        icon: "🚀",
        iconPosition: "left",
        size: "medium",
        variant: "contained",
        contentButtonSize: "medium",
        iconButtonSize: "small",
    },
};

export const OutlinedWithRightIcon: Story = {
    args: {
        buttonContent: "Next",
        icon: "➡️",
        iconPosition: "right",
        size: "small",
        variant: "outlined",
        contentButtonSize: "small",
        iconButtonSize: "fit",
    },
};

export const LargeButtons: Story = {
    args: {
        buttonContent: "Download",
        icon: "⬇️",
        iconPosition: "left",
        size: "large",
        variant: "contained",
        contentButtonSize: "large",
        iconButtonSize: "large",
    },
};

export const WithCustomClass: Story = {
    args: {
        buttonContent: "Upload",
        icon: "📤",
        iconPosition: "right",
        variant: "outlined",
        className: "custom-class",
    },
};
