import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Tile } from "@/components/Tile";

const meta: Meta<typeof Tile> = {
    title: "Components/Tile",
    component: Tile,
    tags: ["autodocs"],
    argTypes: {
        className: { control: "text" },
    },
};

export default meta;
type Story = StoryObj<typeof Tile>;

export const Default: Story = {
    args: {
        children: "This is a default tile",
    },
};

export const CustomClass: Story = {
    args: {
        className: "bg-gray-800 text-yellow-400",
        children: "Tile with a custom background and text color",
    },
};

export const WithLongText: Story = {
    args: {
        children: (
            <>
                This is a tile with a lot of content inside. You can use it to
                display more detailed information or large sections of text. The
                tile will still look great with any content you add.
            </>
        ),
    },
};
