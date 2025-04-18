import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { TextArea } from "@/components/TextArea";

const meta: Meta<typeof TextArea> = {
    title: "Components/TextArea",
    component: TextArea,
    tags: ["autodocs"],
    argTypes: {
        placeholder: { control: "text" },
        disabled: { control: "boolean" },
        readOnly: { control: "boolean" },
        value: { control: "text" },
    },
};

export default meta;
type Story = StoryObj<typeof TextArea>;

export const Default: Story = {
    args: {
        placeholder: "Write your message here...",
    },
};

export const Filled: Story = {
    args: {
        value: "This is some sample text inside the TextArea.",
    },
};

export const Disabled: Story = {
    args: {
        placeholder: "Disabled TextArea",
        disabled: true,
    },
};

export const ReadOnly: Story = {
    args: {
        value: "This TextArea is read-only.",
        readOnly: true,
    },
};
