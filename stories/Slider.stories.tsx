import type { Meta, StoryObj } from "@storybook/react";
import { Slider } from "@/components/Slider";
import React, { useState } from "react";
import { fn } from "@storybook/test";

const meta: Meta<typeof Slider> = {
    title: "Components/Slider",
    component: Slider,
    tags: ["autodocs"],
    argTypes: {
        min: { control: "number" },
        max: { control: "number" },
        step: { control: "number" },
        value: { control: "number" },
        onChange: { action: "changed" },
    },
    args: {
        onChange: fn()
    }
};

export default meta;
type Story = StoryObj<typeof Slider>;

// Default Slider
export const Default: Story = {
    args: {
        min: 0,
        max: 100,
        step: 1,
        value: 50,
    },
};

// Custom Range
export const CustomRange: Story = {
    args: {
        min: 10,
        max: 500,
        step: 10,
        value: 100,
    },
};

// Fine Steps
export const FineSteps: Story = {
    args: {
        min: 0,
        max: 1,
        step: 0.01,
        value: 0.5,
    },
};

// Controlled Slider with State
export const Controlled: Story = {
    render: () => {
        const [val, setVal] = useState(25);
        return (
            <div className="flex flex-col gap-2 w-64">
                <Slider
                    min={0}
                    max={100}
                    value={val}
                    onChange={(v) => {
                        setVal(v);
                        console.log("Value:", v);
                    }}
                />
                <span>Value: {val}</span>
            </div>
        );
    },
};
