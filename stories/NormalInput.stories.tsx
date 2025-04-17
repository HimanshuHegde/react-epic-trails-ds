import type { Meta, StoryObj } from "@storybook/react";
import { NormalInput } from "@/components/Input";

const meta: Meta<typeof NormalInput> = {
    title: "Components/NormalInput",
    component: NormalInput,
    argTypes: {
        Size: {
            control: { type: "select" },
            options: ["small", "medium", "large", "fit"],
        },
        State: {
            control: { type: "select" },
            options: [
                "Default",
                "Active",
                "Correct",
                "ViewOnly",
                "Loading",
                "Disabled",
                "Incorrect",
            ],
        },
        Label: { control: "text" },
        Hint: { control: "text" },
        placeholder: { control: "text" },
        curved: { control: "boolean" },
        id: { control: "text" },
        value: { control: "text" },
    },
};

export default meta;
type Story = StoryObj<typeof NormalInput>;

export const Default: Story = {
    args: {
        Label: "Name",
        Hint: "Enter your full name",
        placeholder: "John Doe",
        Size: "medium",
        State: "Default",
        curved: true,
    },
};

export const Active: Story = {
    args: {
        Label: "Username",
        Hint: "You’re typing...",
        Size: "medium",
        State: "Active",
        placeholder: "johndoe123",
    },
};

export const Correct: Story = {
    args: {
        Label: "Email",
        Hint: "Looks good!",
        Size: "large",
        State: "Correct",
        placeholder: "you@example.com",
    },
};

export const Incorrect: Story = {
    args: {
        Label: "Password",
        Hint: "Must be at least 8 characters",
        Size: "medium",
        State: "Incorrect",
        placeholder: "••••••••",
    },
};

export const ViewOnly: Story = {
    args: {
        Label: "Account Type",
        Hint: "You cannot change this",
        Size: "fit",
        State: "ViewOnly",
        value: "Admin",
        curved: true,
    },
};

export const Loading: Story = {
    args: {
        Label: "Fetching...",
        Hint: "Please wait",
        Size: "small",
        State: "Loading",
        curved: false,
    },
};

export const Disabled: Story = {
    args: {
        Label: "Contact Number",
        Hint: "Editing disabled",
        Size: "medium",
        State: "Disabled",
        value: "9876543210",
        curved: true,
        disabled: true,
    },
};
