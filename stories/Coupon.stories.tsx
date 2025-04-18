import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Coupon } from "@/components/Coupon"; // Adjust path if needed

const meta: Meta<typeof Coupon> = {
    title: "Components/Coupon",
    component: Coupon,
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
        children: "Use this coupon to get 20% off your next purchase!",
    },
};

export const PrimarySmall: Story = {
    render: () => (
        <Coupon label="NEW10" size="small" theme="primary">
            10% off on first order
        </Coupon>
    ),
};

export const SecondaryLarge: Story = {
    render: () => (
        <Coupon label="BIGDEAL" size="large" theme="secondary">
            Flat ₹500 off on orders above ₹1999
        </Coupon>
    ),
};

export const WithCustomClass: Story = {
    render: () => (
        <Coupon
            label="STYLE50"
            size="medium"
            theme="primary"
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-lg shadow-lg"
        >
            Extra 50% off on styles you love!
        </Coupon>
    ),
};
