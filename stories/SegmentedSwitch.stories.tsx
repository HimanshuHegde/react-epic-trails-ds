import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { SegmentedSwitch } from "@/components/SegmentedSwitch";

const meta: Meta<typeof SegmentedSwitch> = {
    title: "Components/SegmentedSwitch",
    component: SegmentedSwitch,
    tags: ["autodocs"],
    argTypes: {
        options: { control: "object" },
        defaultSelected: { control: "text" },
        className: { control: "text" },
        onChange: { action: "changed" },
    },
};

export default meta;
type Story = StoryObj<typeof SegmentedSwitch>;

export const Default: Story = {
    args: {
        options: ["Option A", "Option B", "Option C"],
        defaultSelected: "Option B",
        className: "",
    },
    render: (args) => {
        const [selected, setSelected] = useState(args.defaultSelected);

        return (
            <div>
                <SegmentedSwitch
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
