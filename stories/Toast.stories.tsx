import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { ToastContainer, PositionGroup } from "@/components/Toast";

const meta: Meta<typeof ToastContainer> = {
    title: "Components/Toast",
    component: ToastContainer,
    tags: ["autodocs"],
    argTypes: {
        toasts: { control: "object" },
        onDismiss: { action: "dismissed" },
    },
};

export default meta;
type Story = StoryObj<typeof ToastContainer>;

export const Default: Story = {
    args: {
        toasts: [
            {
                id: "1",
                message: "This is a success toast!",
                type: "success",
                duration: 3000,
                position: "top-right",
                closable: true,
            },
            {
                id: "2",
                message: "This is an error toast!",
                type: "error",
                duration: 3000,
                position: "bottom-left",
                closable: true,
            },
        ],
        onDismiss: (id) => {
            console.log(`Dismissed toast with id: ${id}`);
        },
    },
};

export const ToastWithCustomDuration: Story = {
    args: {
        toasts: [
            {
                id: "1",
                message: "This toast will stay for 10 seconds!",
                type: "info",
                duration: 10000,
                position: "top-center",
                closable: true,
            },
        ],
        onDismiss: (id) => {
            console.log(`Dismissed toast with id: ${id}`);
        },
    },
};

export const MultipleToasts: Story = {
    args: {
        toasts: [
            {
                id: "1",
                message: "Success message",
                type: "success",
                duration: 3000,
                position: "top-left",
                closable: true,
            },
            {
                id: "2",
                message: "Warning message",
                type: "warning",
                duration: 3000,
                position: "bottom-right",
                closable: true,
            },
            {
                id: "3",
                message: "Error message",
                type: "error",
                duration: 3000,
                position: "top-right",
                closable: true,
            },
        ],
        onDismiss: (id) => {
            console.log(`Dismissed toast with id: ${id}`);
        },
    },
};