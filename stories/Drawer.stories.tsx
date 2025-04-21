import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Drawer, DrawerPosition } from "@/components/Drawer";
import { DrawerProvider, useDrawer } from "@/components/Drawer";
import { RectButton } from "@/components";

const meta: Meta<typeof Drawer> = {
    title: "Components/Drawer",
    tags: ["autodocs"],
    component: Drawer,
    parameters: {
        layout: "centered",
    },
};

export default meta;
type Story = StoryObj<typeof Drawer>;

export const Default: Story = {
    render: () => {
        const [open, setOpen] = useState(false);
        return (
            <div className="text-white p-6">
                <button
                    onClick={() => setOpen(true)}
                    className="bg-gray-800 px-4 py-2 rounded"
                >
                    Open Drawer
                </button>

                <Drawer
                    isOpen={open}
                    onClose={() => setOpen(false)}
                    position="right"
                    size="md"
                    title="Basic Drawer"
                >
                    <div className="space-y-3">
                        <p>This is a simple drawer.</p>
                        <div className="flex justify-center">
                        <RectButton
                            variant="primary"
                            size="small"
                            onClick={() => setOpen(false)}
                        >
                            Close
                        </RectButton>
                        </div>
                    </div>
                </Drawer>
            </div>
        );
    },
};

export const WithControls: Story = {
    args: {
        position: "right" as DrawerPosition,
        size: "md",
        title: "Custom Drawer",
    },
    render: ({ position, size, title }) => {
        const [open, setOpen] = useState(false);
        return (
            <div className=" text-white p-6">
                <button
                    onClick={() => setOpen(true)}
                    className="bg-gray-800 px-4 py-2 rounded"
                >
                    Open {position} Drawer ({size})
                </button>

                <Drawer
                    isOpen={open}
                    onClose={() => setOpen(false)}
                    position={position}
                    size={size}
                    title={title}
                >
                    <div className="space-y-3">
                        <p>
                            This drawer opens from the{" "}
                            <strong>{position}</strong> with size{" "}
                            <strong>{size}</strong>.
                        </p>
                        <div className="flex justify-center">
                        <RectButton
                            variant="primary"
                            size="small"
                            onClick={() => setOpen(false)}
                        >
                            Close
                        </RectButton>
                        </div>
                    </div>
                </Drawer>
            </div>
        );
    },
    argTypes: {
        position: {
            control: "select",
            options: ["left", "right", "top", "bottom"],
        },
        size: {
            control: "select",
            options: ["sm", "md", "lg", "xl", "full"],
        },
        title: { control: "text" },
    },
};

export const WithContextAPI: Story = {
    render: () => (
        <DrawerProvider>
            <DrawerContextStory />
        </DrawerProvider>
    ),
};

const DrawerContextStory: React.FC = () => {
    const { open } = useDrawer();

    return (
        <div className=" text-white p-6">
            <button
                className="bg-gray-800 px-4 py-2 rounded"
                onClick={() =>
                    open(
                        <div className="space-y-2">
                            <p>This drawer was opened via context API.</p>
                        </div>,
                        "left",
                        "Context Drawer",
                        "sm"
                    )
                }
            >
                Open Drawer with Context
            </button>
        </div>
    );
};
