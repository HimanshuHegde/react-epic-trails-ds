import type { Meta, StoryObj } from "@storybook/react";
import { CalloutBanner } from "@/components/CalloutBanner";

const meta = {
    title: "Example/CalloutBanner",
    component: CalloutBanner,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
    argTypes: {
        title: {
            control: "text",
        },
        content: {
            control: "text",
        },
        imageUrl: {
            control: "text",
        },
        imagePosition: {
            control: "radio",
            options: ["left", "right"],
        },
        variant: {
            control: "select",
            options: ["default", "info", "warning", "error", "success"],
        },
        theme: {
            control: "radio",
            options: ["primary", "secondary"],
        },
        onClick: { action: "clicked" },
    },
} satisfies Meta<typeof CalloutBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: "Attention Needed",
        content: "Please make sure to check the latest update.",
        imageUrl: "https://placehold.co/150",
        imagePosition: "left",
        variant: "default",
        theme: "primary",
    },
};

export const InfoBanner: Story = {
    args: {
        title: "Information",
        content: "Your trial period is about to expire.",
        imageUrl: "https://placehold.co/150",
        imagePosition: "right",
        variant: "info",
        theme: "secondary",
    },
};

export const SuccessBanner: Story = {
    args: {
        title: "Success!",
        content: "Your data has been successfully submitted.",
        variant: "success",
        theme: "primary",
    },
};

export const WarningBannerWithClick: Story = {
    args: {
        title: "Warning",
        content: "Please review the warnings before continuing.",
        variant: "warning",
        onClick: () => console.log("CalloutBanner clicked"),
    },
};
