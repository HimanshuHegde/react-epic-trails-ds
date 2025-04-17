import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Separator } from "@/components/Separator";

const meta: Meta<typeof Separator> = {
    title: "Components/Separator",
    component: Separator,
    argTypes: {
        orientation: {
            control: "radio",
            options: ["horizontal", "vertical"],
        },
    },
};

export default meta;
type Story = StoryObj<typeof Separator>;

export const Horizontal: Story = {
    args: {
        orientation: "horizontal",
        className: "my-4 border-t border-gray-300",
    },
};

export const Vertical: Story = {
    args: {
      orientation: "vertical",
      className: "mx-4"
    },
    render: (args) => (
      <div className="flex items-stretch h-24">
        <div className="bg-red-200 flex-1 flex items-center justify-center">Left</div>
        <Separator {...args} />
        <div className="bg-blue-200 flex-1 flex items-center justify-center">Right</div>
      </div>
    ),
  };
  