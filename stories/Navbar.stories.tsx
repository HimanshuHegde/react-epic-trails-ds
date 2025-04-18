import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Navbar } from "@/components/Navbar";
import { RectButton } from "@/components/Button";

const meta: Meta<typeof Navbar> = {
    title: "Components/Navbar",
    component: Navbar,
    argTypes: {
        bottomStyle: {
            control: "select",
            options: ["shadow", "border", "none"],
        },
        transparentBgAtTop: { control: "boolean" },
        hideOnScroll: { control: "boolean" },
        openTitle: { control: "text" },
        logo: {
            control: false,
        },
        actions: {
            control: false,
        },
    },
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Default: Story = {
    args: {
        openTitle: "Menu",
        hideOnScroll: false,
        bottomStyle: "shadow",
        transparentBgAtTop: false,
        links: [
            { label: "Home", href: "#" },
            { label: "About", href: "#about" },
            { label: "Contact", href: "#contact" },
        ],
        logo: <span className="text-white font-bold text-lg">MyLogo</span>,
        actions: <RectButton size="small">Login</RectButton>,
    },
    render: (args) => (
        <div className="min-h-[200vh] bg-gray-900 text-white">
            <Navbar {...args} />
            <main className="p-8">
                <h1 className="text-3xl font-bold">Welcome to the Page</h1>
                <p className="mt-4">
                    Scroll to test `hideOnScroll` and `transparentBgAtTop`
                    behaviors.
                </p>
            </main>
        </div>
    ),
};
