import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { CheckBox } from "@/components/CheckBox";

const meta: Meta<typeof CheckBox> = {
    title: "Components/CheckBox",
    component: CheckBox,
    argTypes: {
        checked: { control: "boolean" },
        label: { control: "text" },
        info: { control: "text" },
        error: { control: "boolean" },
        disabled: { control: "boolean" },
        name: { control: "text" },
        value: { control: "text" },
        children: { control: "text" },
    },
};

export default meta;
type Story = StoryObj<typeof CheckBox>;

// ✅ Interactive with controls
export const Playground: Story = {
    args: {
        checked: false,
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
    render: () => <CheckBox label="Default checkbox" />,
};

export const Checked: Story = {
    render: () => <CheckBox label="Checked checkbox" checked />,
};

export const WithInfo: Story = {
    render: () => (
        <CheckBox
            label="Enable updates"
            info="You will receive email notifications."
        />
    ),
};

export const ErrorState: Story = {
    render: () => (
        <CheckBox
            label="Accept terms"
            error
            info="You must accept terms to continue."
        />
    ),
};

export const Disabled: Story = {
    render: () => (
        <CheckBox
            label="Disabled checkbox"
            disabled
            info="This option is currently unavailable."
        />
    ),
};

export const WithChildren: Story = {
    render: () => (
        <CheckBox label="Subscribe to newsletter">
            <span className="text-sm text-gray-500 ml-2">
                Includes promotions and updates
            </span>
        </CheckBox>
    ),
};
