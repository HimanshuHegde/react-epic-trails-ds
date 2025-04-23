import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { InputSelect } from "@/components/InputSelect";

const meta: Meta<typeof InputSelect> = {
    title: "Components/InputSelect",
    component: InputSelect,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
    argTypes: {
        options: {
            control: "object",
            defaultValue: ["Option 1", "Option 2", "Option 3"],
        },
        value: {
            control: "text",
        },
        placeholder: {
            control: "text",
            defaultValue: "Select an option",
        },
        readonly: {
            control: "boolean",
        },
        className: {
            control: "text",
        },
        onChange: { action: "changed" },
    },
};

export default meta;
type Story = StoryObj<typeof InputSelect>;

export const Playground: Story = {
    args: {
        options: ["Option 1", "Option 2", "Option 3"],
        value: "Option 2",
    },
    render: (args: any) => {
        const [selected, setSelected] = useState(args.value || "");

        return (
            <InputSelect
                value={selected}
                onChange={(val) => {
                    setSelected(val);
                    args.onChange?.(val);
                }}
                {...args}
            />
        );
    },
};

export const ReadOnlyExample: Story = {
    args: {
        options: ["Apple", "Banana", "Cherry"],
        value: "Banana",
        onChange: () => {},
        readonly: true,
    },
    render: (args) => <InputSelect {...args} />,
};

export const WithCustomClass: Story = {
    args: {
        options: ["Small", "Medium", "Large"],
        value: "Medium",
        onChange: () => {},
        className: "border border-black",
    },
    render: (args) => <InputSelect {...args} />,
};
