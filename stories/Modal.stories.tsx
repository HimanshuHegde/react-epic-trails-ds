import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Modal, ModalHeader } from "@/components/Modal";
import { RectButton } from "@/components/Button";
import { fn } from "@storybook/test";

const meta: Meta<typeof Modal> = {
    title: "Components/Modal",
    component: Modal,
    tags: ["autodocs"],
    argTypes: {
        size: {
            control: "select",
            options: ["small", "medium", "large"],
        },
        hasCloseButton: { control: "boolean" },
        title: { control: "text" },
        description: { control: "text" },
        showBack: { control: "boolean" },
        showSection: { control: "boolean" },
        fixedFooter: { control: "boolean" },
        labelClose: { control: "text" },
    },
    args:{
        onClose: fn(),
        onBack: fn(),
    }
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
    args: {
        size: "medium",
        hasCloseButton: true,
        title: "Example Modal",
        description: "This is a description of the modal.",
        labelClose: "Close",
        showBack: false,
        showSection: true,
        fixedFooter: false,
    },
    render: (args) => {
        const [open, setOpen] = useState(false);

        return (
            <>
                <RectButton onClick={() => setOpen(true)}>Open Modal</RectButton>
                {open && (
                    <Modal
                        {...args}
                        onClose={() => setOpen(false)}
                        onBack={
                            args.showBack
                                ? () => alert("Back clicked!")
                                : undefined
                        }
                        footer={
                            <div className="flex justify-end gap-2 p-4">
                                <RectButton
                                    variant="secondary"
                                    onClick={() => setOpen(false)}
                                >
                                    Cancel
                                </RectButton>
                                <RectButton onClick={() => setOpen(false)}>
                                    Confirm
                                </RectButton>
                            </div>
                        }
                    >
                        {args.showSection && (
                            <div className="p-4">
                                <ModalHeader
                                    title={args.title}
                                    description={args.description}
                                />
                            </div>
                        )}
                        <div className="p-4">
                            <p>This is the modal content area.</p>
                        </div>
                    </Modal>
                )}
            </>
        );
    },
};
