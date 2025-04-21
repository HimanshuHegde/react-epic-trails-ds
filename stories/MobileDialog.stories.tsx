import React from "react";
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

export const Default: Story = {
    render: (args) => {
        return (
            <MobileDialog className={args.className}>
                <MobileDialogTrigger className="cursor-pointer">
                    Open Mobile Dialog
                </MobileDialogTrigger>
                <MobileDialogContent title={"Title of Dialog"}>
                    <p>Content of dialog</p>
                </MobileDialogContent>
            </MobileDialog>
        );
    },
};
