import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Dialogue } from "@/components/Dialogue";
import { RectButton } from "@/components/Button"; // <-- Assuming you have this

const meta: Meta<typeof Dialogue> = {
    title: "Components/Dialogue",
    component: Dialogue,
    tags: ["autodocs"],
    argTypes: {
        title: { control: "text" },
        description: { control: "text" },
        children: { control: false },
        image: { control: false },
        imagePosition: {
            control: "select",
            options: ["up", "down", ""],
        },
    },
};

export default meta;
type Story = StoryObj<typeof Dialogue>;

export const Playground: Story = {
    args: {
        title: "Welcome to Dialogue",
        description: "This is a customizable dialog box component.",
        image: <img src="https://placehold.co/150" alt="placeholder" />,
        imagePosition: "up",
    },
    render: (args) => {
        return (
            <Dialogue {...args}>
                <RectButton variant="primary">Primary</RectButton>
                <RectButton variant="secondary">Secondary</RectButton>
            </Dialogue>
        );
    },
};

export const ImageUp: Story = {
    args: {
        title: "Image at Top",
        description: "This dialogue has its image at the top.",
        image: <img src="https://placehold.co/150" alt="Top Image" />,
        imagePosition: "up",
    },
    render: (args) => {
        return (
            <Dialogue {...args}>
                <RectButton variant="primary">Primary</RectButton>
                <RectButton variant="secondary">Secondary</RectButton>
            </Dialogue>
        );
    },
};

export const ImageDown: Story = {
    args: {
        title: "Image at Bottom",
        description: "The image appears below the content.",
        image: <img src="https://placehold.co/150" alt="Bottom Image" />,
        imagePosition: "down",
    },
    render: (args) => {
        return (
            <Dialogue {...args}>
                <RectButton variant="primary">Primary</RectButton>
                <RectButton variant="secondary">Secondary</RectButton>
            </Dialogue>
        );
    },
};

export const NoImage: Story = {
    args: {
        title: "Simple Dialogue",
        description: "No image is shown here.",
    },
    render: (args) => (
        <Dialogue {...args}>
            <RectButton variant="primary">Primary</RectButton>
            <RectButton variant="secondary">Secondary</RectButton>
        </Dialogue>
    ),
};
