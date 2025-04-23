import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/Popover";

const meta: Meta<typeof Popover> = {
    title: "Components/Popover",
    component: Popover,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
    argTypes: {
        sideOffset: {
            control: { type: "number", min: 0 },
            defaultValue: 8,
        },
        position: {
            control: { type: "select" },
            options: ["top", "right", "bottom", "left"],
            defaultValue: "bottom",
        },
    } as any,
    
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const Default: Story = {
    render: (args) => {
        const [open, setOpen] = useState(false);

        return (
            <Popover>
                <PopoverTrigger asChild>
                    <button
                        className="px-4 py-2 bg-blue-600 text-white rounded"
                        onClick={() => setOpen(!open)}
                    >
                        Toggle Popover
                    </button>
                </PopoverTrigger>
                {open && (
                    <PopoverContent
                        className="bg-white shadow p-4 rounded"
                        sideOffset={(args as any).sideOffset}
                    >
                        <div className="text-black w-40">
                            Hello from the popover content!
                        </div>
                    </PopoverContent>
                )}
            </Popover>
        );
    },
    args: {
        sideOffset: 8,
        position: "bottom",
    } as any,
};
