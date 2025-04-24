import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import EmptyState from "@/components/EmptyState/EmptyState";
import { fn } from "@storybook/test";
import EmptyStateIllustration from "@/components/EmptyState/EmptyStateIllustration";

const meta: Meta<typeof EmptyState> = {
    title: "Components/EmptyStates",
    component: EmptyState,
    tags: ["autodocs"],
    argTypes: {
        action: { control: false },
        children: { control: false },
        description: { control: "text" },
        label: { control: "text" },
        message: { control: "text" },
        onClick: { control: false },
    },
    args: {
        message: "Sorry, we couldn’t find that connection.",
        label: "Label",
        onClick: fn(),
        children: <EmptyStateIllustration />,
    },
};

export default meta;
type Story = StoryObj<typeof EmptyState>;

export const OnlyMessage: Story = {
    args: {
        description: undefined,
        action: "none",
    },
};

export const WithPrimaryButton: Story = {
    args: {
        description: undefined,
        action: "primary",
    },
};

export const WithSecondaryButton: Story = {
    args: {
        description: undefined,
        action: "secondary",
    },
};

export const WithDescriptionOnly: Story = {
    args: {
        description:
            "Try changing up your search a bit. We’ll try harder next time.",
        action: "none",
    },
};

export const FullPrimary: Story = {
    args: {
        description:
            "Try changing up your search a bit. We’ll try harder next time.",
        action: "primary",
    },
};

export const FullSecondary: Story = {
    args: {
        description:
            "Try changing up your search a bit. We’ll try harder next time.",
        action: "secondary",
    },
};
