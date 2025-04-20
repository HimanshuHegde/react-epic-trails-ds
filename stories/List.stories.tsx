import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Lists, ListItem } from "@/components/List";
import { CheckmarkCircle } from "@/components/icons";

const meta: Meta<typeof Lists> = {
    title: "Components/List",
    component: Lists,
    tags: ["autodocs"],
    argTypes: {
        type: {
            control: "select",
            options: ["primary", "secondary"],
        },
        size: {
            control: "select",
            options: ["small", "normal", "large"],
        },
        spaceAfter: {
            control: "select",
            options: ["none", "small", "medium", "large"],
        },
        spacing: {
            control: "select",
            options: ["200", "400", "600"],
        },
    },
};

export default meta;
type Story = StoryObj<typeof Lists>;

export const Default: Story = {
    args: {
        type: "primary",
        size: "normal",
        spaceAfter: "medium",
        spacing: "400",
    },
    render: (args) => (
        <Lists {...args}>
            <ListItem icon={<CheckmarkCircle />} label="Feature 1">
                Supports TypeScript and JSX
            </ListItem>
            <ListItem icon={<CheckmarkCircle />} label="Feature 2">
                Easily customizable
            </ListItem>
            <ListItem icon={<CheckmarkCircle />} label="Feature 3">
                Works with Storybook
            </ListItem>
        </Lists>
    ),
};

export const SecondaryList: Story = {
    args: {
        type: "secondary",
        size: "small",
        spaceAfter: "small",
        spacing: "200",
    },
    render: (args) => (
        <Lists {...args}>
            <ListItem icon={<span>🔹</span>} label="Point A">
                Lightweight
            </ListItem>
            <ListItem icon={<span>🔹</span>} label="Point B">
                Flexible layout
            </ListItem>
        </Lists>
    ),
};
