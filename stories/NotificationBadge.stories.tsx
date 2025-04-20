import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { NotificationBadge } from "@/components/NotificationBadge";

const meta: Meta<typeof NotificationBadge> = {
    title: "Components/NotificationBadge",
    component: NotificationBadge,
    tags: ["autodocs"],
    argTypes: {
        children: {
            control: "text",
            description: "Content inside the badge",
        },
        className: {
            control: "text",
            description: "Custom Tailwind or CSS classes",
        },
    },
};

export default meta;
type Story = StoryObj<typeof NotificationBadge>;

export const Default: Story = {
    args: {
        children: "3",
        className: "bg-red-500 text-white px-2 py-1 rounded-full text-sm",
    },
    render: (args) => (
        <div className="p-4">
            <NotificationBadge {...args} />
        </div>
    ),
};
