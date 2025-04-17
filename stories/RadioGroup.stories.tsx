import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { RadioGroup } from "@/components/RadioGroup";

const meta: Meta<typeof RadioGroup> = {
    title: "Components/RadioGroup",
    component: RadioGroup,
    argTypes: {
        name: { control: "text" },
        options: { control: "object" },
        defaultSelected: { control: "text" },
        className: { control: "text" },
        onChange: { action: "changed" },
    },
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
    args: {
        name: "choices",
        options: ["Option 1", "Option 2", "Option 3"],
        defaultSelected: "Option 2",
        className: "",
    },
    render: (args) => {
        const [selected, setSelected] = useState(args.defaultSelected);

        return (
            <div>
                <RadioGroup
                    {...args}
                    onChange={(val) => {
                        setSelected(val);
                        args.onChange?.(val);
                    }}
                />
                <p className="mt-4 text-white">Selected: {selected}</p>
            </div>
        );
    },
};
