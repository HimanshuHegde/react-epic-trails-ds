import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Coupon } from "@/components/Coupon"; // Adjust path if needed

const meta: Meta<typeof Coupon> = {
    title: "Components/Coupon",
    component: Coupon,
    tags: ["autodocs"],
    argTypes: {
        label: { control: "text" },
        size: {
            control: "select",
            options: ["small", "medium", "large"],
        },
        theme: {
            control: "select",
            options: ["primary", "secondary"],
        },
        className: { control: "text" },
        children: { control: "text" },
    },
};

export default meta;
type Story = StoryObj<typeof Coupon>;

export const Playground: Story = {
    args: {
        label: "SAVE20",
        size: "medium",
        theme: "primary",
    },
};

export const PrimarySmall: Story = {
    args: {
        label: "NEW10",
        size:"small",
        theme:"primary"
    },
    render: (args) => <Coupon {...args}></Coupon>,
};

export const SecondaryLarge: Story = {
    args: {
        label: "BIGDEAL",
        size: "large",
        theme: "secondary"
    },
    render: (args) => (
        <Coupon {...args}></Coupon>
    ),
};

export const WithCustomClass: Story = {
    args: {
        label: "FIFTY50",
        size:"medium",
        theme:"primary",
        className:"bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-lg shadow-lg"
    },
    render: (args) => (
        <Coupon
            {...args}
        ></Coupon>
    ),
};
