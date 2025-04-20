import type { Meta, StoryObj } from "@storybook/react";
import { ButtonGroup } from "@/components/ButtonGroup";
import {
    ChevronDownSharp,
    ChevronForward,
    CloudUpload,
} from "./../components/icons/Icons";

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
        variant: { control: "radio", options: ["primary", "secondary"] },
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

export const PrimaryWithLeftIcon: Story = {
    args: {
        buttonContent: "Submit",
        icon: <ChevronDownSharp color="white" />,
        iconPosition: "left",
        variant: "primary",
        contentButtonSize: "medium",
        iconButtonSize: "fit",
    },
};

export const SecondaryWithRightIcon: Story = {
    args: {
        buttonContent: "Next",
        icon: <ChevronForward color="black" />,
        iconPosition: "right",
        variant: "secondary",
        contentButtonSize: "small",
        iconButtonSize: "fit",
    },
};

export const LargeButtons: Story = {
    args: {
        buttonContent: "Download",
        icon: <ChevronDownSharp color="white" />,
        iconPosition: "left",
        variant: "primary",
        contentButtonSize: "large",
        iconButtonSize: "large",
    },
};

// export const WithCustomClass: Story = {
//     args: {
//         buttonContent: "Upload",
//         icon: <CloudUpload color="white" />,
//         iconPosition: "right",
//         variant: "primary",
//         className: "custom-class",
//     },
// };
