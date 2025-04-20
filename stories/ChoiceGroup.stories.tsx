import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { ChoiceGroup } from "@/components/ChoiceGroup";

const meta: Meta<typeof ChoiceGroup> = {
    title: "Components/ChoiceGroup",
    component: ChoiceGroup,
    tags: ["autodocs"],
    argTypes: {
        label: { control: "text" },
        size: {
            control: "select",
            options: ["large", "medium", "small"],
        },
        className: { control: "text" },
        children: {
            control: false,
        },
    },
};

export default meta;
type Story = StoryObj<typeof ChoiceGroup>;

// 🎛️ Playground with controls
export const Playground: Story = {
    args: {
        label: "Select a size",
        size: "large",
        className: "p-4",
        children: [
            <label>
                <input type="radio" name="choice" value="1" className="mr-2" />
                Option 1
            </label>,
            <label>
                <input type="radio" name="choice" value="2" className="mr-2" />
                Option 2
            </label>,
            <label>
                <input type="radio" name="choice" value="3" className="mr-2" />
                Option 3
            </label>,
        ],
    },
};

// 📏 Large header label
export const Large: Story = {
    render: (args) => (
        <ChoiceGroup label="Large Label" size="large" className="p-4" {...args}>
            <label>
                <input type="radio" name="choice" value="1" className="mr-2" />
                Option 1
            </label>
            <label>
                <input type="radio" name="choice" value="2" className="mr-2" />
                Option 2
            </label>
            <label>
                <input type="radio" name="choice" value="3" className="mr-2" />
                Option 3
            </label>
        </ChoiceGroup>
    ),
};

// 📐 Medium label
export const Medium: Story = {
    render: (args) => (
        <ChoiceGroup label="Medium Label" size="medium" className="p-4" {...args}>
            <label>
                <input type="radio" name="choice" value="1" className="mr-2" />
                Option 1
            </label>
            <label>
                <input type="radio" name="choice" value="2" className="mr-2" />
                Option 2
            </label>
            <label>
                <input type="radio" name="choice" value="3" className="mr-2" />
                Option 3
            </label>
        </ChoiceGroup>
    ),
};

// 🪶 Small label
export const Small: Story = {
    render: (args) => (
        <ChoiceGroup label="Small Label" size="small" className="p-4" {...args}>
            <label>
                <input type="radio" name="choice" value="1" className="mr-2" />
                Option 1
            </label>
            <label>
                <input type="radio" name="choice" value="2" className="mr-2" />
                Option 2
            </label>
            <label>
                <input type="radio" name="choice" value="3" className="mr-2" />
                Option 3
            </label>
        </ChoiceGroup>
    ),
};

// ❌ No label
export const WithoutLabel: Story = {
    render: (args) => (
        <ChoiceGroup size="medium" className="p-4" {...args}>
            <label>
                <input type="radio" name="choice" value="1" className="mr-2" />
                Option 1
            </label>
            <label>
                <input type="radio" name="choice" value="2" className="mr-2" />
                Option 2
            </label>
            <label>
                <input type="radio" name="choice" value="3" className="mr-2" />
                Option 3
            </label>
        </ChoiceGroup>
    ),
};
