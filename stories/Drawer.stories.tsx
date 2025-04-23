import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Drawer, DrawerPosition } from "@/components/Drawer";
import { DrawerProvider, useDrawer } from "@/components/Drawer";
import { RectButton } from "@/components";
import { fn } from "@storybook/test";

const meta: Meta<typeof Drawer> = {
    title: "Components/Drawer",
    tags: ["autodocs"],
    component: Drawer,
    parameters: {
        layout: "centered",
    },
    argTypes: {
        position: {
            control: "select",
            options: ["left", "right", "top", "bottom"],
            description: "Position from which the drawer opens",
            defaultValue: "right",
        },
        size: {
            control: "select",
            options: ["sm", "md", "lg", "xl", "full"],
            description: "Size of the drawer",
            defaultValue: "md",
        },
        title: {
            control: "text",
            description: "Title displayed in the drawer header",
        },
        isOpen: {
            control: "boolean",
            description: "Whether the drawer is open",
        },
        className: {
            control: "text",
            description: "Additional CSS classes for the drawer",
        },
    },
    args:{
        onClose: fn(),
    }
};

export default meta;
type Story = StoryObj<typeof Drawer>;

export const Default: Story = {
    args: {
        position: "right",
        size: "md",
        title: "Basic Drawer"
    },
    render: (args) => {
        const [open, setOpen] = useState(false);
        return (
            <div className="text-white p-6">
                <button
                    onClick={() => setOpen(true)}
                    className="bg-gray-800 px-4 py-2 rounded"
                >
                    Open Drawer
                </button>

                <Drawer {...args} isOpen={open} onClose={() => setOpen(false)}>
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
        position: "right",
        size: "md",
        title: "Custom Drawer",
        className: "custom-drawer",
    },
    render: (args) => {
        const [open, setOpen] = useState(false);
        return (
            <div className="text-white p-6">
                <button
                    onClick={() => setOpen(true)}
                    className="bg-gray-800 px-4 py-2 rounded"
                >
                    Open {args.position} Drawer ({args.size})
                </button>

                <Drawer {...args} isOpen={open} onClose={() => setOpen(false)}>
                    <div className="space-y-3">
                        <p>
                            This drawer opens from the{" "}
                            <strong>{args.position}</strong> with size{" "}
                            <strong>{args.size}</strong>.
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
};

export const WithContextAPI: Story = {
    args: {
        position: "left",
        size: "sm",
        title: "Context Drawer",
    },
    render: (args) => (
        <DrawerProvider>
            <DrawerContextStory {...args} />
        </DrawerProvider>
    ),
};

interface DrawerContextStoryProps {
    position?: DrawerPosition;
    size?: any;
    title?: string;
    hasCloseButton?: boolean;
    hasOverlay?: boolean;
    closeOnOverlayClick?: boolean;
}

const DrawerContextStory: React.FC<DrawerContextStoryProps> = ({
    position = "left",
    size = "sm",
    title = "Context Drawer",
    hasCloseButton = true,
    hasOverlay = true,
    closeOnOverlayClick = true,
}) => {
    const { open } = useDrawer();

    return (
        <div className="text-white p-6">
            <button
                className="bg-gray-800 px-4 py-2 rounded"
                onClick={() =>
                    open(
                        <div className="space-y-2">
                            <p>This drawer was opened via context API.</p>
                            <p>
                                Position: <strong>{position}</strong>
                            </p>
                            <p>
                                Size: <strong>{size}</strong>
                            </p>
                            <p>
                                Has close button:{" "}
                                <strong>{hasCloseButton ? "Yes" : "No"}</strong>
                            </p>
                            <p>
                                Has overlay:{" "}
                                <strong>{hasOverlay ? "Yes" : "No"}</strong>
                            </p>
                            <p>
                                Close on overlay click:{" "}
                                <strong>
                                    {closeOnOverlayClick ? "Yes" : "No"}
                                </strong>
                            </p>
                        </div>,
                        position,
                        title,
                        size
                    )
                }
            >
                Open Drawer with Context
            </button>
        </div>
    );
};

// Playground story to test all properties
export const Playground: Story = {
    args: {
        position: "right",
        size: "md",
        title: "Playground Drawer",
        className: "",
    },
    render: (args) => {
        const [open, setOpen] = useState(false);
        return (
            <div className="text-white p-6">
                <button
                    onClick={() => setOpen(true)}
                    className="bg-gray-800 px-4 py-2 rounded hover:bg-gray-700 transition-colors"
                >
                    Open Playground Drawer
                </button>

                <Drawer {...args} isOpen={open} onClose={() => setOpen(false)}>
                    <div className="space-y-4 p-2">
                        <h3 className="text-lg font-medium">Drawer Content</h3>
                        <p>
                            Customize this drawer using the controls in the
                            Storybook panel.
                        </p>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Position: {args.position}</li>
                            <li>Size: {args.size}</li>
                        </ul>
                        <div className="flex justify-center pt-4">
                            <RectButton
                                variant="primary"
                                size="small"
                                onClick={() => setOpen(false)}
                            >
                                Close Drawer
                            </RectButton>
                        </div>
                    </div>
                </Drawer>
            </div>
        );
    },
};
