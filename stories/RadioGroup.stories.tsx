import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { RadioGroup } from "@/components/RadioGroup";
import { fn } from "@storybook/test";

const meta: Meta<typeof RadioGroup> = {
    title: "Components/RadioGroup",
    component: RadioGroup,
    tags: ["autodocs"],
    argTypes: {
        name: { control: "text" },
        options: { control: "object" },
        defaultSelected: { control: "text" },
        className: { control: "text" },
        onChange: { action: "changed" },
    },
    args:{
        onChange: fn(),
    }
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
    args: {
        name: "choices",
        options: [
            { label: "Option 1", value: "option1" },
            { label: "Option 2", value: "option2" },
            { label: "Option 3", value: "option3" },
        ],
        defaultSelected: "option2",
        className: "",
    },
    render: (args) => {
        const [selected, setSelected] = useState(args.defaultSelected);

        return (
            <div>
                <RadioGroup
                    {...args}
                    onChange={(s) => {
                        setSelected(s);
                        args.onChange?.(s);
                    }}
                />
                <p className="mt-4 text-white">Selected: {selected}</p>
            </div>
        );
    },
};