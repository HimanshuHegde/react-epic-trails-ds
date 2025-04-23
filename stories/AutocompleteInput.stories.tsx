import type { Meta, StoryObj } from "@storybook/react";
import { AutoComplete } from "@/components/Input";
import { fn } from "@storybook/test";

const meta: Meta<typeof AutoComplete> = {
    title: "Components/AutoComplete",
    component: AutoComplete,
    tags: ["autodocs"],
    argTypes: {
        Size: {
            control: { type: "select" },
            options: ["small", "medium", "large"],
        },
        State: {
            control: { type: "select" },
            options: ["Default", "Error", "Success", "Loading"],
        },
        Label: { control: "text" },
        Hint: { control: "text" },
        curved: { control: "boolean" },
        defaultValue: { control: "text" },
        input: { control: "object" },
        placeholder: { control: "text" },
    },
    args: {
        onChange: fn(),
    }
};

export default meta;
type Story = StoryObj<typeof AutoComplete>;

export const Default: Story = {
    args: {
        Label: "Search",
        Hint: "Start typing to see suggestions...",
        Size: "medium",
        State: "Default",
        input: ["Apple", "Banana", "Cherry", "Date", "Elderberry"],
        curved: false,
        placeholder: "Select a fruit",
    },
};

export const Error: Story = {
    args: {
        Label: "Search Fruits",
        Hint: "Something went wrong",
        Size: "medium",
        State: "Error",
        input: ["Apple", "Banana", "Cherry"],
        curved: false,
    },
};

export const Success: Story = {
    args: {
        Label: "Select Fruit",
        Hint: "Looks good!",
        Size: "large",
        State: "Success",
        input: ["Mango", "Orange", "Papaya"],
    },
};

export const Loading: Story = {
    args: {
        Label: "Loading...",
        Size: "small",
        State: "Loading",
        input: [],
    },
};

export const WithCurvedCorners: Story = {
    args: {
        Label: "Curved AutoComplete",
        Hint: "Stylish and rounded",
        Size: "medium",
        State: "Default",
        input: ["India", "Indonesia", "Iceland"],
        curved: true,
    },
};
