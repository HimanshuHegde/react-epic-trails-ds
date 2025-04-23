import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { CheckBox } from "@/components/CheckBox";
import { fn } from "@storybook/test";

const meta: Meta<typeof CheckBox> = {
    title: "Components/CheckBox",
    component: CheckBox,
    tags: ["autodocs"],
    argTypes: {
        checked: { control: "boolean" },
        label: { control: "text" },
        info: { control: "text" },
        error: { control: "boolean" },
        disabled: { control: "boolean" },
        name: { control: "text" },
        value: { control: "text" },
        children: { control: "text" },
        onChange: { action: "change" },
    },
};

export default meta;
type Story = StoryObj<typeof CheckBox>;

// ✅ Interactive with controls
export const Playground: Story = {
    args: {
        label: "I agree to the terms",
        info: "You can read the terms and conditions here.",
        error: false,
        disabled: false,
        name: "terms",
        value: "agree",
        children: "",
    },
};

// ✅ Static demos below

export const Default: Story = {
    args: {
        label: "Default Checkbox",
    },
};

export const Checked: Story = {
    args: {
        label: "Checked checkbox",
        checked: true,
    },
};

export const WithInfo: Story = {
    args: {
        label: "Enable updates",
        info: "You will receive email notifications.",
    },
};

export const ErrorState: Story = {
    args: {
        label: "Accept terms",
        error: true,
        info: "You must accept terms to continue.",
    },
};

export const Disabled: Story = {
    args: {
        label: "Diabled checkbox",
        disabled: true,
        info: "This option is currently unavailable.",
    },
};

export const WithChildren: Story = {
    render: (args) => (
        <CheckBox label="Subscribe to newsletter" {...args}>
            <span className="text-sm text-gray-500 ml-2">
                Includes promotions and updates
            </span>
        </CheckBox>
    ),
};
