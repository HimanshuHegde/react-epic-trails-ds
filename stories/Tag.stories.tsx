import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Tag } from "@/components/Tag";

const meta: Meta<typeof Tag> = {
    title: "Components/Tag",
    component: Tag,
    tags: ["autodocs"],
    argTypes: {
        variant: {
            control: "select",
            options: [
                "primary",
                "secondary",
                "success",
                "danger",
                "warning",
                "info",
                "neutral",
            ],
        },
    },
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const Default: Story = {
    args: {
        children: "Default Tag",
        variant: "neutral",
    },
};

export const AllVariants: Story = {
    render: () => (
        <div className="flex flex-wrap gap-4">
            {[
                "primary",
                "secondary",
                "success",
                "danger",
                "warning",
                "info",
                "neutral",
            ].map((variant: any) => (
                <Tag key={variant} variant={variant}>
                    {variant.charAt(0).toUpperCase() + variant.slice(1)}
                </Tag>
            ))}
        </div>
    ),
};
