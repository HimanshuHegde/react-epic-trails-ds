import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { InputSelect } from "@/components/InputSelect";

const meta: Meta<typeof InputSelect> = {
    title: "Components/InputSelect",
    component: InputSelect,
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

const Wrapper = (args: any) => {
    const [selected, setSelected] = useState(args.value || "");

    return (
        <InputSelect
            {...args}
            value={selected}
            onChange={(val) => {
                setSelected(val);
                args.onChange?.(val);
            }}
        />
    );
};

export const Playground: Story = {
    render: (args) => <Wrapper {...args} />,
};

export const ReadOnlyExample: Story = {
    render: () => (
        <InputSelect
            options={["Apple", "Banana", "Cherry"]}
            value={"Banana"}
            onChange={() => {}}
            readonly={true}
        />
    ),
};

export const WithCustomClass: Story = {
    render: () => (
        <InputSelect
            options={["Small", "Medium", "Large"]}
            value={"Medium"}
            onChange={() => {}}
        />
    ),
};
