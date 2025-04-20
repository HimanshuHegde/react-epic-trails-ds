import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
    MobileDialog,
    MobileDialogContent,
    MobileDialogTrigger,
} from "@/components/MobileDialog";

const meta: Meta<typeof MobileDialog> = {
    title: "Components/MobileDialog",
    tags: ["autodocs"],
    component: MobileDialog,
};

export default meta;
type Story = StoryObj<typeof MobileDialog>;

// A full example combining trigger, dialog, and content
const DialogExample = ({
    triggerText = "Open Dialog",
    title = "Mobile Dialog Title",
    content = "This is the content inside the dialog.",
    className = "",
}: {
    triggerText?: string;
    title?: string;
    content?: string;
    className?: string;
}) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <MobileDialog className={className}>
                <MobileDialogTrigger className="cursor-pointer">
                    {triggerText}
                </MobileDialogTrigger>

                {
                    <MobileDialogContent title={title}>
                        <p>{content}</p>
                    </MobileDialogContent>
                }
            </MobileDialog>
        </>
    );
};

export const Default: Story = {
    render: () => (
        <DialogExample
            triggerText="Open Mobile Dialog"
            title="Hello from Mobile"
            content="This is some mobile dialog content."
        />
    ),
};
