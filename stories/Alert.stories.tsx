import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Alert } from "@/components/Alert";

const meta = {
    title: "Components/Alert",
    component: Alert,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        variant: {
            control: { type: "select" },
            options: ["default", "success", "warning", "info", "critical"],
        },
        dismissible: { control: "boolean" },
        actionText: { control: "text" },
        linkText: { control: "text" },
        linkHref: { control: "text" },
        playground: { control: "boolean" },
        rtl: { control: "boolean" },
    },
    args: {
        onDismiss: fn(),
        onAction: fn(),
    },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        variant: "default",
        children: "This is a default alert.",
    },
};

export const SuccessWithDismiss: Story = {
    args: {
        variant: "success",
        dismissible: true,
        children: "Operation completed successfully!",
    },
};

export const ErrorWithAction: Story = {
    args: {
        variant: "error",
        actionText: "Retry",
        children: "Something went wrong.",
    },
};

export const AlertWithLink: Story = {
    args: {
        variant: "info",
        linkText: "Learn more",
        linkHref: "https://example.com",
        children: "This alert has a helpful link.",
    },
};

export const RTLPlayground: Story = {
    args: {
        variant: "warning",
        rtl: true,
        playground: true,
        children: "هذا تنبيه RTL مع إعدادات الملعب.",
    },
};
